import { Container } from "./styles";
// import BouncingBalls from "../BouncingBalls";
import Typewriter from "typewriter-effect";

const MainImg = () => {
  return (
    <Container>
      <Typewriter
        options={{ loop: true, delay: 120, deleteSpeed: 50 }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span style="color: #6A5ACD;">if</span><span> success === </span><span style="color:#00BFFF;">true</span><span> {</span><br>'
            )
            .pauseFor(1000)
            .typeString(
              '<span style="color:#FFFF00">  celebrate</span><span>()</span><br>'
            )
            .typeString(
              '<span>}</span><br>'
            )
            .pauseFor(1000)
            .typeString(
              '<span style="color: #6A5ACD;">while</span><span> success === </span><span style="color:#00BFFF;">false</span><span> {</span><br>'
            )
            .pauseFor(1000)
            .typeString(
              '<span style="color:#FFFF00">  try_again</span><span>()</span><br>'
            )
            .typeString(
              '<span>}</span><br>'
            )
            .pauseFor(1000)
            .deleteAll()
            .start();
        }}
      />
    </Container>
  );
};

export default MainImg;
