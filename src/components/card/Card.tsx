import { useState, type Dispatch, type SetStateAction } from "react";
import IconsList from "../iconsList/IconsList";
import Modal from "../modal/Modal";
import styles from "./Card.module.scss";

import type { Projects } from '@/interfaces/project';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from "react-icons/fa";
import { Button } from '../button/Button';

const {
  container,
  card_title,
  underline,
  card_text,
  buttons_container,
  webBtn,
  webBtnIcon,
} = styles;

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  link?: string;
  repo: string;
}

const ModalContent = ({ isOpen, setIsOpen, link, repo }: ModalProps) => {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h2>{t("project_details")}</h2>
      <p>
        {t('modal_description')}
      </p>
      {link && (
        <Button btnFn={() => window.open(link, '_blank', 'noopener,noreferrer')} type="button" className={webBtn}>
          <FaGlobe className={webBtnIcon} />
        </Button>
      )}
      <Button btnFn={() => window.open(repo, '_blank', 'noopener,noreferrer')} type="secondary" className={webBtn}>
        {t('repository_button')}
      </Button>
    </Modal>
  );
};

const Card = ({ name, description, repo, link, techs, id }: Projects) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={container} key={id}>
      <p className={card_title}>{name}</p>
      <div className={underline}></div>
      <p className={card_text}>{description}</p>

      <IconsList techList={techs} />

      <div className={buttons_container}>
        <Button btnFn={() => setIsOpen(true)} type="secondary">
          Ver más
        </Button>
        {link && (
          <Button btnFn={() => window.open(link, '_blank', 'noopener,noreferrer')} type="negativeLink" className={webBtn}>
            <FaGlobe className={webBtnIcon} />
          </Button>
        )}
      </div>
      <ModalContent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        link={link}
        repo={repo}
      />
    </div>
  );
};

export default Card;
