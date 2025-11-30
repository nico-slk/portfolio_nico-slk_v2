import { useTranslation } from 'react-i18next';
import './App.css';
import Header from './components/header/Header';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="card">
        <p>

          {t('hello')}
        </p>
        <p>
          {t('about')}

        </p>
      </div>
    </>
  );
}

export default App;
