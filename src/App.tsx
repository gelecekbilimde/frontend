import Router from './router';
import Header from './components/Header';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
