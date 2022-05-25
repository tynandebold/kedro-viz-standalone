import KedroViz from "@quantumblack/kedro-viz";
import { demoRobust } from "./demo-robust";

function Component() {
  return (
    <div style={{ height: `90vh`, width: `100%` }}>
      <KedroViz
        data={demoRobust}
        display={{
          expandAllPipelines: false,
          globalToolbar: false,
          miniMap: false,
          sidebar: true,
        }}
        theme="dark"
      />
    </div>
  );
}

export default Component;
