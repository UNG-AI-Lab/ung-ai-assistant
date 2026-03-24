import { useEffect, useRef, useState } from "react";
import topNoticeBanner from "./assets/top_notice_banner.png";
import nigelBehindSearchbar from "./assets/nigel_behind_searchbar.png";
import leftPanelBackground from "./assets/left_panel_background.png";

function App() {
  // Controls whether the top notice banner is visible
  const [showBanner, setShowBanner] = useState(true);

  // Stores the current value of the chat input
  const [inputValue, setInputValue] = useState("");

  // Stores the chat messages shown in the middle panel (UI-only for now)
  const [messages, setMessages] = useState([]);

  // Controls the temporary "thinking" state (typing indicator + disabled send)
  const [isThinking, setIsThinking] = useState(false);

  // Used to auto-scroll to the latest message
  const messagesEndRef = useRef(null);

  // Used to auto-resize the textarea as the user types
  const textareaRef = useRef(null);

  // Scrolls to the bottom whenever a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  // Auto-resizes the textarea height to fit content (up to a max height)
  const resizeTextarea = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";

    // Max height before textarea starts scrolling internally
    const nextHeight = Math.min(el.scrollHeight, 140);
    el.style.height = `${nextHeight}px`;
  };

  // Handles sending a message from the input box
  // NOTE: This currently simulates the AI response.
  // BACKEND HOOK: Replace the setTimeout() with a real API call to your FastAPI endpoint.
  const handleSend = () => {
    const trimmed = inputValue.trim();

    // Prevent empty sends and prevent double-sends while "thinking"
    if (!trimmed || isThinking) return;

    // Adds the user message immediately
    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);

    // Enables typing indicator and disables the send button
    setIsThinking(true);

    // Clears the input after sending
    setInputValue("");

    // Resets textarea height after clearing
    requestAnimationFrame(() => {
      if (textareaRef.current) textareaRef.current.style.height = "auto";
    });

    // BACKEND HOOK:
    // Replace this simulated delay with:
    // 1) fetch/axios POST to backend (e.g., /api/chat)
    // 2) await JSON response
    // 3) setMessages(... add AI response ...)
    // 4) setIsThinking(false)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Placeholder response: backend not connected yet." },
      ]);
      setIsThinking(false);
    }, 1200);
  };

  // Enter sends, Shift+Enter adds a new line (chatbox behavior)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
        />

        {/* MIDDLE PANEL */}
        <div className="border-4 border-[#1f3d7d] rounded-2xl flex flex-col min-h-0 overflow-hidden">
          {showBanner && (
            <div className="relative p-3">
              <img
                src={topNoticeBanner}
                alt="Notice"
                className="w-full rounded-xl"
              />

              <button
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

          {/* Message area fills the middle panel and scrolls as messages grow */}
          <div className="flex-1 min-h-0 px-4 py-2 pb-10 overflow-y-auto overflow-x-hidden">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[80%]
                    rounded-2xl
                    px-4 py-3
                    text-sm
                    font-semibold
                    break-words
                    whitespace-pre-wrap
                    ${
                      msg.role === "user"
                        ? "bg-[#1e3c7d] text-white"
                        : "bg-[#ffd22a] text-[#1e3c7d]"
                    }
                  `}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator shown while waiting on the AI response */}
            {isThinking && (
              <div className="mb-2 flex justify-start">
                <div
                  className="
                    max-w-[80%]
                    rounded-2xl
                    px-4 py-3
                    text-sm
                    font-semibold
                    bg-[#ffd22a]
                    text-[#1e3c7d]
                  "
                >
                  <span className="inline-flex items-center gap-1">
                    <span className="animate-bounce [animation-delay:0ms]">
                      •
                    </span>
                    <span className="animate-bounce [animation-delay:150ms]">
                      •
                    </span>
                    <span className="animate-bounce [animation-delay:300ms]">
                      •
                    </span>
                  </span>
                </div>
              </div>
            )}

            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* SEARCH BAR SECTION */}
          <div className="relative p-4">
            <img
              src={nigelBehindSearchbar}
              alt="Nigel"
              className="
                absolute
                -bottom-1
                right-28
                w-28
                z-0
                pointer-events-none
                select-none
              "
              style={{
                clipPath: "inset(0 0 32% 0)",
              }}
            />

            <div className="relative z-10 flex items-end gap-3">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  resizeTextarea();
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter your major, minor, and previous classes..."
                className="
                  flex-1
                  rounded-2xl
                  px-5 py-3
                  text-white
                  placeholder-white/70
                  focus:outline-none
                  resize-none
                  overflow-y-auto
                "
                style={{ backgroundColor: "#1e3c7d" }}
                rows={1}
              />

              <button
                type="button"
                onClick={handleSend}
                disabled={isThinking}
                className="
                  rounded-full
                  px-6 py-3
                  font-semibold
                  text-[#1e3c7d]
                  hover:brightness-95
                  transition
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
                style={{ backgroundColor: "#ffd22a" }}
              >
                {isThinking ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full border-2 border-[#1e3c7d] border-t-transparent animate-spin"></span>
                    Sending
                  </span>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (TOP + BOTTOM EQUAL) */}
        <div className="grid grid-rows-2 gap-3">
          <div className="border-4 border-[#1f3d7d] rounded-2xl" />
          <div className="border-4 border-[#1f3d7d] rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default App;