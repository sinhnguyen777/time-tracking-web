import {
  useInjectReducer as useReducer,
  useInjectSaga as useSaga
} from "redux-injectors";
import { Saga } from "redux-saga";
import { SagaInjectionModes } from "redux-injectors";
import { Reducer, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@/types";

type RequiredRootState = Required<RootState>;

export type RootStateKeyType = keyof RootState;

export type InjectedReducersType = {
  [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>;
};

export interface InjectReducerParams<Key extends RootStateKeyType> {
  key: Key;
  reducer: Reducer<RequiredRootState[Key], AnyAction>;
}

export interface InjectSagaParams {
  key: RootStateKeyType | string;
  saga: Saga;
  mode?: SagaInjectionModes;
}

/* Wrap redux-injectors with stricter types */
export function useInjectReducer<Key extends RootStateKeyType>(
  params: InjectReducerParams<Key>
) {
  return useReducer(params);
}

export function useInjectSaga(params: InjectSagaParams) {
  return useSaga(params);
}
