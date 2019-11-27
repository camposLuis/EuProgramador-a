import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Container, Texto, Card } from './styles';
import Background from '~/components/Background';
import styles from '../Apresentation/styles';
//import { ScrollView } from 'react-native-gesture-handler';

export default function Principal({ navigation }) {
  return (

    <Background>
      <Container>
        <ScrollView>
          <Card>
            <Texto comentario={true}>Antes de por a ma na massa,
              precisamos ver alguns conceitos de programação antes
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
               reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
               ariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
               culpa qui officia deserunt mollit anim id est laborum."
          </Texto>
          </Card>
        </ScrollView>
      </Container>
    </Background>
  );

}
