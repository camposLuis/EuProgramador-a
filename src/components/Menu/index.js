import React from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import ImageAvatar from '~/assets/avatar.jpg';
import Button from '~/components/Button';
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
import Background from '../Background';

export default function Menu() {
  function Inicio() {
    Alert.alert(`Teste`);
  }
  function Intermediario() {
    Alert.alert(`Teste 2`);
  }
  function Avancado() {
    Alert.alert(`Teste 3`);
  }
  function Outro() {
    Alert.alert(`Teste 4`);
  }

  return (
    <Background>
      <Container>
        <Avatar source={ImageAvatar} />

        <Button onPress={Inicio}>
          <ContainerMenu>
            <ContainerMenuTexto>
              <TextoMenu>Inicio</TextoMenu>
            </ContainerMenuTexto>
            <ContainerSubMenuTexto>
              <TextoSubMenu>
                Toda jornada tem um começo, bora iniciar a nossa?
              </TextoSubMenu>
            </ContainerSubMenuTexto>
          </ContainerMenu>
        </Button>

        <Button onPress={Intermediario}>
          <ContainerMenu>
            <ContainerMenuTexto>
              <TextoMenu>Intermediario</TextoMenu>
            </ContainerMenuTexto>
            <ContainerSubMenuTexto>
              <TextoSubMenu>
                Depois de entrar na caminhada, precisamos aprimorar nossas armas
              </TextoSubMenu>
            </ContainerSubMenuTexto>
          </ContainerMenu>
        </Button>

        <Button onPress={Avancado}>
          <ContainerMenu>
            <ContainerMenuTexto>
              <TextoMenu>Avançado</TextoMenu>
            </ContainerMenuTexto>
            <ContainerSubMenuTexto>
              <TextoSubMenu>
                Para estar preparado para qualquer batalha, precisamos de todas
                as armas possiveis.
              </TextoSubMenu>
            </ContainerSubMenuTexto>
          </ContainerMenu>
        </Button>

        <Button onPress={Outro}>
          <ContainerMenu>
            <ContainerMenuTexto>
              <TextoMenu>Nossos Parceiros</TextoMenu>
            </ContainerMenuTexto>
            <ContainerSubMenuTexto>
              <TextoSubMenu>
                Todo guerreira precisa de ajuda, pois juntos somos mais fortes,
                venha visitar uma comunidade em crescimento.
              </TextoSubMenu>
            </ContainerSubMenuTexto>
          </ContainerMenu>
        </Button>
      </Container>
    </Background>
  );
}
