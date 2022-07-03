import { Container } from "./styles";
import { useCertificatesList } from "../../providers/certificates";
import { useState } from "react";

const CertificateCards = () => {
  const { certificates } = useCertificatesList();

  // const [actualCertificated, setActualCertificated] = useState(0);

  // const changeCerticicatedUp = () => {
  //   if (actualCertificated + 1 > certificates.length) {
  //     return setActualCertificated(0);
  //   }
  //   return setActualCertificated(actualCertificated + 1);
  // };

  // const changeCerticicatedDown = () => {
  //   if (actualCertificated - 1 < 0) {
  //     return setActualCertificated(certificates.length - 1);
  //   }
  //   return setActualCertificated(actualCertificated - 1);
  // };

  return (
    <Container>
      <h2>Certificados</h2>
      <div>
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
      </div>
    </Container>
  );
};

export default CertificateCards;
