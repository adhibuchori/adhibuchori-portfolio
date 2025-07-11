import "./RadarScanner.css";

import IconKotlin from "../../../assets/icons/ic_kotlin.svg";
import IconFlutter from "../../../assets/icons/ic_flutter.svg";
import IconHTML from "../../../assets/icons/ic_html.svg";
import IconCSS from "../../../assets/icons/ic_css.svg";
import IconPython from "../../../assets/icons/ic_python.svg";
import IconFigma from "../../../assets/icons/ic_figma.svg";
import IconJavaScript from "../../../assets/icons/ic_javascript.svg";
import IconReact from "../../../assets/icons/ic_react.svg";

const RadarScanner = () => {
  return (
    <div className="panel">
      <div className="scanner"></div>
      <ul className="something">
        <li>
          <img src={IconKotlin} alt="Icon Kotlin" />
        </li>
        <li>
          <img src={IconFlutter} alt="Icon Flutter" />
        </li>
        <li>
          <img src={IconHTML} alt="Icon HTML" />
        </li>
        <li>
          <img src={IconCSS} alt="Icon CSS" />
        </li>
        <li>
          <img src={IconPython} alt="Icon Python" />
        </li>
        <li>
          <img src={IconFigma} alt="Icon Figma" />
        </li>
        <li>
          <img src={IconJavaScript} alt="Icon JavaScript" />
        </li>
        <li>
          <img src={IconReact} alt="Icon React" />
        </li>
      </ul>
    </div>
  );
};

export default RadarScanner;
