import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading type="h1">The Wild Oasis</Heading>

      <Heading type="h2">Check in and out</Heading>
      <Button>Check in</Button>
      <Button>Check out</Button>
      <Input type="number" placeholder="Number of guest" />

      <Heading type="h3">Form</Heading>
      <Input type="number" placeholder="Number of guest" />
    </>
  );
}

export default App;
