import React, { useState, useEffect } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Main from '../Main/Main';
import Details from '../Details/Details';

const App = () => {

  return (
    <Router>
      <Route>
        <Main></Main>
      </Route>
      {/* <Route>
        <Details></Details>
      </Route> */}
    </Router>
  )
}

export default App;
