import Header from "./component/header";
import "./App.css"
import Home from './pages/Home';
import About from './pages/About'
import Product from "./pages/Product";
import FAQ from './pages/FAQ';
import Footer from './component/footer'

function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <About/>
    <Product/>
    <FAQ/>
    <Footer/>
    </div>
  );
}     

export default App;

 
