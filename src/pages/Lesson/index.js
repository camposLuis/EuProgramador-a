import React from 'react';
import { Alert, Text } from 'react-native';

import Background from '~/components/Background';
import { Container, SubmitButton } from './styles';

export default function Lesson({ navigation }) {
  function handleSubmitLesson_01() {
    Alert.alert('Click', 'Lição 1');
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
      <Container>
        <SubmitButton onPress={handleSubmitLesson_01}>
          <Text>Lição 1</Text>
        </SubmitButton>
        <SubmitButton onPress={handleSubmitLesson_02}>
          <Text>Lição 2</Text>
        </SubmitButton>
        <SubmitButton onPress={handleSubmitLesson_03}>
          <Text>Lição 3</Text>
        </SubmitButton>
        <SubmitButton onPress={handleSubmitLesson_04}>
          <Text>Lição 4</Text>
        </SubmitButton>
      </Container>
    </Background>
  );
}
