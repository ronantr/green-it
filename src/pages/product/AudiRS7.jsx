import "./style.css";
import { createEffect, createSignal } from "solid-js";
import CountUp from "../../components/CountUp";

export default function AudiRS7() {
  const [color, setColor] = createSignal("black");

  const changeColor = (e) => {
    let color = e.target ? e.target.value : e;
    console.log("test", color);
    setColor(color);
  };
  const options = [{ color: "red" }, { color: "green" }, { color: "pink" }];
  return (
    <div>
      <div class="hero is-fullheight has-background">
        <img
          alt="Audi"
          class="hero-background is-transparent"
          src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Q3/6513/1677913413712/front-left-side-47.jpg?imwidth=890&impolicy=resize"
        />
        <div class="hero-body">
          <div class="container is -flex is-flex-direction-column is-justify-content-space-between  has-text-centered">
            <h1 class="title is-1 has-text-white">Audi</h1>
            <h2 class="subtitle is-3 has-text-white">Q3</h2>
          </div>
        </div>

        <div
          class="container is-flex is-flex-direction-row is-align-items-end has-text-centered p-3 has-text-white"
          style={{ marginBottom: "10px" }}
        >
          <div class="statistic mx-6">
            <div class="title is-4 has-text-white">
              <CountUp countTo={190} />
            </div>
            <div class="is-size-6 has-text-white has-text-weight-bold">
              Puissance
            </div>
          </div>
          <div class="statistic mx-6">
            <div class="title is-4 has-text-white">
              <CountUp countTo={100} /> s
            </div>
            <div class="is-size-6 has-text-white has-text-weight-bold">
              0 à 100km/h
            </div>
          </div>
          <div class="statistic mx-6">
            <div class="title is-4 has-text-white">
              <CountUp countTo={220} />
            </div>
            <div class="is-size-6 has-text-white has-text-weight-bold">
              Vitesse maximale
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------------- */}
      <div class="hero is-fullheight">
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
          src="https://www.audi.fr/content/dam/nemo/fr/Gamme/Q3/Q3/refonte/1920x1080_Q3_welcom_10102022.jpg?imwidth=1440"
        />
        <div class="hero-body">
          <div class="container is -flex is-flex-direction-column is-justify-content-space-between  has-text-centered">
            <div class="col-md-6 order-md-2">
              <div class="content">
                <h2 class="title is-4 has-text-white">
                  {" "}
                  Le SUV Compact familial
                </h2>
                <p class="has-text-white">
                  Une calandre Singleframe octogonale, des ailes musclées, des
                  optiques de phares affûtées... le SUV Compact Audi s’affirme
                  avec une deuxième génération au design audacieux. A
                  l’intérieur, une véritable révolution s’opère avec une armada
                  technologique : tableau de bord digital, écran tactile,
                  commande vocale naturelle, aides à la conduite... Plus
                  dynamique que sa devancière, l’Audi Q3 devient aussi plus
                  familiale avec une plus grande habitabilité et un volume de
                  coffre plus généreux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ */}
    </div>
  );
}
