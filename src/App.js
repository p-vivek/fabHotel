import SearchField from './containers/SearchField';
import Logo from './containers/Logo';
import './SCSS/App.scss';
import React from 'react'

function App() {
  return ( <>

    <Logo/>
    <SearchField data-testid="child"/> 

  </>
  );
}

export default App;
