import styled from 'styled-components';
import { RedirectButton } from '@react-standalone/modules/shared/ui';

/* eslint-disable-next-line */
export interface ProductListProps {}

const StyledProductList = styled.div`
  color: pink;
`;

export function ProductList(props: ProductListProps) {
  return (
    <StyledProductList>
      <h1>Welcome to ProductList!</h1>
      <RedirectButton description="Back to Home" />
    </StyledProductList>
  );
}

export default ProductList;
