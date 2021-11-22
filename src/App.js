import { Switch, Route } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MyProjects from './pages/MyProjects';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div id="App">
      <header>
        <Navbar />
      </header>
      <div id="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-projects" component={MyProjects} />
          <Route path="/about-me" component={AboutMe} />
        </Switch>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
