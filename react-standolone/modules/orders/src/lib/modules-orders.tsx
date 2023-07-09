import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ModulesOrdersProps {}

const StyledModulesOrders = styled.div`
  color: pink;
`;

export function ModulesOrders(props: ModulesOrdersProps) {
  return (
    <StyledModulesOrders>
      <h1>Welcome to ModulesOrders!</h1>
    </StyledModulesOrders>
  );
}

export default ModulesOrders;
