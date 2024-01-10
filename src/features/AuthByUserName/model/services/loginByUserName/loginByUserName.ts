import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUserName {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUserName, ThunkConfig<string>>(
    'login/loginByUsername',
    async ({ username, password }, { dispatch, extra, rejectWithValue }) => {
        try {
            const response = await extra.api.post('/login', { username, password });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate?.('/about');

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
