import { useState, type Dispatch, type SetStateAction } from "react";
import IconsList from "../iconsList/IconsList";
import Modal from "../modal/Modal";
import styles from "./Card.module.scss";

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

export type TechsTypes =
  | "javascript"
  | "node"
  | "react"
  | "redux"
  | "express"
  | "java"
  | "springboot";

export interface IProjects {
  id: string;
  name: string;
  text: string;
  repo: string;
  link?: string;
  techs: TechsTypes[];
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  link?: string;
  repo: string;
}

const ModalComponent = ({ isOpen, setIsOpen, link, repo }: ModalProps) => {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <h2>{t("project_details")}</h2>
      <p>
        {t('modal_description')}
      </p>
      {link && (
        <Button btnFn={() => { }} type="button" className={webBtn}>
          <a href={link} onClick={(e) => e.preventDefault()}>
            <FaGlobe className={webBtnIcon} />
          </a>
        </Button>
      )}
      <Button btnFn={() => { }} type="secondary" className={webBtn}>
        <a href={repo} onClick={(e) => e.preventDefault()}>
          {t('repository_button')}
        </a>
      </Button>
    </Modal>
  );
};

const Card = ({ name, text, repo, link, techs, id }: IProjects) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={container} key={id}>
      <p className={card_title}>{name}</p>
      <div className={underline}></div>
      <p className={card_text}>{text}</p>

      <IconsList techList={techs} />

      <div className={buttons_container}>
        <Button btnFn={() => setIsOpen(true)} type="secondary">
          Ver más
        </Button>
        {link && (
          <Button btnFn={() => { }} type="negativeLink" className={webBtn}>
            <a href={link} onClick={(e) => e.preventDefault()}>
              <FaGlobe className={webBtnIcon} />
            </a>
          </Button>
        )}
      </div>
      <ModalComponent
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        link={link}
        repo={repo}
      />
    </div>
  );
};

export default Card;
