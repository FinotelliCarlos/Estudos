import Header from './components/Header';
import Main from './pages/main';

import Routes from './router';

import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;