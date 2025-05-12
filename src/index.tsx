import React from "react"

import type {
  ChildrenType,
  ProvidersTree,
  ProviderComponent,
} from "./build-provider-tree.type"

function buildProvidersTree<T extends ProvidersTree>(
  componentsWithProps: T,
): React.ComponentType<ChildrenType> {
  return componentsWithProps.reduceRight(
    (AccumulatedComponent, [Provider, props]) => {
      return ({ children }: ChildrenType) => (
        <Provider {...props}>
          <AccumulatedComponent>{children}</AccumulatedComponent>
        </Provider>
      )
    },
    ({ children }: ChildrenType) => children,
  )
}

export type { ProviderComponent }
export default buildProvidersTree
