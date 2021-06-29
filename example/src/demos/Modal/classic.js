import { useState } from 'react';
import {
  Col, Button, Modal, ModalTitle, ModalContent, ModalFooter,
} from '@dataesr/react-dsfr';

const code = `
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Col>
      <Button title="open modal" onClick={() => setIsOpenModal(true)}>open modal</Button>
      <Modal isOpen={isOpenModal} hide={() => setIsOpenModal(false)}>
        <ModalTitle icon="ri-arrow-right-fill">I am a title</ModalTitle>
        <ModalContent>blah blah</ModalContent>
        <ModalFooter>
          <Button title="Une action">blah</Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
`;

const Component = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Col>
      <Button title="open modal" onClick={() => setIsOpenModal(true)}>open modal</Button>
      <Modal isOpen={isOpenModal} hide={() => setIsOpenModal(false)}>
        <ModalTitle icon="ri-arrow-right-fill">I am a title</ModalTitle>
        <ModalContent>blah blah</ModalContent>
        <ModalFooter>
          <Button title="Une action">blah</Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
};

const description = `La fenêtre modale`;

const titre = null;

export default {
  titre, code, Component, description,
};
