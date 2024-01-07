import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <div>{t('Главная')}</div>
            <Counter />
        </>
    );
};

export default MainPage;
