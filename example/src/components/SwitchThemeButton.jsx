import { useRef, useState } from "react";
import {
  Button,
  Modal,
  ModalClose,
  ModalContent,
  ModalTitle,
  Radio,
  RadioGroup,
  useTheme,
} from "@dataesr/react-dsfr";

export default function SwitchThemeButton() {
  const { theme, switchTheme } = useTheme();
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const themeButtonRef = useRef();
  return (
    <>
      <Button
        ref={themeButtonRef}
        styleAsLink
        icon="ri-sun-line"
        iconPosition="left"
        onClick={() => setIsThemeModalOpen(!isThemeModalOpen)}
      >
        Changer le thème
      </Button>
      <Modal
        size="sm"
        isOpen={isThemeModalOpen}
        hide={() => {
          setIsThemeModalOpen(false);
        }}
      >
        <ModalClose
          hide={() => {
            setIsThemeModalOpen(false);
          }}
          title="Fermer la fenêtre modale"
        >
          fermer
        </ModalClose>
        <ModalTitle>
          Paramètres d&apos;affichage
        </ModalTitle>
        <ModalContent>
          <RadioGroup
            className="fr-switch-theme"
            legend="Choisissez un thème pour personnaliser l’apparence du site."
          >
            <Radio
              label="Thème clair"
              value="light"
              isExtended
              onChange={(e) => theme !== e.target.value && switchTheme(e.target.value)}
            />
            <Radio
              label="Thème sombre"
              value="dark"
              isExtended
              onChange={(e) => theme !== e.target.value && switchTheme(e.target.value)}
            />
          </RadioGroup>
        </ModalContent>
      </Modal>
    </>
  );
}
