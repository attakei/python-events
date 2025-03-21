import type { FC } from 'react';
import { Container, Icon, Navbar } from 'react-bulma-components';

export const Component: FC = () => (
  <Navbar color="primary">
    <Container>
      <Navbar.Brand>
        <Navbar.Item>
          <Icon size="large">
            <i className="fab fa-python" />
          </Icon>
          Python Events
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Container align="right">
        <Navbar.Item
          renderAs="a"
          href="https://github.com/attakei/python-events/"
          target="_blank"
        >
          <Icon>
            <i className="fab fa-github" />
          </Icon>
        </Navbar.Item>
      </Navbar.Container>
    </Container>
  </Navbar>
);

export default Component;
