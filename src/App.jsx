import React from 'react';
import Navabr from './content/components/navbar/Navabr';
import Products from './content/components/products/Products';
import Counter from './content/components/counter/Counter';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navabr />
      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </div>
  );
};

export default App;