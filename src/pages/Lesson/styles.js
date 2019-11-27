import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
// import Button from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 15px;
  margin-right: 15px;
`;
export const SubmitButton = styled(RectButton)`
  margin-top: 20px;
  height: 50px;
  background: #ffff;
  border-radius: 4px;
  align-items: center;
  padding-right: 5px;
  padding-left: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: center;
  align-self: stretch;
`;

export const Avatar = styled.Image`
  height: 50px;
  width: 50px;
`;
