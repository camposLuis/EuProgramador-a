import React, { useEffect } from 'react';
import { Image } from 'react-native';

import { Container } from './styles';
import Background from '~/components/Background';

import logo from '~/assets/logo2.png';

export default function Apresentation({ navigation }) {
  useEffect(() => {
    setTimeout(() => nextLoad(), 2000);
  }, []);

  function nextLoad() {
    navigation.navigate('Principal');
  }

  return (
    <Background>
      <Container>
        <Image
          style={{ width: 380, height: 114, resizeMode: 'stretch' }}
          source={logo}
        />
      </Container>
    </Background>
  );
}
