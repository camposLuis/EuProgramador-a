import React, { useEffect } from "react";
import { Image } from "react-native";

import { Container } from "./styles";
import Background from "~/components/Background";

import logo from "~/assets/logo2.png";

export default function Apresentation({ navigation }) {
  useEffect(() => {
    setTimeout(() => nextLoad(), 1000);
  }, []);

  function nextLoad() {
<<<<<<< HEAD
    navigation.navigate('Lessons');
=======
    navigation.navigate("Slider");
>>>>>>> 88ff0ce9729d775a67f3731ff618ba4e3d3106c7
  }

  return (
    <Background>
      <Container>
        <Image
<<<<<<< HEAD
          style={{ width: 281, height: 84, resizeMode: 'stretch' }}
=======
          style={{ width: 281, height: 84, resizeMode: "stretch" }}
>>>>>>> 88ff0ce9729d775a67f3731ff618ba4e3d3106c7
          source={logo}
        />
      </Container>
    </Background>
  );
}
