import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.View`
  background-color: rgba(255, 255, 255, 0.6);
  flex: 1;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 20;
`;

export const Texto = styled.Text`
align-items: center;
justify-content: center;
padding: 10px;
font-size: ${props => props.comentario ? 30 : 10};
`;

export const Botao = styled.Text`
padding: 10px;
font-size: 20;
background-color: #fff;
border-radius: 20;
width: 50%;
margin-top: 10%;
margin-bottom: 10%;
margin-left: 5%;
margin-right: 5%;
align-self: center;
text-align: center;
`;