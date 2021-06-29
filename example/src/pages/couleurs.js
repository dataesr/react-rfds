import React from 'react';
import {
  Title, Container, Col, Row, SideMenu, SideMenuLink,
} from '@dataesr/react-dsfr';
import { Route, Switch, useLocation } from 'react-router-dom';

export default function Couleurs() {
  const { pathname } = useLocation();
  return (
    <Row>
      <Col n="12 md-3">
        <SideMenu title="Couleurs">
          <SideMenuLink
            current={pathname.startsWith('/couleurs/palette')}
            title="Palette"
            to="palette"
          >
            Colors descriptions
          </SideMenuLink>
          <SideMenuLink
            current={pathname.startsWith('/couleurs/combinaisons')}
            to="combinaisons"
          >
            Combinaisons de couleurs
          </SideMenuLink>
        </SideMenu>
      </Col>
      <Col n="12 md-9">
        <Switch>
          <Route exact path="/couleurs/palette">
            <Container fluid>
              <Row>
                <Title as="h1">PALETTE</Title>
              </Row>
              <Row>
                PALETTE
              </Row>
            </Container>
          </Route>
          <Route exact path="/couleurs/combinaisons">
            <Container fluid>
              <Row>
                <Title as="h1">COMBINAISONS</Title>
              </Row>
              <Row>
                COMBINAISONS
              </Row>
            </Container>
          </Route>
        </Switch>
      </Col>
    </Row>
  );
}
