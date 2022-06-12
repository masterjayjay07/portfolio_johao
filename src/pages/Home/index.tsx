import Header from "../../components/Header";
import ProfileSection from "../../components/ProfileSection";
import MainImg from "../../components/Main_img";
import Footer from "../../components/Footer";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <MainImg />
      <ProfileSection />
      <Footer />
    </Container>
  );
};

export default Home;
