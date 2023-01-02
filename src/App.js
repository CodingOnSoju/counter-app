import React, { Component } from "react";
import FirstComponent from "./components/learning-examples/FirstComponent";
//FirstComponent is the default class in the FirstComponent.jsx file
import SecondComponent from "./components/learning-examples/SecondComponent";
// import SecondComponent
import ThirdComponent from "./components/learning-examples/ThirdComponent";
// import SecondComponent
import Counter from "./components/counter/Counter";
import "./App.css";

//After stating the line above, you need to export the
//Class component in the FirstComponent.jsx file

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        {/* <LearningComponents></LearningComponents> to hide the components */}
      </div>
    );
  }
}

//jsx of the root component
//App is the parent component
//First,Second and Third Component are the children component
class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
        {/* Component should always start with a uppercase letter, if not it will
      not render on the webpage */}
      </div>
    );
  }
}

export default App; // without this line - you will get ERROR export 'default' (imported as 'App') was not found in './App' (module has no exports)

//This is will render because class App is not available
//Class Component

//Fourth Component
function FourthComponent() {
  return <div className="FourthComponent">FourthComponent</div>;
}
