import { Container } from "./styles";
import NavLinks from "../NavLinks";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const MobileNavBar = () => {
  const [open, setOpen] = useState(false);

  const openIcon = <IoMdMenu onClick={() => setOpen(!open)} />;

  const closeIcon = <IoMdClose onClick={() => setOpen(!open)} />;
  return (
    <Container>
      {open ? closeIcon : openIcon}
      {open && <NavLinks />}
    </Container>
  );
};

export default MobileNavBar;
