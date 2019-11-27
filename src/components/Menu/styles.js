import styled from 'styled-components/native';
import {Image, View} from 'react-native'

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
`

export const ContainerMenu = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const ContainerMenuTexto = styled.View`
  align-items: center;

  /*
  border-style: solid;
  border-color: #FFF;
  border-bottom-width: 2px;
  */


`;

export const ContainerSubMenuTexto = styled.View`
  align-items: center;
`;

export const TextoMenu = styled.Text`
  font-size: 16;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TextoSubMenu = styled.Text`
  font-size: 14;
  margin-top: 10px;
  margin-bottom: 10px;
`;
