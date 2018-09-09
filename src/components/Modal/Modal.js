import React from 'react';

import './Modal.css';
import Transition from "react-transition-group/Transition";

const modal = (props) => {

  return (
    <Transition
      in={props.show}
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      {state => {

        const cssClassName = [
          'Modal',
          state === 'entering' ? 'ModalOpen' :
          state === 'exiting' ? 'ModalClosed' : null
        ] ;

        return (
          <div className={cssClassName.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>Dismiss</button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;