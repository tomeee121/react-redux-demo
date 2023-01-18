import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import CakeContainerHooks from './components/CakeContainerHooks';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <CakeContainerHooks/>
      </div>
    </Provider>
  );
}

export default App;
