import styled from 'styled-components';
import HelloWorld from './hello-world/hello-world';
import { Route, Routes } from 'react-router-dom';

import { ProductList } from '@react-standalone/modules/products';
import { RedirectButton } from '@react-standalone/modules/shared/ui';
import { OrdersList } from '@react-standalone/modules/orders';

const StyledApp = styled.div`
  display: block;
`;

function Home() {
  return (
    <h1>
      <HelloWorld />
      <RedirectButton path="/products" description="Go to Products route" />
      <RedirectButton path="/orders" description="Go to Orders route" />
    </h1>
  );
}

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/orders" element={<OrdersList />}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
