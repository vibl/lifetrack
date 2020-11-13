import { FetchResult, useMutation } from "@apollo/client";
import { TEntityTypeK } from "config/entities";
import { entityGql, TGqlRequestK } from "./entities";

export function useEntityMutation(
  action: TGqlRequestK,
  entityType: TEntityTypeK,
  onMutationCompleted: any,
) {
  const mutation = entityGql[entityType][action];
  const [mutate] = useMutation(mutation, {
    onCompleted: onMutationCompleted,
    update: (cache, { data }: FetchResult) => {
      if (!data) return;
      const { entity } = Object.values(data)[0];
      if (action === "delete") {
        const id = cache.identify(entity);
        cache.evict({ id });
        cache.gc();
      }
      if (action === "create") {
        cache.writeQuery({
          query: mutation,
          data: entity,
        });
      }
    },
    refetchQueries: [{ query: entityGql[entityType].list }],
  });

  return (input: any) => mutate({ variables: { input } });
}
