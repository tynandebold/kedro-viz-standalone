import KedroViz from "@quantumblack/kedro-viz";
// import { demoRobust } from "./demo-robust";
import { spaceflights } from "./spaceflights";

function Component() {
  return (
    <div style={{ height: `100vh`, width: `100%` }}>
      <KedroViz
        data={spaceflights}
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
