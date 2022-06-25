import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";
import MainImg from "../../components/Main_img";
import Footer from "../../components/Footer";
import CertificateCards from "../../components/CertificateCards";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <MainImg />
      <ProfileSection />
      <CertificateCards />
      <Footer />
    </Container>
  );
};

export default Home;
