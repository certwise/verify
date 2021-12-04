import { createContext, useReducer, Dispatch, Reducer } from "react";
import initialState from "./initialState";
import reducer from "./reducer";
import { action, state } from "./types";

export * as actions from "./actions";
export * as types from "./types";

const Context = createContext<{
	store: state;
	dispatch: Dispatch<action>;
}>({ store: initialState, dispatch: () => {} });

const useStore = (): {
	store: state;
	dispatch: Dispatch<action>;
} => {
	const [store, dispatch] = useReducer<Reducer<state, action>>(
		reducer,
		initialState
	);
	return { store, dispatch };
};

export function StoreProvider({ children }: { children: React.ReactNode }) {
	const { store, dispatch } = useStore();
	return (
		<Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
	);
}
export default Context;
