import {useUnit} from "effector-react";
import {$sprite, colorSettedAtPosition} from "../store";
import {Colors} from "../enum/Colors.ts";
import tr from "../assets/transparent.png"

const Editor = () => {
  const sprite = useUnit($sprite);
  const setColorAtPosition = useUnit(colorSettedAtPosition)

  const buttons = sprite.map((row, y) => {
    return <div key={y} style={{display: "flex"}}>
      {row.map((cell, x) => {
        // console.log(cell);
        if (cell === Colors.TRANSPARENT || cell === Colors.NONE) {
          return <button
            key={x}
            onClick={() => setColorAtPosition({x, y})}
            style={{
              width: 20,
              height: 20,
              background: `url(${tr}) center center / cover no-repeat`
            }}
          />
        }
        return <button
          key={x}
          onClick={() => setColorAtPosition({x, y})}
          style={{
            width: 20,
            height: 20,
            background: Colors[cell].toLowerCase()
          }}
        />
      })}
    </div>
  })

  return (
    <div style={{marginTop: 30}}>
      {buttons}
    </div>
  );
};

export default Editor;