import './App.css';
import ProductForm from './productForm';

// refactor challenge!
// 1. aggregate feature or function by directory
// 2. create shared or atomic component
// 3. use context as dependency container
// 4. refactor all part into function-based component, use hook, and separate the UI logic
function App() {
  return (
    <div className="App">
      <ProductForm></ProductForm>
    </div>
  );
}

export default App;
