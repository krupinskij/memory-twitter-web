import BackgroundPanel from './components/BackgroundPanel';
import ColorPanel from './components/ColorPanel';

const DisplayPage = () => {
  return (
    <div className="mx-16">
      <h1 className="text-center text-2xl font-bold mb-3">Personalizuj swój widok</h1>
      <p className="text-center text-textSecondary mb-5 mx-4">
        Zarządzaj ustawieniami koloru i tła. Te ustawienia będą mieć wpływ na wszystkie konta
        używane w tej przeglądarce.
      </p>
      <div className="mx-16">
        <BackgroundPanel />
        <ColorPanel />
      </div>
    </div>
  );
};

export default DisplayPage;
