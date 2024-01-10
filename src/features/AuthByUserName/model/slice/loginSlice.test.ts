import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice', () => {
    test('set user name', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '132',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUserName('12121212'))).toEqual({ username: '12121212' });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '132',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('12121212'))).toEqual({ password: '12121212' });
    });
});
