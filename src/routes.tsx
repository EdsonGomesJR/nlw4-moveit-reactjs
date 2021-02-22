import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import ExperienceBar from './components/ExperienceBar';


function Routes() {

  return (

    <BrowserRouter>
     <Route path="/" exact component={ExperienceBar}/>
    </BrowserRouter>
  );
}

export default Routes;