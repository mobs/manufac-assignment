import { useState } from "react";
import "./App.css";
import FlavanoidsTable from "./components/FlavanoidsTable";
import GammaTable from "./components/GammaTable";
import {
  getMeanOfFlavanoidsClassWise,
  getMeanOfGammaClassWise,
  getMedianOfFlavanoidsClassWise,
  getMedianOfGammaClassWise,
  getModeOfFlavanoidsClassWise,
  getModeOfGammaClassWise,
} from "./utils/commonUtils";

function App() {
  const [selectedTab, setSelectedTab] = useState("Flavanoids");
  const meanFlavanoids = getMeanOfFlavanoidsClassWise();
  const medianFlavanoids = getMedianOfFlavanoidsClassWise();
  const modeFlavanoids = getModeOfFlavanoidsClassWise();

  const meanGamma = getMeanOfGammaClassWise();
  const medianGamma = getMedianOfGammaClassWise();
  const modeGamma = getModeOfGammaClassWise();

  const flavanoidsData = [
    {
      name: "Flavanoids Mean",
      class1: meanFlavanoids[1],
      class2: meanFlavanoids[2],
      class3: meanFlavanoids[3],
    },
    {
      name: "Flavanoids Median",
      class1: medianFlavanoids[1],
      class2: medianFlavanoids[2],
      class3: medianFlavanoids[3],
    },
    {
      name: "Flavanoids Mode",
      class1: modeFlavanoids[1],
      class2: modeFlavanoids[2],
      class3: modeFlavanoids[3],
    },
  ];
  const gammaData = [
    {
      name: "Gamma Mean",
      class1: meanGamma[1],
      class2: meanGamma[2],
      class3: meanGamma[3],
    },
    {
      name: "Gamma Median",
      class1: medianGamma[1],
      class2: medianGamma[2],
      class3: medianGamma[3],
    },
    {
      name: "Gamma Mode",
      class1: modeGamma[1],
      class2: modeGamma[2],
      class3: modeGamma[3],
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <button
          style={{
            padding: "10px",
            backgroundColor: selectedTab === 'Flavanoids' ? 'green' : 'white',
            color: selectedTab === 'Flavanoids' ? 'white' : 'black'
          }}
          onClick={() => setSelectedTab("Flavanoids")}
        >
          Flavanoids
        </button>
        <button style={{
            padding: "10px",
            backgroundColor: selectedTab === 'Gamma' ? 'green' : 'white',
            color: selectedTab === 'Gamma' ? 'white' : 'black'
          }} onClick={() => setSelectedTab("Gamma")}>Gamma</button>
      </div>

      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {selectedTab === "Flavanoids" ? (
          <FlavanoidsTable flavanoidsData={flavanoidsData} />
        ) : (
          <GammaTable gammaData={gammaData} />
        )}
      </div>
    </div>
  );
}

export default App;
