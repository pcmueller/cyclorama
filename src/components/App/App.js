import React, { useState, useEffect } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Main from '../Main/Main';

const App = () => {

  return (
      <div className='app'>
        <Main></Main>
      </div>
  );
}

export default App;
