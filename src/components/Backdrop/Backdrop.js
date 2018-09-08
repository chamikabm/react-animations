import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const cssClassName = ['Backdrop', props.show ? 'BackdropVisible' : 'ModalHidden'] ;

  return <div className={cssClassName.join(' ')}></div>
};

export default backdrop;