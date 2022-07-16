import NavBar from "../NavBar";
import MobileNavBar from "../MobileNavBar";
import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <div>
        <h1>Johão Pedro Vargas</h1>
        <NavBar />
        <MobileNavBar />
      </div>
    </Container>
  );
};

export default Header;
