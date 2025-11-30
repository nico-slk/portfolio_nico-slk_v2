import styles from './App.module.scss';
import Content from './components/content/Content';
import Header from './components/header/Header';

function App() {

  return (
    <main className={styles.main}>
      <Header />
      <Content />
    </main>
  );
}

export default App;
