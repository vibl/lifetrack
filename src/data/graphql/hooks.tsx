import { FetchResult, useMutation } from "@apollo/client";
import { entitiesConfigC, TEntityTypeK, TGqlRequestK } from "config/entities";
import { entityGql } from "./entities";

export function useEntityMutation(
  action: TGqlRequestK,
  entityType: TEntityTypeK,
  onMutationCompleted: any) {
  const mutation = entityGql[entityType][action];
  const [mutate] = useMutation(mutation, {
    onCompleted: onMutationCompleted,
    update: (cache, { data }: FetchResult) => {
      if( !data ) return;
      if( action === "delete" ) {
        const entity = Object.values(data)[0].entity;
        const id = cache.identify(entity);
        cache.evict({ id });
        cache.gc();
      }
      if( action === "create" ) {
        const entity = Object.values(data)[0].entity;
        cache.writeQuery({
          query: mutation,
          data: entity,
        })
      }
    },
    refetchQueries: [{ query: entityGql[entityType].list }]
  });

  return (input: any) => mutate({ variables: { input } });
}
