import { Component } from 'react';
import './App.css';
import StoreData from './features/product/StoreData';
import WrappedComponent from './features/product/TryStoreData';
// import { lensPath, get, set } from "ramda";

// class Toggle extends Component {
//   constructor(props) {
//     super(props);
//     this.ls = localStorage;
//     this.state = {
//       buttons: [],
//       userName: '',
//       favouriteFood: ''
//     };
//   }

//   componentWillMount() {
//     const lsState = this.ls.getItem("state");
//     if (!lsState) {
//       this.fill();
//     } else {
//       this.setState(() => JSON.parse(lsState));
//     }
//   }

//   componentDidUpdate() {
//     this.ls.setItem("state", JSON.stringify(this.state));
//   }

//   fill = () => {
//     this.setState(() => ({
//       buttons: Array(this.props.count)
//         .fill({
//           isToggleOn: false
//         })
//         .map((item, id) => ({
//           ...item,
//           id
//         }))
//     }));
//   };

//   clear = () => {
//     this.ls.removeItem("state");
//     this.fill();
//   };

//   handleClick = idx => {
//     const path = lensPath(["buttons", idx, "isToggleOn"]);
//     const nextState = set(
//       path,
//       !this.state.buttons[idx].isToggleOn,
//       this.state
//     );
//     this.setState(() => nextState);
//     // this.setState(state => ({
//     //   buttons: state.buttons.map(button =>
//     //     button.id !== idx
//     //       ? button
//     //       : { ...button, isToggleOn: !button.isToggleOn }
//     //   )
//     // }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.clear}>Clear localStorage</button>
//         <hr />
//         {this.state.buttons.map(button => (
//           <button
//             key={button.id}
//             onClick={this.handleClick.bind(null, button.id)}
//           >
//             {button.isToggleOn ? "ON" : "OFF"}
//           </button>
//         ))}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Toggle count={100} />, document.getElementById("root"));


function App() {
  return (
    <div>
      <StoreData/>
      {/* <WrappedComponent></WrappedComponent> */}
    </div>
  );
}

export default App;
