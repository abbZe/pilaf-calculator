import { useSelector } from "react-redux";
import {
  selectCups,
  selectCupVolume,
  selectGrams,
} from "../reducers/mainReducerSlice";

export default function Out() {
  let cupsOfWater = useSelector(selectCups);
  let mlsOfWater = useSelector(selectGrams);
  let cupVolume = useSelector(selectCupVolume);
  return (
    <>
      <div className="out">
        <p>Вам нужно {mlsOfWater} мл воды</p>
        <p>Вам нужно {cupsOfWater} стаканов* воды</p>
        <p>*стакан объемом {cupVolume} мл</p>
      </div>
    </>
  );
}
