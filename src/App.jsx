import { useState } from "react";
import { Power, Sun, Moon } from "lucide-react";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = () => {
    setIsOn((previous) => !previous);
  };

  return (
    <main className={`app ${isOn ? "light-on" : "light-off"}`}>
      <section className="hero" id="home">
        <h1 className="bulb-heading">ON / OFF LIGHTNING BULB</h1>

        <div className={`bulb-stage ${isOn ? "glowing" : ""}`}>
          <div className="ambient-glow" />
          <div className="light-rays" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="bulb" role="img" aria-label={isOn ? "Bulb switched on" : "Bulb switched off"}>
            <div className="glass">
              <div className="glass-highlight" />
              <div className="filament">
                <span />
                <span />
              </div>
              <div className="bulb-reflection" />
            </div>
            <div className="neck" />
            <div className="metal-base">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="base-tip" />
          </div>

          <div className="bulb-shadow" />
        </div>

        <div className="control-panel">
          <div className="control-copy">
            <div className="control-subtitle">
              {isOn ? "Your light is shining bright" : "Your bulb is resting"}
            </div>
          </div>

          <button
            type="button"
            className={`toggle ${isOn ? "active" : ""}`}
            onClick={toggleBulb}
            role="switch"
            aria-checked={isOn}
            aria-label="Toggle bulb on or off"
          >
            <span className="toggle-knob">
              {isOn ? <Sun size={20} /> : <Moon size={19} />}
            </span>
          </button>

          <div className={`power-label ${isOn ? "on" : ""}`}>
            {isOn ? "ON" : "OFF"}
          </div>
        </div>

        <p className="hint">
          <Power size={14} />
          CLICK THE SWITCH TO {isOn ? "TURN OFF" : "TURN ON"}
        </p>
      </section>

    </main>
  );
}
