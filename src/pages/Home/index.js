import React from 'react';

import Icon from '../../components/Icons';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Icon icon="globe" size="100" color="#e84848" />
      <Icon icon="chemistry" size="100" color="#0000ff91" />
      <Icon icon="lamp" size="100" color="#7cd4cdb8" />
    </Container>
  );
}
