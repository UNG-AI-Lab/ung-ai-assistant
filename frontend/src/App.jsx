import { useState } from "react";
import topNoticeBanner from "./assets/top_notice_banner.png";
import leftPanelBackground from "./assets/left_panel_background.png";

function App() {
  // Controls whether the top notice banner is visible
  const [showBanner, setShowBanner] = useState(true);

  return (
    // Full-screen wrapper with white background and outer padding
    <div className="min-h-screen bg-white p-3">

      {/* 
        Main layout grid:
        - Uses three columns
        - Left column fixed at 380px
        - Middle column fills remaining space (1fr)
        - Right column fixed at 380px
        - gap-3 adds spacing between columns
        - Height accounts for outer padding (100vh - 24px)
      */}
      <div className="grid h-[calc(100vh-24px)] grid-cols-[380px_1fr_380px] gap-3">

        {/* LEFT PANEL */}
        <div
          // Border styling and rounded corners for visual framing
          className="border-4 border-[#1f3d7d] rounded-2xl overflow-hidden bg-no-repeat bg-top"
          style={{
            // Dynamically sets the background image using imported asset
            backgroundImage: `url(${leftPanelBackground})`,

            // Forces the background image to stretch to fill the entire panel
            backgroundSize: "100% 100%",
          }}
        >
        </div>

        {/* MIDDLE PANEL */}
        <div
          // Styled container intended for primary application content
          className="border-4 border-[#1f3d7d] rounded-2xl"
        >
          {showBanner && (
            <div
              // Relative wrapper so the close button can be positioned over the banner image
              className="relative p-3"
            >
              <img
                // Notice banner image (text is embedded directly in the PNG)
                src={topNoticeBanner}
                alt="Notice"
                className="w-full rounded-xl"
              />

              <button
                // Hides the entire banner when the red X is clicked
                type="button"
                onClick={() => setShowBanner(false)}
                aria-label="Dismiss notice"
                className="
                  absolute top-4 left-4
                  flex items-center justify-center
                  w-6 h-6
                  rounded-full
                  bg-white
                  text-red-600
                  text-sm font-bold
                  shadow-md
                  hover:scale-105
                  transition
                "
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (TOP + BOTTOM EQUAL) */}
        <div
          // Creates a two-row layout inside the right column
          // Each row automatically takes equal height
          className="grid grid-rows-2 gap-3"
        >
          <div
            // Top-right panel container with consistent border styling
            className="border-4 border-[#1f3d7d] rounded-2xl"
          >
          </div>

          <div
            // Bottom-right panel container with same styling for uniform design
            className="border-4 border-[#1f3d7d] rounded-2xl"
          >
          </div>
        </div>

      </div>
    </div>
  )
}

export default App