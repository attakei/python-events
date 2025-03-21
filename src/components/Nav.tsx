import type { FC } from 'react';
import { Container, Icon, Navbar } from 'react-bulma-components';
import { useTranslation } from 'react-i18next';

export const Component: FC = () => {
  const { i18n } = useTranslation();
  console.log(i18n.languages);
  return (
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
          <Navbar.Item hoverable>
            <Navbar.Link>{i18n.language}</Navbar.Link>
            <Navbar.Dropdown>
              {i18n.languages.map((lang) => (
                <Navbar.Item
                  renderAs="button"
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang)}
                >
                  {lang}
                </Navbar.Item>
              ))}
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
      </Container>
    </Navbar>
  );
};

export default Component;
