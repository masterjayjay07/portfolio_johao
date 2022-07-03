import { Container, ContainerCards } from "./styles";
import { useCertificatesList } from "../../providers/certificates";

const CertificateCards = () => {
  const { certificates } = useCertificatesList();

  return (
    <Container>
      <h2>Certificados</h2>
      <ContainerCards>
        {certificates.map((element, index) => (
          <div key={index}>
            <h4>{element.name}</h4>
            <img src={element.img} alt="#" />
            <p>
              <a href={element.url} target="_blank" rel="noreferrer">
                {element.school}
              </a>
            </p>
          </div>
        ))}
      </ContainerCards>
    </Container>
  );
};

export default CertificateCards;
