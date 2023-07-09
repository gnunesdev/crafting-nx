import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ModulesProductsProps {}

const StyledModulesProducts = styled.div`
  color: pink;
`;

export function ModulesProducts(props: ModulesProductsProps) {
  return (
    <StyledModulesProducts>
      <h1>Welcome to ModulesProducts!</h1>
    </StyledModulesProducts>
  );
}

export default ModulesProducts;
