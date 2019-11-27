import React, { useState, useEffect } from 'react';
import { ScrollView, Dimensions } from 'react-native';

import ReactTerminal from 'react-terminal-component';

import {
  Container,
  ContainerTerminal,
  Titulo,
  Terminal,
  TerminalFixo,
} from './styles';

export default function TelaTerminal() {
  const [textoTerminal, setTextoTerminal] = useState(
    `<div style="backgroundColor: black;"><p><span style="color: green;">$:</span><span>@@TEXTOAQUI</span></p></div>`
  );

  return (
    <Container>
      <Titulo>as</Titulo>

      <ContainerTerminal>
        <TerminalFixo>$:</TerminalFixo>
        <TerminalFixo>teste</TerminalFixo>
      </ContainerTerminal>
    </Container>
  );
}
