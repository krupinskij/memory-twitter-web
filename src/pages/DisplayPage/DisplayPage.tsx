import { useTranslation } from 'react-i18next';

import BackgroundPanel from './components/BackgroundPanel';
import ColorPanel from './components/ColorPanel';

const DisplayPage = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-16">
      <h1 className="text-center text-2xl font-bold mb-3">{t('display:title')}</h1>
      <p className="text-center text-textSecondary mb-5 mx-4">{t('display:subtitle')}</p>
      <div className="mx-16">
        <BackgroundPanel />
        <ColorPanel />
      </div>
    </div>
  );
};

export default DisplayPage;
