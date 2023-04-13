import "./style.css";
import { createEffect, createSignal } from "solid-js";
import CountUp from "../../components/CountUp";
import ReservationModal from "../../components/ReservationModal";
export default function AudiRS7() {
  const [color, setColor] = createSignal("black");
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const handleOpenModal = () => {
    console.log("test");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const changeColor = (e) => {
    let color = e.target ? e.target.value : e;
    console.log("test", color);
    setColor(color);
  };
  const options = [
    { color: "#000000" },
    { color: "#052860" },
    { color: "#6a7174" },
    { color: "#9a000a" },
    { color: "#b84815" },
  ];
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
              src="/images/color-change-car-base.png"
              // src={carColorImage}
              alt=""
            />
          </div>
        </div>
        <div class="is-flex  is-justify-content-center">
          <button
            class="button is-rounded m-2 is-primary "
            style={{
              "max-width": "200px",
            }}
            onClick={handleOpenModal}
          >
            Réserver maintenant
          </button>
          {console.log(isModalOpen())}
          {isModalOpen() && <ReservationModal handleClose={handleCloseModal} />}
        </div>
      </div>
      <div class="hero is-fullheight has-background">
        <div class="container mt-4 mb-4">
          <div class="columns is-vcentered">
            <div class="column is-4 ">
              <h2 class="title is-2 has-text-left has-text-white">
                Des couleurs uniques
              </h2>
              <p className="has-text-white">
                Avec Audi exclusive, choisissez parmi plus de 50 finitions de
                peinture personnalisées et exclusives, pour un résultat unique
                et précieux.
              </p>
            </div>
            <div class="column is-8">
              <img src="/images/image.png" alt="Your image" />
            </div>
          </div>
        </div>
      </div>
      <div class="hero is-fullheight has-background">
        <div class="container mt-4 mb-4">
          <div class="columns is-vcentered">
            <div class="column is-8">
              <video autoplay loop muted>
                <source src="/videos/Volant_audi_q3.mp4" type="video/mp4" />
                <img src="fallback.avif" alt="Fallback image" />
              </video>
            </div>
            <div class="column is-4 ">
              <h2 class="title is-2 has-text-left has-text-white">
                Un écrin digital et connecté
              </h2>
              <p className="has-text-white">
                Le SUV Compact Audi intègre un écran MM en lieu et place du
                tableau de bord habituel, commandable depuis le volant
                multifonctions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section
        class="section is-fullheight has-background-black pt-6 pb-6 "
        style={{ "padding-left": 0, "padding-right": 0 }}
      >
        <div>
          <img
            src="/images/Q3_phare.avif"
            alt="Your image"
            style={{
              "max-height": "600px",
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <div class="container has-text-centered mt-4">
          <div class="columns is-vcentered">
            <div class="column has-text-centered">
              <h2 class="title is-2 has-text-white ">
                Un éclairage intelligent
              </h2>
              <p class="has-text-white">
                Les phares de la nouvelle Audi Q3 sont disponibles en trois
                versions différentes et reposent tous sur la technologie LED. Au
                sommet de la gamme, les projecteurs Audi Matrix LED (en option)
                éclairent la route de façon intelligente et règlent le faisceau
                lumineux en fonction des conditions de conduite, sans pour
                autant éblouir les autres conducteurs. Dans des conditions de
                conduite difficiles, comme par exemple sur une route de montagne
                non éclairée, le faisceau lumineux est dirigé à l’intérieur de
                la courbe pour mieux évaluer les virages et maintenir votre
                trajectoire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ */}
    </div>
  );
}
