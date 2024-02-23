import React from "react";
import { View, Text } from "react-native";
import { Container, Header, Title } from "./styles";

import coverImg from "../../assets/cover.png";

export function Home() {
  return (
    <Container>
      <Header source={coverImg}>
        <Title>FERNANDO</Title>
      </Header>
    </Container>
  );
}
