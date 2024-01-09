import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList,
    removeAfterUnmount?: boolean
}

type ReducerlistEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerlistEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name}` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerlistEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name}` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div>{children}</div>
    );
};
