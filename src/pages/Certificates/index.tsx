import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CertificateCards from "../../components/CertificateCards";
import { Container } from "./styles";

const Certificates = () => {
  return (
    <Container>
      <Header />
      <CertificateCards />
      <Footer />
    </Container>
  );
};

export default Certificates;
