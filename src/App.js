
import './App.css';
import Navbar from './Navbar';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import taskReducer from './taskReducer';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Addtask from './Addtask';



function App() {

  const store = createStore(taskReducer)

  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Addtask />
      </Provider>

    </div>
  );
}

export default App;