import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import TimeLine from "./components/Timeline/Timeline.tsx";

function App() {
  return (
    <div>
      <h2>Good luck with your assignment! {"\u2728"}</h2>
      <h3>{timelineItems.length} timeline items to render</h3>

      <div style={{ padding: '5% 0 0 5%' }}>
        <p><code>SHIFT</code> + <code>SCROLL</code> to navigate the timeline</p>
      </div>

      <TimeLine items={timelineItems} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);