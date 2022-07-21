import NavBar from "../NavBar";
import MobileNavBar from "../MobileNavBar";
import { Container } from "./styles";
import { useTechsList } from "../../providers/techs";

const Header = () => {
  const { changeBackground } = useTechsList();
  return (
    <Container>
      {/* <button onClick={changeBackground}>Dark</button> */}
      <div>
        <h1>Johão Pedro Vargas</h1>
        <NavBar />
        <MobileNavBar />
      </div>
    </Container>
  );
};

export default Header;
