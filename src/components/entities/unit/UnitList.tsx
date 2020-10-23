import React from "react";
import Table from "components/table/Table";
import { useQuery, gql } from '@apollo/client';
import jsonata from "jsonata";

const query = gql`{
  units {
    nodes {
      abbreviation
      baseUnit
      multiplier
      trackers {
        totalCount
        nodes {
        entries {
          totalCount
          }
        }
      }
    }
  }
}`;

const jsonTransform = jsonata(`
  $ ~> |$|
    {
      'trackersCount': trackers.totalCount,
      'entriesCount': [trackers.nodes.entries.totalCount, 0][0] /* Sequence flattening. Cf. https://github.com/jsonata-js/jsonata/issues/370 */
    }, 
  ['__typename', 'trackers']|
`).evaluate;

const columnsDef = [
  {
    Header: 'Unit',
    accessor: 'name',
  },
  {
    Header: 'Abbreviation',
    accessor: 'abbreviation',
  },
  {
    Header: 'Base unit',
    accessor: 'baseUnit',
  },
  {
    Header: 'Multiplier',
    accessor: 'multiplier',
  },
  {
    Header: 'Trackers count',
    accessor: 'trackersCount',
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