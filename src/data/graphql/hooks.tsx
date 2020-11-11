import { FetchResult, useMutation } from "@apollo/client";
import { entitiesConfig, TentityTypeK, TgqlRequestK } from "config/entities";

export function useEntityMutation(
  action: TgqlRequestK,
  entityType: TentityTypeK,
  onMutationCompleted: any) {
  const mutation = entitiesConfig[entityType].gql[action];
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
    refetchQueries: [{ query: entitiesConfig[entityType].gql.list }]
  });

  return (input: any) => mutate({ variables: { input } });
}
