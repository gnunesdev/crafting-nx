import styled from 'styled-components';
import HelloWorld from './hello-world/hello-world';

const StyledApp = styled.div`
  display: block;
`;

export function App() {
  return (
    <StyledApp>
      <HelloWorld />
    </StyledApp>
  );
}

export default App;
