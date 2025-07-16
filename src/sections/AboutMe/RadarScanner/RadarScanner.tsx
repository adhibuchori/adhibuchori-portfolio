import "./RadarScanner.css";

import IconKotlin from "../../../assets/icons/ic_kotlin.svg?react";
import IconFlutter from "../../../assets/icons/ic_flutter.svg?react";
import IconHTML from "../../../assets/icons/ic_html.svg?react";
import IconCSS from "../../../assets/icons/ic_css.svg?react";
import IconPython from "../../../assets/icons/ic_python.svg?react";
import IconFigma from "../../../assets/icons/ic_figma.svg?react";
import IconJavaScript from "../../../assets/icons/ic_javascript.svg?react";
import IconReact from "../../../assets/icons/ic_react.svg?react";

const RadarScanner = () => {
  return (
    <div className="panel">
      <div className="scanner"></div>
      <ul className="something">
        <li>
          <IconKotlin className="icon-tech-stack" aria-label="Icon Kotlin" />
        </li>
        <li>
          <IconFlutter className="icon-tech-stack" aria-label="Icon Flutter" />
        </li>
        <li>
          <IconHTML className="icon-tech-stack" aria-label="Icon HTML" />
        </li>
        <li>
          <IconCSS className="icon-tech-stack" aria-label="Icon CSS" />
        </li>
        <li>
          <IconPython className="icon-tech-stack" aria-label="Icon Python" />
        </li>
        <li>
          <IconFigma className="icon-tech-stack" aria-label="Icon Figma" />
        </li>
        <li>
          <IconJavaScript className="icon-tech-stack" aria-label="Icon JavaScript" />
        </li>
        <li>
          <IconReact className="icon-tech-stack" aria-label="Icon React" />
        </li>
      </ul>
    </div>
  );
};

export default RadarScanner;
