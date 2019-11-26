import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export default styled(LinearGradient).attrs({
  colors: ['#131415', '#402845'],
})`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
