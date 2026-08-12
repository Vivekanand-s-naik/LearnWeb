import { useState } from "react";
import TextPressure from "./components/TextPressure";
import LiquidEther from "./components/DotField";
import "./index.css";


function App() {
const colors = {
  red: "red",
  green: "green",
  blue: "blue",
  olive: "#7E7C00",
  grey: "#7E7E80",
  yellow: "yellow",
  pink: "pink",
  purple: "purple",
  lavender: "#E5E5FB",
  white: "white",
  black: "black",
};
  const [color, setColor] = useState(colors["white"]);
  return (
    <>
      <main className="">
        <div
          className={`transition-colors bg-transparent h-screen w-screen relative flex justify-center`}
        >
          <TextPressure className="bg-black absolute inset-0 h-60 w-full z-10" />
          <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <LiquidEther
              className="bg-black absolute"
              colors={[color, color, color]}
              mouseForce={20}
              cursorSize={100}
              isViscous
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
              color0={`${color}`}
              color1={`${color}`}
              color2={`${color}`}
            />
          </div>
          <div className="absolute bottom-12 w-[90%] ">
            <div className="relative overflow-hidden rounded-4xl lg:h-30 md:h-56 sm:h-64 flex items-center">
              <div className="[animation-duration:2s] animate-spin absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-conic-180 from-cyan-400 via-fuchsia-500 to-blue-700 h-screen w-screen"></div>
              <div className="relative left-1/2 -translate-x-1/2 z-10 bg-white w-[99.3%] lg:h-28 md:h-54 sm:h-60 flex items-center justify-center rounded-4xl ">
                <ul className="[&>li>button]:h-16 [&>li>button]:w-28 [&>li>button]:rounded-4xl flex flex-wrap justify-center gap-3">
                  <li>
                    <button
                      className="bg-[red]"
                      onClick={() => setColor(colors["red"])}
                    >
                      Red
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[green]"
                      onClick={() => setColor(colors["green"])}
                    >
                      Green
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[blue]"
                      onClick={() => setColor(colors["blue"])}
                    >
                      Blue
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[#7E7C00]"
                      onClick={() => setColor(colors["olive"])}
                    >
                      Olive
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[#7E7E80]"
                      onClick={() => setColor(colors["grey"])}
                    >
                      Grey
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[yellow]"
                      onClick={() => setColor(colors["yellow"])}
                    >
                      Yellow
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[pink]"
                      onClick={() => setColor(colors["pink"])}
                    >
                      Pink
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[purple]"
                      onClick={() => setColor(colors["purple"])}
                    >
                      Purple
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[#E5E5FB]"
                      onClick={() => setColor(colors["lavender"])}
                    >
                      Lavender
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[white] text-black"
                      onClick={() => setColor(colors["white"])}
                    >
                      White
                    </button>
                  </li>
                  <li>
                    <button
                      className="bg-[black] text-white"
                      onClick={() => setColor(colors["black"])}
                    >
                      Black
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}

export default App;
