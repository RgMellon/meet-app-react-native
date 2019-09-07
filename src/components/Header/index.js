import React from 'react';

import logo from '~/assets/logo.png';

import { Container, ImageLogo } from './styles';

export default function Header() {
  return (
    <Container>
      <ImageLogo source={logo} />
    </Container>
  );
}
