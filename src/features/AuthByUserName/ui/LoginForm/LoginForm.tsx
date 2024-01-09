import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUserName/loginByUserName';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
    const dispatch = useDispatch();

    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((username: string) => dispatch(loginActions.setUserName(username)), [dispatch]);
    const onChangePassword = useCallback((password:string) => dispatch(loginActions.setPassword(password)), [dispatch]);
    const onLoginClick = useCallback(() => dispatch(loginByUsername({ username, password })), [dispatch, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title="Форма авторизации" />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input type="text" className={cls.input} placeholder="Логин" autofocus onChange={onChangeUserName} value={username} />
                <Input type="text" className={cls.input} placeholder="Пароль" onChange={onChangePassword} value={password} />

                <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>Войти</Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
