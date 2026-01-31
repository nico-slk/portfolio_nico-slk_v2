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
            return <SiJavascript className={iconStyle} key={icon} />;
          case "node":
            return <FaNodeJs className={iconStyle} key={icon} />;
          case "react":
            return <SiReact className={iconStyle} key={icon} />;
          case "redux":
            return <SiRedux className={iconStyle} key={icon} />;
          case "express":
            return <SiExpress className={iconStyle} key={icon} />;
          case "java":
            return <FaJava className={iconStyle} key={icon} />;
          case "springboot":
            return <SiSpring className={iconStyle} key={icon} />;

          default:
            return <SiSpring className={iconStyle} key={icon} />;
        }
      })}
    </div>
  );
};

export default IconsList;
