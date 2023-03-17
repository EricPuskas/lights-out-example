import { createContext, Dispatch, SetStateAction } from "react";

/**
 * Imports types
 */
import { Cell } from "../../types";

/**
 * Defines the Provider Props Interface
 */
export interface ProviderProps {
  children: React.ReactNode;
}

/**
 * Defines the Provider Values Interface
 */
export interface ProviderValues {
  board: Cell[][];
}

/**
 * Defines the default values
 */
export const defaultValues: ProviderValues = {
  board: []
};

/**
 * Defines a context where the state is stored and shared
 *
 * - This serves as a cache.
 * - Rather than each instance of the hook fetch the current state, the hook simply calls useContext to get the data from the top level provider
 */
export const context = createContext<ProviderValues>(defaultValues);
