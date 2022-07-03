import NavBar from "../NavBar";
import MobileNavBar from "../MobileNavBar";
import { Container } from "./styles";
import { useEffect, useState } from "react";

const Header = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const resizeWindow = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", resizeWindow);
  //   return () => {
  //     window.removeEventListener("resize", resizeWindow);
  //   };
  // }, []);

  return (
    <Container>
      <h1>Johão Pedro Vargas</h1>
      {/* {width < 600 ? <MobileNavBar /> : <NavBar />} */}
      <NavBar />
      <MobileNavBar />
    </Container>
  );
};

export default Header;
