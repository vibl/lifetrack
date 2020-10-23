import React from "react";
import Table from "components/table/Table";
import { useQuery, gql } from '@apollo/client';
import jsonata from "jsonata";

const query = gql`{
  trackers {
    nodes {
      name
      entries {
        totalCount
      }
      unit {
        abbreviation
      }
      category {
        name
      }
    }
  }
}`;

const jsonTransform = jsonata(`
  $ ~> |$|
    {
      'category': category.name,
      'unit': unit.abbreviation,
      'entriesCount': [entries.totalCount, 0][0] /* Sequence flattening. Cf. https://github.com/jsonata-js/jsonata/issues/370 */
    }, 
  ['__typename', 'trackers']|
`).evaluate;

const columnsDef = [
  {
    Header: 'Tracker',
    accessor: 'name',
  },
  {
    Header: 'Unit',
    accessor: 'unit',
  },
  {
    Header: 'Category',
    accessor: 'category',
  },
  {
    Header: 'Entries count',
    accessor: 'entriesCount',
  },
]

const CategoryList = () => {
  const { loading, error, data } = useQuery(query);

  const columns = React.useMemo(
    () => columnsDef,
    []
  );
  console.log({data});

  const rowsData = React.useMemo(
    () => data?.units?.nodes && jsonTransform(data.units.nodes)
    , [data]);

  console.log({rowsData});

  if (loading || !rowsData ) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Table columns={columns} data={rowsData} />
    </div>
  )
}

export default CategoryList;