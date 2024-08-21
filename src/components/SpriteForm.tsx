import {useState} from "react";
import {useUnit} from "effector-react/compat";
import {$sprite, spriteSideSetted} from "../store";

const SpriteForm = () => {
  const [side, setSide] = useState(32);

  const setSideHandler = useUnit(spriteSideSetted);

  const sprite = useUnit($sprite);

  const copy = () => {
    const str = '{\n' + sprite.reduce((acc, arr) => acc + arr + '},\n{', '{').slice(0, -1) + '}'

    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
      if (result.state === "granted" || result.state === "prompt") {
        navigator.clipboard.writeText(str).then(
          () => {
            alert('Successfully copied!')
          },
          () => {
            console.log(str);
            alert('Something went wrong, yo can copy from dev console');
          },
        );
      }
    });
  }

  return (
    <div>
      <input type="number" min={0} name={'side'} onChange={(e) => setSide(e.value)} value={side}/>
      <button onClick={() => setSideHandler(side)}>Установить сторону/Очистить спрайт</button>
      <button onClick={copy}>Скопировать</button>
    </div>
  );
};

export default SpriteForm;