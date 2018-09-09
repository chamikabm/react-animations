import React from 'react';

import './Modal2.css';
import CSSTransition from "react-transition-group/CSSTransition";

/*
This Modal uses CSSTransition Component.
 */

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal2 = (props) => {

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      //classNames={"fade-slide"}  Here it will automatically picks up the relevant css classes.
      //But if we want to use custom css class names we can do that in following way.
      classNames={{
        enter:'',
        enterActive: 'Modal2Open',
        exit: '',
        exitActive: 'Modal2Closed'
      }}
    >
      <div className={"Modal2"}>
        <h1>A Modal2</h1>
        <button className="Button" onClick={props.closed}>Dismiss</button>
      </div>
    </CSSTransition>
  );
};

export default modal2;