import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      You can now view create-react-app-with-styled-components in the browser.
    </Container>
  );
};

export default Announcement;
