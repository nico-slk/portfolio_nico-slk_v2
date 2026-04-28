import BackgroundBlobs from './components/common/BackgroundBlobs';
import Main from "./components/content/Main";
import Footer from './components/content/footer/Footer';
import Header from "./components/content/header/Header";

const App = () => {
  return (
    <>
      <div id="root-container">

        <BackgroundBlobs />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default App;
