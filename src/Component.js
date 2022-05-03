import { useEffect } from "react";
import KedroViz from "@quantumblack/kedro-viz";
import { demo } from "./demo";

function Component() {
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
    <div style={{ height: `90vh`, width: `100%` }}>
      <KedroViz
        data={demo}
        display={{
          expandAllPipelines: true,
          globalToolbar: false,
          miniMap: false,
          sidebar: false,
        }}
        theme="dark"
      />
    </div>
  );
}

export default Component;
