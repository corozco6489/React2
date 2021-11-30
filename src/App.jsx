 import './App.css';
 import Header from './components/header/Header';
 import About from './components/about/About';
 import Skills from './components/skills/Skills';
 import Portfolio from './components/portfolio/Portfolio';
 import Testimonial from './components/testimonial/Testimonial';
 import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Testimonial />
      <Footer />
      
    </div>
  );
}

export default App;
