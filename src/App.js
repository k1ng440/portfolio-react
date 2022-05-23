import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div>
      <div className="App container mx-auto px-4 px-lg-5 text-sky-400">
        <Layout> 
          <Header />
          <About />
        </Layout>
      </div>
    </div>
  );
}

export default App;