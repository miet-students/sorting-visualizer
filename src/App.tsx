import React, { useCallback, useEffect } from "react";
import { BubbleSort } from "./algorithms/bubble_sort";
import { Button } from "./components/common/button/Button";
import { Header } from "./components/header/Header";
import { Visualizer } from "./components/visualizer/Visualizer";
import { useCounter, useInterval, useToggle } from "./hooks/custom_hooks";
import { AppState } from "./types";
import { generateRandomArray } from "./utils/array";

function App() {
  const [state, setState] = React.useState<AppState>({
    array: [],
    min: 10,
    max: 100,
    size: 25,
    delayMs: 0,
    sort: BubbleSort,
  });

  const setArray = useCallback(
    (array: number[]) =>
      setState((s) => {
        return { ...s, array: array };
      }),
    []
  );

  const sortHistory = state.sort(state.array);

  const [step, incStep, decStep, rstStep] = useCounter(
    0,
    0,
    sortHistory.length - 1
  );

  const resetStep = useCallback(rstStep, []);

  useEffect(() => {
    setArray(generateRandomArray(state.size, state.min, state.max));
  }, [state.min, state.max, state.size, setArray, resetStep]);

  const [playing, togglePlaying, , turnOffPlaying] = useToggle(false);

  useInterval(
    () => {
      incStep();
    },
    state.delayMs,
    playing,
    false
  );

  useEffect(() => {
    if (step === sortHistory.length - 1) {
      turnOffPlaying();
    }
  }, [step, sortHistory, playing, turnOffPlaying]);

  return (
    <>
      <Header />
      <main>
        <Button id="playbutton" onClick={togglePlaying}>
          {playing ? "stop" : "play"}
        </Button>

        <Button
          id="shuffle"
          onClick={() => {
            setArray(generateRandomArray(state.size, state.min, state.max));
            turnOffPlaying();
            resetStep();
          }}
        >
          {"shuffle"}
        </Button>

        <Button
          id="prev"
          onClick={() => {
            turnOffPlaying();
            decStep();
          }}
        >
          {"<-"}
        </Button>

        <Button
          id="next"
          onClick={() => {
            turnOffPlaying();
            incStep();
          }}
        >
          {"->"}
        </Button>

        <Visualizer max={state.max} sortHistory={sortHistory} step={step} />
      </main>
    </>
  );
}

export default App;
