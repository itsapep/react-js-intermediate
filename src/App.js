import { Component } from 'react';
import './App.css';
import data from './products.json'
// import ClickCounter from './component/click_counter';
// import HoverCounter from './component/hover_counter';
import HelloComponent from './component/HelloComponent';
import ProductCard from './features/product/ProductCard';
import ProductList from './features/product/ProductList';

const filterProducts = (searchTerm) => {
  searchTerm = searchTerm.toUpperCase()
  return data.products.filter(product => {
    let str = `${product.productId} ${product.productName}`.toUpperCase();
    return str.indexOf(searchTerm) >= 0;
  })
}

const WithSearch = WrappedComponent => {
  class WithSearch extends Component{
    state = {
      searchTerm: ""
    };
    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      let { searchTerm } = this.state;
      let filteredProducts = filterProducts(searchTerm);
      return (
          <>
            <input
              onChange={this.handleSearch}
              value={searchTerm}
              type="text"
              placeholder="Search"
            />
            <WrappedComponent data={filteredProducts} />
          </>
      );
    }
  };
  WithSearch.displayName = `WithSearch(${getDisplayName(WrappedComponent)})`;
  return WithSearch;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.productName || 'Component';
}

const ProductsListWithSearch = WithSearch(ProductList);

function App() {
  return (
    <div>
      {/* <ClickCounter/> */}
      {/* <HoverCounter/> */}
      {/* <ProductCard data={data.products}/> */}
      {/* <ProductList data={data.products}/> */}
      <ProductsListWithSearch/>

    </div>
  );
}

export default App;
