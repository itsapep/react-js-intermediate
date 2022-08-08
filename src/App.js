import './App.css';
import ProductForm from './component/productForm';
import { DepsContextProvider } from './context/depsContextProvider';

// refactor challenge!
// 1. aggregate feature or function by directory
// 2. create shared or atomic component
// 3. use context as dependency container
// 4. refactor all part into function-based component, use hook, and separate the UI logic
function App() {
  return (
    <div className="App">
      <DepsContextProvider>
        <ProductForm/>
      </DepsContextProvider>
    </div>
  );
}

export default App;
