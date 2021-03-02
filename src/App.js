import React, { useState } from "react";
import WelcomePage from "./components/pages/welcome";
import PrinterSelectPage from "./components/pages/printerSelect";
import ProgressContainer from "./components/progressContainer";
import "./styles/index.scss";
import PrintArea from "./components/pages/printArea";
import SecurityPage from "./components/pages/security";
import FinishPage from "./components/pages/finish";

let setupData = {};

export default () => {
  const [current, setCurrent] = useState(0);
  const [finishError, setFinishError] = useState(false);
  let page;

  switch (current) {
    case 0:
      page = <WelcomePage cb={nextStep} />;
      break;
    case 1:
      page = <PrinterSelectPage cb={nextStep} />;
      break;
    case 2:
      page = <PrintArea cb={nextStep} />;
      break;
    case 3:
      page = <SecurityPage cb={nextStep} />;
      break;
    case 4:
      page = (
        <FinishPage
          data={setupData}
          reportError={() => {
            setFinishError(true);
          }}
        />
      );
      break;
  }

  return (
    <>
      <ProgressContainer current={current} finishError={finishError} />
      {page}
    </>
  );
  function nextStep(data) {
    setCurrent(current == 4 ? 4 : current + 1);
    if (data && !data["dispatchConfig"]) {
      setupData = { ...setupData, ...data };
    }
  }
};
