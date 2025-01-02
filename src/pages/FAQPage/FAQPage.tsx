import { useTranslation } from 'react-i18next';

const FAQPage = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="mx-8">
      <div className="pb-12">
        <h1 className="text-2xl font-bold mb-3">{t('faq:blocked_levels.q')}</h1>
        <p>{t('faq:blocked_levels.a1')}</p>
        <p>{t('faq:blocked_levels.a2')}</p>
      </div>
      <div className="pb-12">
        <h1 className="text-2xl font-bold mb-3">{t('faq:time.q')}</h1>
        <p>{t('faq:time.a')}</p>
      </div>
      <div className="pb-12">
        <h1 className="text-2xl font-bold mb-3">{t('faq:clicks.q')}</h1>
        <p>{t('faq:clicks.a1')}</p>
        <p>{t('faq:clicks.a2')}</p>
      </div>
      <div className="pb-12">
        <h1 className="text-2xl font-bold mb-3">{t('faq:stop_following.q')}</h1>
        <p>{t('faq:stop_following.a')}</p>
      </div>
      <div className="pb-12">
        <h1 className="text-2xl font-bold mb-3">{t('faq:following_change.q')}</h1>
        <p>{t('faq:following_change.a')}</p>
      </div>
      <div className="pb-12">
        <h1 className="text-2xl font-bold mb-3">{t('faq:me_change.q')}</h1>
        <p>{t('faq:me_change.a')}</p>
      </div>
      {i18n.language === 'pl' && (
        <div className="pb-12">
          <h1 className="text-2xl font-bold mb-3">{t('faq:language.q')}</h1>
          <p>{t('faq:language.a')}</p>
        </div>
      )}
      <div className="pb-12">
        <h1 className="text-2xl font-bold mb-3">{t('faq:logout.q')}</h1>
        <p>{t('faq:logout.a')}</p>
      </div>
    </div>
  );
};

export default FAQPage;
