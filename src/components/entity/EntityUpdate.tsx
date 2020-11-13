import React from "react";
import { useQuery } from "@apollo/client";
import { useEntityPageTuple } from "components/Router";
import { entityGql } from "data/graphql/entities";
import { EFormType, EntityForm } from "./EntityForm";

export function EntityUpdate() {

  const [entityType, , entityId] = useEntityPageTuple();
  console.log("entityId:", entityId);
  const query = entityGql[entityType].loadBeforeUpdate;
  const { loading, error, data } =
    useQuery(query, { variables: { input: entityId } });
  const dataO = data?.entity;
  console.log("dataO:", dataO);

  function getDefaultValue(fieldId: string) {
    return dataO[fieldId];
  }

  if (loading || !dataO) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  return (
    <EntityForm
      formType={EFormType.create}
      getDefaultValue={getDefaultValue}
    />
  );
}
