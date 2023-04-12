import { createEffect, createSignal } from "solid-js";
import "./Product.css";
import "./style.css";

export default function Product() {
  const [color, setColor] = createSignal("black");

  const changeColor = (e) => {
    let color = e.target ? e.target.value : e;
    console.log("test", color);
    setColor(color);
  };
  const options = [{ color: "red" }, { color: "green" }, { color: "pink" }];

  return (
    <>
      <div class="hero is-fullheight has-background">
        <img
          alt="Audi"
          class="hero-background is-transparent"
          src="https://www.bauerparis.fr/wp-content/uploads/2020/01/RS7-Sportback-2020-4.webp"
        />
        <div class="hero-body">
          <div class="container is -flex is-flex-direction-column is-justify-content-space-between  has-text-centered">
            <h1 class="title is-1 has-text-white">Audi</h1>
            <h2 class="subtitle is-3 has-text-white">RS7</h2>
          </div>
        </div>

        <div
          class="container is-flex is-flex-direction-row is-align-items-end has-text-centered p-3 has-text-white"
          style={{ marginBottom: "10px" }}
        >
          <div class="statistic mx-6">
            <div class="title is-4 has-text-white">630 ch</div>
            <div class="title is-7 has-text-white">Puissance</div>
          </div>
          <div class="statistic mx-6">
            <div class="title is-4 has-text-white">3,4 s</div>
            <div class="title is-7 has-text-white">0 à 100km/h</div>
          </div>
          <div class="statistic mx-6">
            <div class="title is-4 has-text-white">280 km/h</div>
            <div class="title is-7 has-text-white">Vitesse maximale</div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------- */}
      <div class="container my-4">
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
      </div>
      <div class="hero is-fullheight has-background">
        <img
          alt="Audi"
          class="hero-background is-transparent"
          src="https://images.caricos.com/a/audi/2020_audi_rs6_avant/images/2560x1440/2020_audi_rs6_avant_16_2560x1440.jpg"
        />
        <div class="hero-body">
          <div class="container is -flex is-flex-direction-column is-justify-content-space-between  has-text-centered">
            <div class="col-md-6 order-md-2">
              <div class="content">
                <h2 class="title is-4 has-text-white">
                  {" "}
                  Puissance et luxe en un seul véhicule
                </h2>
                <p class="has-text-white">
                  La Audi RS7 Sportback est une voiture de luxe familiale dotée
                  d'un moteur V8 bi-turbo de 600 chevaux, capable d'accélérer de
                  0 à 100 km/h en seulement 3,6 secondes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
    </>
  );
}
