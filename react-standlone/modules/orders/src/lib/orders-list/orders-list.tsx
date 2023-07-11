import styled from 'styled-components';
import { RedirectButton } from '@react-standalone/modules/shared/ui';

/* eslint-disable-next-line */
export interface OrdersListProps {}

const StyledOrdersList = styled.div`
  color: pink;
`;

export function OrdersList(props: OrdersListProps) {
  return (
    <StyledOrdersList>
      <h1>Welcome to OrdersList!</h1>
      <RedirectButton description="Back to Home" />
    </StyledOrdersList>
  );
}

export default OrdersList;
