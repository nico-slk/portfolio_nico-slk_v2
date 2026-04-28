import IconsList from '@/components/iconsList/IconsList';
import { useTranslation } from 'react-i18next';
import styles from "./Techs.module.scss";

const Techs = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2 >{t("techs")}</h2>
      <div className={styles.icons_list}>
        <IconsList techList={['javascript', 'react', 'node', 'express', 'redux', 'java', 'springboot']} />
      </div>
    </div>
  );
};

export default Techs;
