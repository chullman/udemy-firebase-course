import { createContext, useContext } from "react";

// We need to export StateContext because we need to call the provider on it
export const StateContext = createContext();

// useContext hook accepts a context object (i.e. from createContext())
// and returns the current context value, as given by the nearest context provider
// for the given context.
// useGlobalState will be our exported function that will get the value of the context
export const useGlobalState = () => useContext(StateContext);
