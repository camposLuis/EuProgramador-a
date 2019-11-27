import styled from 'styled-components/native';
import HTML from 'react-native-render-html';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
`;

export const Titulo = styled.Text`
  font-size: 16px;
`;

export const ContainerTerminal = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TerminalFixo = styled.Text`
  background-color: #000;
  color: green;
`;
