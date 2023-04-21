import { useDispatch } from "react-redux";
import { useRef } from "react";
import {
  cupsToWaterCupsAndMl,
  gramToWaterCupsAndMl,
  updateCupVolume,
} from "../reducers/mainReducerSlice";

export default function In() {
  // VARS
  let dispatch = useDispatch();

  // REFS
  let inputGr = useRef();
  let inputCups = useRef();
  let inputCupVolume = useRef();

  // HANDLERS
  const inputGramHandler = () => {
    if (inputCups.current.value > 0) inputCups.current.value = 0;
    dispatch(gramToWaterCupsAndMl(inputGr.current.value));
  };
  const inputCupsHandler = () => {
    if (inputGr.current.value > 0) inputGr.current.value = 0;
    dispatch(cupsToWaterCupsAndMl(inputCups.current.value));
  };
  const inputCupVolumeHandler = () => {
    dispatch(updateCupVolume(inputCupVolume.current.value));
    inputGr.current.value > 0 ? inputGramHandler() : inputCupsHandler();
  };

  return (
    <div className="input">
      {/*VOLUME OF ONE CUP*/}
      <label>
        <input
          ref={inputCupVolume}
          type="number"
          className="cupVolume"
          placeholder="например, 250 мл"
          onInput={inputCupVolumeHandler}
        />{" "}
        <span>мл. стакан</span>
      </label>

      {/*INPUT IN GRAMS*/}
      <label>
        <input
          ref={inputGr}
          type="number"
          className="gramOfRice"
          placeholder="например, 100 грамм"
          onInput={inputGramHandler}
        />
        <span>гр. риса</span>
      </label>

      {/*INPUT IN CUPS*/}
      <label>
        <input
          ref={inputCups}
          type="number"
          className="cupsOfRice"
          placeholder="например, 1 стакан"
          onInput={inputCupsHandler}
        />
        <span>ст. риса</span>
      </label>
    </div>
  );
}
