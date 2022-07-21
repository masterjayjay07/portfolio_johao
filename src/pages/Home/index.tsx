import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";
import MainImg from "../../components/Main_img";
import Footer from "../../components/Footer";
import CertificateCards from "../../components/CertificateCards";
import WhatsappButton from "../../components/WhatsappButton";
import { Container } from "./styles";
import { useTechsList } from "../../providers/techs";

const Home = () => {
  const { dark } = useTechsList();

  return (
    <Container
      style={
        dark
          ? { color: "#f7ece1", backgroundColor: "#212121" }
          : { color: "#212121", backgroundColor: "#f7ece1" }
      }
    >
      <Header />
      <MainImg />
      <ProfileSection />
      <CertificateCards />
      <Footer />
      <WhatsappButton />
    </Container>
  );
};

export default Home;
