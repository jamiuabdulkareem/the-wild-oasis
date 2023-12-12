import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <H1>The Wild Oasis</H1>
      <Button>Check in</Button>
      <Input type="number" placeholder="Number of guest" />
    </>
  );
}

export default App;
