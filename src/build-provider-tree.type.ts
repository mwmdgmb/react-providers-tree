import React from "react"

type ChildrenType = {
  children: React.ReactNode
}

type ProviderComponent<T extends React.ElementType> = [
  T,
  Omit<React.ComponentProps<T>, "children">,
]

type ProvidersTree = readonly ProviderComponent<React.ElementType>[]

export type { ChildrenType, ProvidersTree, ProviderComponent }
