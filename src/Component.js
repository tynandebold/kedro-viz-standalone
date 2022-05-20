import KedroViz from "@quantumblack/kedro-viz";
import { demo } from "./demo";

function Component() {
  return (
    <div style={{ height: `90vh`, width: `100%` }}>
      <KedroViz
        data={demo}
        display={{
          expandAllPipelines: false,
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
