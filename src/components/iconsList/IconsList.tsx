import { FaJava, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSpring,
} from "react-icons/si";
import type { TechsTypes } from "../card/Card";
import styles from "./IconsList.module.scss";

const { iconStyle, container } = styles;

const IconsList = ({ techList }: { techList: TechsTypes[]; }) => {
  return (
    <div className={container}>
      {techList.map((icon) => {
        switch (icon) {
          case "javascript":
            return <SiJavascript className={iconStyle} />;
          case "node":
            return <FaNodeJs className={iconStyle} />;
          case "react":
            return <SiReact className={iconStyle} />;
          case "redux":
            return <SiRedux className={iconStyle} />;
          case "express":
            return <SiExpress className={iconStyle} />;
          case "java":
            return <FaJava className={iconStyle} />;
          case "springboot":
            return <SiSpring className={iconStyle} />;

          default:
            return <SiSpring className={iconStyle} />;
        }
      })}
    </div>
  );
};

export default IconsList;
