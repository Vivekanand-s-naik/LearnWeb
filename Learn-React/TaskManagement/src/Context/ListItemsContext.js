import { createContext, useContext } from "react";

export const ListItemsContext = createContext();

const ListItemsProvider = ListItemsContext.Provider;

export default function UseListItemsContext() {
  return useContext(ListItemsProvider);
}
