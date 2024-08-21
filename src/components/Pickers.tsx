import {Colors} from "../enum/Colors.ts";
import tr from "../assets/transparent.png";
import {useUnit} from "effector-react";
import {colorSelected} from "../store";

const Pickers = () => {

  const selectColor = useUnit(colorSelected);

  return (
    <div style={{
      width: 80,
      display: "flex",
      flexWrap: 'wrap'
    }}>
      <button
        onClick={() => selectColor(Colors.TRANSPARENT)}
        style={{
          background: `url(${tr}) center center repeat-x`,
          backgroundSize: "contain",
          width: 20,
          height: 20
        }}/>
      {
        Array.from(Object.keys(Colors)).map(color => {
          if (isNaN(Number(color)) || color === '0' || color === '144') {
            return null;
          }
          return <button
            key={color}
            onClick={() => selectColor(color)}
            style={{
              background: Colors[color].toLowerCase(),
              width: 20,
              height: 20
            }}/>
        })
      }
    </div>
  );
};

export default Pickers;