import { FetchResult, gql, useMutation } from "@apollo/client";
import entitiesConfig, { TentityTypeK, TgqlRequestK } from "config/entity";

export function useEntityMutation(
  action: TgqlRequestK,
  entityType: TentityTypeK,
  onMutationCompleted: any) {
  const mutation = entitiesConfig[entityType].gql[action];
  const [mutate] = useMutation(gql(mutation), {
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
          query: gql(mutation),
          data: entity,
        })
      }
    },
    refetchQueries: [{ query: gql(entitiesConfig[entityType].gql.list) }]
  });

  return (input: any) => mutate({ variables: { input } });
}
