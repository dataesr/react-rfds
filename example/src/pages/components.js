import React, { useState, useEffect } from 'react';
import {
  Title, Container, Col, Row, SideMenu, SideMenuItem, SideMenuLink,
} from '@dataesr/react-dsfr';
import { Route, Switch, useLocation } from 'react-router-dom';
import elements from '../demos';

export default function Components() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState();

  useEffect(() => {
    if (pathname.startsWith('/composants/atomes')) { setOpen("atomes"); }
    if (pathname.startsWith('/composants/molecules')) { setOpen("molecules"); }
    if (pathname.startsWith('/composants/grille')) { setOpen("grille"); }
    if (pathname.startsWith('/composants/organismes')) { setOpen("organismes"); }
  }, [pathname]);

  return (
    <Row>
      <Col n="12 md-3">
        <SideMenu title="Composants">
          <SideMenuItem title="Atomes" current={open === 'atomes'}>
            {elements.sort((a, b) => a.title > b.title).map((element) => (element.section === 'atomes') && (
              <SideMenuLink
                key={element.id}
                to={`/composants/${element.section}/${element.id}`}
                current={pathname === `/composants/${element.section}/${element.id}`}
              >
                {element.title}
              </SideMenuLink>
            ))}
          </SideMenuItem>
          <SideMenuItem title="Molécules" current={open === 'molecules'}>
            {elements.sort((a, b) => a.title > b.title).map((element) => (element.section === 'molecules') && (
              <SideMenuLink
                current={pathname === `/composants/${element.section}/${element.id}`}
                key={element.id}
                to={`/composants/${element.section}/${element.id}`}
              >
                {element.title}
              </SideMenuLink>
            ))}
          </SideMenuItem>
          <SideMenuItem title="Organismes" current={open === 'organismes'}>
            {elements.sort((a, b) => a.title > b.title).map((element) => (element.section === 'organismes') && (
              <SideMenuLink
                current={pathname === `/composants/${element.section}/${element.id}`}
                key={element.id}
                to={`/composants/${element.section}/${element.id}`}
              >
                {element.title}
              </SideMenuLink>
            ))}
          </SideMenuItem>
        </SideMenu>
      </Col>
      <Col n="12 md-9">
        <Switch>
          {elements.map((element) => (
            <Route exact key={element.title} path={`/composants/${element.section}/${element.id}`}>
              <Container fluid>
                <Row>
                  <Title as="h1">{element.title}</Title>
                </Row>
                <Row>
                  {element.component}
                </Row>
              </Container>
            </Route>
          ))}
        </Switch>
      </Col>
    </Row>
  );
}
