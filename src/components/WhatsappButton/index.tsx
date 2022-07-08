import { Container } from "./styles";
import whatsapp from "../../assets/images/whatsapp.png";

const WhatsappButton = () => {
  return (
    <Container>
      <a
        href="https://api.whatsapp.com/send?phone=5521995193029&text=Ol%C3%A1!!"
        target="_blank"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="whatsapp" />
      </a>
    </Container>
  );
};

export default WhatsappButton;
