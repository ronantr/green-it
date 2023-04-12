import { createEffect, createSignal } from "solid-js";
import "./Product.css";
export default function Product() {
  const [color, setColor] = createSignal("black");

  const changeColor = (e) => {
    let color = e.target ? e.target.value : e;
    console.log("test", color);
    setColor(color);
  };
  const options = [{ color: "red" }, { color: "green" }, { color: "pink" }];

  return (
    <div class="feature-wrap">
      <h2 class="car-color-picker">
        CHOOSE A COLOR:
        <br />
        <input
          type="color"
          value={color}
          id="color-picker"
          class="button is-rounded m-2"
          onChange={changeColor}
        />
        {options.map((option) => (
          <span
            class="button is-rounded m-2"
            style={{ "background-color": option.color }}
            onClick={() => changeColor(option.color)}
          ></span>
        ))}
      </h2>
      <div
        class="car-wrap"
        id="car-wrap"
        style={{ "background-color": color() }}
      >
        <img
          // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/13764/color-change-car-base.png"
          src="/src/assets/images/color-change-car-base.png"
          alt=""
        />
      </div>
    </div>
  );
}
