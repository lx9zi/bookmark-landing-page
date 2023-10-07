import Main from './pages/Main'
import Feature from './pages/Feature'
import Extention from './pages/Extention'
import Questions from './pages/Questions';
import Footer from './pages/Footer';
function App() {
  return (
    <>
      <div className="container">
        <Main />
        <Feature />
        <Extention />
        <Questions />
      </div>
      <Footer />
    </>
  );
}

export default App;
