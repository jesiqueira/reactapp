// import Footer from './Footer';
// import Form from './Form/Form';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
  const { pathname } = window.location;
  // console.log(pathname);
  let Pagina = pathname === '/produtos' ? Produtos : Home;
  return (
    <>
      <Header />
      <Pagina />
      {/* <Form />
      <Footer /> */}
    </>
  );
};

export default App;
