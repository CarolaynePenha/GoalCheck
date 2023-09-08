import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";

export default function History() {
  return (
    <Container>
      <Header />
      <h> Histórico </h>
      <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      <Footer />
    </Container>
  );
}

// -------------------------------------  css
const Container = styled.section`
  width: 100%;
  height: fit-content;
  min-height: calc(100% - 160px);
  margin: 120px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h {
    width: 95%;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 500;
    color: #b35c72;
  }
  p {
    width: 95%;
    font-size: 16px;
    font-family: "Murecho", sans-serif;
  }
`;
