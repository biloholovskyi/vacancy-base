import {
  type AnyAction, type EnhancedStore, type Reducer, type ReducersMapObject
} from '@reduxjs/toolkit'
import { type CombinedState } from 'redux'
import { rtkApi } from '../../../shared/api/rtkApi';

export interface StateSchema {
    // counter: CounterSchema
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedReducers: () => MountedReducers
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}
