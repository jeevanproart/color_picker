import './App.css';
import { Picker } from './components/Picker';

function App() {
  return (
    <div className='App'>
      <Picker colors={['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'brown', 'gray', 'black', 'white', 'violet', 'indigo', 'teal', 'magenta', 'olive', 'maroon', 'navy', 'lime', 'fuchsia', 'aqua', 'silver', 'gold']}/>
    </div>
  );
}

export default App;