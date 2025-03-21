import type { FC } from 'react';
import { Container, Content, Footer } from 'react-bulma-components';

export const Component: FC = () => (
  <Footer>
    <Container>
      <Content textAlign="right">
        <p>Build at {BUILD_TIMESTAMP}</p>
        <p>&copy; attakei.</p>
      </Content>
    </Container>
  </Footer>
);

export default Component;
