import leftPanelBackground from "./assets/left_panel_background.png";

function App() {
  return (
    <div className="min-h-screen bg-white p-3">
      <div className="grid h-[calc(100vh-24px)] grid-cols-[380px_1fr_380px] gap-3">

        {/* LEFT PANEL */}
        <div
          className="border-4 border-[#1f3d7d] rounded-2xl overflow-hidden bg-no-repeat bg-top"
          style={{
            backgroundImage: `url(${leftPanelBackground})`,
            backgroundSize: "100% 100%",
          }}
        >
        </div>

        {/* MIDDLE PANEL */}
        <div className="border-4 border-[#1f3d7d] rounded-2xl">
        </div>

        {/* RIGHT COLUMN (TOP + BOTTOM EQUAL) */}
        <div className="grid grid-rows-2 gap-3">
          <div className="border-4 border-[#1f3d7d] rounded-2xl">
          </div>

          <div className="border-4 border-[#1f3d7d] rounded-2xl">
          </div>
        </div>

      </div>
    </div>
  )
}

export default App