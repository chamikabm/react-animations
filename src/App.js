import React, { Component } from "react";

import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    isModalOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({isModalOpen: true});
  };

  closeModal = () => {
    this.setState({isModalOpen: false});
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button"
                onClick={() => this.setState(preState => ({showBlock: !preState.showBlock}))}>
          Toggle Box
        </button>
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("On Enter")}
          onEntering={() => console.log("On Entering")}
          onEntered={() => console.log("On Entered")}
          onExit={() => console.log("On Exit")}
          onExiting={() => console.log("On Exiting")}
          onExited={() => console.log("On Exit")}
        >
          {state => (
            <div style={{
              margin: "auto",
              width: 100,
              height: 100,
              backgroundColor: "red",
              transition: "opacity 1s ease-out",
              opacity: state === 'exiting' ? 0 : 1,
            }}/>
          )}
        </Transition>
        <br/>
        <br/>
        <Modal show={this.state.isModalOpen} closed={this.closeModal}/>

        {
          this.state.isModalOpen ?
            <div>
              <Backdrop show />
            </div> : null
        }
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
