import React from 'react';
import '../App/App.css';
import Listing from '../Listing/Listing';
import etsy from '../../data/etsy';

function App() {
  return <Listing items={etsy}/>;
}

export default App;