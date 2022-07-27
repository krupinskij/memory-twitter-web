import { useTranslation } from 'react-i18next';

const FAQPage = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-8">
      <h1 className="text-2xl font-bold mb-3">{t('display:title')}</h1>
      <p className="mb-12">{t('display:subtitle')}</p>
    </div>
  );
};

export default FAQPage;
