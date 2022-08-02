import { Component } from "react";

const withStorage = (WrappedComponent, HandlerHoc) => {
  return class extends Component {
    componentDidMount() {
       HandlerHoc(this.props.userName, this.props.favouriteFood)
    }
    
    render() {
      return (
        <WrappedComponent />
      );
    }
  }
}

export default withStorage;