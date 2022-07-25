import { Container, ContainerCards, ContainerCard } from "./styles";
import { useCertificatesList } from "../../providers/certificates";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CertificateCards = () => {
  const { certificates } = useCertificatesList();

  return (
    <Container>
      <h2>Certificados</h2>
      <ContainerCards>
        <Carousel
          showThumbs={false}
          infiniteLoop
          swipeScrollTolerance={10}
          preventMovementUntilSwipeScrollTolerance
        >
          {certificates.map((element, index) => (
            <ContainerCard key={index}>
              <h4>{element.name}</h4>
              <img src={element.img} alt="#" />
              <p>
                <a href={element.url} target="_blank" rel="noreferrer">
                  {element.school}
                </a>
              </p>
            </ContainerCard>
          ))}
        </Carousel>
      </ContainerCards>
    </Container>
  );
};

export default CertificateCards;
