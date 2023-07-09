import styled from 'styled-components';
import HelloWorld from './hello-world/hello-world';
import { Route, Routes } from 'react-router-dom';

import { ProductList } from '@react-standalone/modules/products';

const StyledApp = styled.div`
  display: block;
`;

function Home() {
  return (
    <h1>
      Home
      <HelloWorld />
    </h1>
  );
}

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
