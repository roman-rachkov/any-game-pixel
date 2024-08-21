import {createEvent, createStore, sample} from "effector";
import {Colors} from "../enum/Colors.ts";

export const spriteSideSetted = createEvent<number>();
export const colorSelected = createEvent<Colors>();
export const colorSettedAtPosition = createEvent<{ x: number, y: number }>()


export const $currentColor = createStore<Colors>(Colors.NONE);

export const $sprite = createStore<Colors[][]>([[]]);

export const $side = createStore<number>(32);

sample({
  clock: spriteSideSetted,
  fn: (side: number) => {
    return Array.from({length: side},
      () => Array.from({length: side},
        () => Colors.NONE) as Colors[]
    ) as Colors[][];
  },
  target: $sprite
});

sample({
  clock: colorSelected,
  target: $currentColor
})

sample({
  clock: spriteSideSetted,
  target: $side
})

sample({
  clock: colorSettedAtPosition,
  source: [$sprite, $currentColor],
  fn: ([sprite, color], position) => {
    return sprite.toSpliced(position.y, 1, sprite[position.y].toSpliced(position.x, 1, parseInt(color, 10)));
  },
  target: $sprite
})