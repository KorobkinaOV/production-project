import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode,
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    const navigate = useNavigate();
    const store = createReduxStore(initialState as StateSchema, navigate);

    return (
        <Provider store={store}>{children}</Provider>

    );
};
