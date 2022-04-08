import { useEffect } from "react";
import "./App.css";
import KedroViz from "@quantumblack/kedro-viz";
import { demo } from "./demo";

function App() {
  useEffect(() => {
    const layersIcon = document.querySelector(".pipeline-menu-button--layers");
    const clickEvent = new MouseEvent("click", {
      bubbles: true,
      cancelable: false,
      view: window,
    });

    layersIcon.dispatchEvent(clickEvent);
  }, []);

  return (
    <div className="App" style={{ height: `100vh` }}>
      <KedroViz
        data={demo}
        display={{
          expandAllPipelines: true,
          globalToolbar: false,
          miniMap: false,
          sidebar: false,
        }}
      />
    </div>
  );
}

export default App;
