import {createElement, Component, render} from './toy-react.js'
class MyComponent extends Component {
  render() {
    return <div>
      <h1>My Component</h1>
      {this.children}
    </div>;
  }
  // constructor() {

  // }
  // setAttribute(name, value) {

  // }
  // appendChild() {

  // }
}

// class Component {
//   constructor() {

//   }
//   setAttribute(name, value) {

//   }
//   appendChild() {

//   }
// }

// for(let i of [1,2,3]) {
//   console.log('i', i);
// }

// function createElement(type, attributes, ...children) {
//   let e;
//   if(typeof type === 'string') {
//     e = document.createElement(type);
//   } else {
//     e = new type;
//   }
//   // let e = document.createElement(type);
//   for(let p in attributes) {
//     e.setAttribute(p, attributes[p]);
//   }
//   for(let child of children) {
//     if(typeof child === 'string') {
//       child = document.createTextNode(child);
//     }
//     e.appendChild(child);
//   }
//   return e;
// }

render(<MyComponent id="a" class="c" >
  <div>abc</div>
  <div></div>
  <div></div>
  <div></div>
</MyComponent>, document.body);
