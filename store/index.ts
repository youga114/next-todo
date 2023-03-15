import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import todo from "./todo";
import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
} from "react-redux";

const rootReducer = combineReducers({
    todo: todo.reducer,
});

const reducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    }
    return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
    return configureStore({
        reducer,
        devTools: true,
    });
};

export const wrapper = createWrapper(initStore);
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

declare module "react-redux" {
    interface DefaultRootState extends RootState {}
}
