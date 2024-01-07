import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => (
    <div className={classNames(cls.LoginForm, {}, [className])}>
        <Input type="text" className={cls.input} placeholder="Логин" autofocus />
        <Input type="text" className={cls.input} placeholder="Пароль" />

        <Button className={cls.loginBtn}>Войти</Button>
    </div>
);
