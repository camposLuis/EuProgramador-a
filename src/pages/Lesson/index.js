import React from 'react';
import { Alert, Text, ScrollView } from 'react-native';
import ImageAvatar from '~/assets/avatar.jpg';

import Button from '~/components/Button';
import Background from '~/components/Background';

import {
  Container,
  Avatar,
  ContainerMenu,
  TextMenu,
  TextoSubMenu,
  TextoMenu,
  ContainerMenuTexto,
  ContainerSubMenuTexto,
} from './styles';

export default function Lesson({ navigation }) {
  function handleSubmitLesson_01() {
    Alert.alert('Click');
  }
  function handleSubmitLesson_02() {
    Alert.alert('Click', 'Lição 2');
  }
  function handleSubmitLesson_03() {
    Alert.alert('Click', 'Lição 3');
  }
  function handleSubmitLesson_04() {
    Alert.alert('Click', 'Lição 4');
  }
  return (
    <Background>
      <ScrollView>
        <Container>
          <Avatar source={ImageAvatar} />
          <Button onPress={handleSubmitLesson_01}>
            <ContainerMenu>
              <ContainerMenuTexto>
                <TextoMenu>Lição 1</TextoMenu>
              </ContainerMenuTexto>
            </ContainerMenu>
          </Button>
          <Button onPress={handleSubmitLesson_02}>
            <ContainerMenu>
              <ContainerMenuTexto>
                <TextoMenu>Lição 2</TextoMenu>
              </ContainerMenuTexto>
            </ContainerMenu>
          </Button>
          <Button onPress={handleSubmitLesson_03}>
            <ContainerMenu>
              <ContainerMenuTexto>
                <TextoMenu>Lição 3</TextoMenu>
              </ContainerMenuTexto>
            </ContainerMenu>
          </Button>
          <Button onPress={handleSubmitLesson_04}>
            <ContainerMenu>
              <ContainerMenuTexto>
                <TextoMenu>Lição 4</TextoMenu>
              </ContainerMenuTexto>
            </ContainerMenu>
          </Button>
        </Container>
      </ScrollView>
    </Background>
  );
}
