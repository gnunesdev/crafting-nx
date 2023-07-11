import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export interface RedirectButtonProps {
  path?: string;
  description: string;
}

const StyledRedirectButton = styled.div`
  color: pink;
`;

export function RedirectButton({
  path = '/',
  description,
}: RedirectButtonProps) {
  const navigate = useNavigate();

  const handleRedirectToPath = () => {
    navigate(path);
  };

  return (
    <StyledRedirectButton>
      <button onClick={handleRedirectToPath}>{description}</button>
    </StyledRedirectButton>
  );
}

export default RedirectButton;
