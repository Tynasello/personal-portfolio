import React from "react";
import { Project } from "../components/Utils/Project";

import WTProject1 from "../assets/images/Projects/WTProject1.png";
import WTProject2 from "../assets/images/Projects/WTProject2.png";

import WTDMG from "../assets/video/WT.dmg";
import WTEXE from "../assets/video/WT.exe";

import { ProjectP } from "../components/Utils/ProjectP";
import { ProjectSubtitle } from "../components/Utils/ProjectSubtitle";
import { HighlightSpan } from "../components/Utils/HighlightSpan";
import { PLink } from "../components/Utils/PLink";
import styled from "styled-components";

interface WTProjectProps {}

export const WTProject: React.FC<WTProjectProps> = () => (
  <Project headerImg={WTProject1} title="Word Translation GUI">
    <ProjectP>
      A Graphical User Interface displaying the translation of user inputs in
      selected languages.
      <br />
      <br />
      The code for this project was written in{" "}
      <HighlightSpan>Python</HighlightSpan> leveraging the{" "}
      <HighlightSpan>PyQt5</HighlightSpan> and{" "}
      <HighlightSpan>googletrans</HighlightSpan> libraries. The PyQt library is
      a python binding for a C++ toolkit named Qt which includes various
      libraries and development tools for the purpose of creating GUIs. The
      googletrans library assisted in word translations.
      <br />
      <br />
      The GUI prompts a user to input a sentence. Once completed, a list of 11
      languages is given. The user's entry is then translated into the chosen
      language and displayed. The user can then select a different translation
      or quit the GUI. The tutorials on{" "}
      <HighlightSpan>
        <PLink href="https://realpython.com/python-pyqt-gui-calculator/">
          realpython.com{" "}
        </PLink>
      </HighlightSpan>
      and{" "}
      <HighlightSpan>
        <PLink href="https://www.pythonguis.com/pyqt-tutorial/">
          learnpyqt.com{" "}
        </PLink>
      </HighlightSpan>
      assisted me in the effective use of PyQt and in the creation of .dmg and
      .exe files for users. A link to my code for this project can be found{" "}
      <HighlightSpan>
        <PLink href="https://github.com/Tynasello/word-translator">here</PLink>
      </HighlightSpan>
      .
    </ProjectP>

    <PImg src={WTProject2} alt="WTProject2"></PImg>

    <ProjectSubtitle>Final Product</ProjectSubtitle>
    <ProjectP>
      I encourage you to download my GUI and try it yourself. Downloads are
      available for Mac and Windows users.
      <br />
      <br />
      <HighlightSpan>
        <PLink href={WTDMG}> Mac </PLink>
      </HighlightSpan>
      <br />
      <br />
      <HighlightSpan>
        <PLink href={WTEXE}> Windows </PLink>
      </HighlightSpan>
    </ProjectP>
  </Project>
);
const PImg = styled.img`
  width: 100%;
  border-radius: 10px;
  padding: 2rem 0;
`;
