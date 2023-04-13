import SectionLayout from "../../components/SectionLayout";
import Header from "./Header";
import "./home.css";
import { latestCars } from "../../database/data";
function Home() {
  return (
    <>
      <Header />

      <div className="landing-page">
        <section className="section">
          <div className="container">
            {latestCars.map((car, index) => {
              return (
                <SectionLayout
                  image={car.image}
                  title={car.title}
                  description={car.description}
                  button="Learn More"
                  positionImage={index % 2 === 0 ? "left" : "right"}
                />
              );
            })}
          </div>
        </section>

        <section className="section has-background-light">
          <div className="container">
            <h2 className="title is-2">Experience the Audi Difference</h2>
            <p>
              With a wide range of models to choose from, Audi offers something
              for everyone. Whether you're looking for a luxurious sedan, a
              versatile SUV, or a high-performance sports car, Audi has a
              vehicle that will meet your needs and exceed your expectations.
            </p>
            <button className="button is-primary is-inverted is-outlined">
              View Our Inventory
            </button>
          </div>
        </section>

            
        <section class="audi-section">
          <div class="audi-content">
            <h2 className="title is-2 has-text-centered">La responsabilité sociale au coeur du design Audi</h2>
            <p>Le futur nous anime, la durabilité aussi. Chez Audi, nous envisageons le design comme un outil nécessaire pour relever les grands défis mondiaux.</p>
          </div>
          <div class="audi-image">
            <img src="https://www.audi.fr/dam/nemo/fr/Teasers-Homepage/2023/framed-1-1/885x885_Responsabilite_Sociale_31032023.png?imwidth=662" alt="Audi" />
          </div>
        </section>

        <section className="section is-dark">
          <div className="container">
            <h2 className="title is-2 has-text-centered">
              Find Your Perfect Audi
            </h2>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/a/a3/my-2020/1920x1080-cta-model-carousel/1920x1080_desktop_01.jpg"
                        alt="Audi A3"
                      />
                    </figure>
                  </div>


                  <div className="card-content">
                    <div className="content">
                      <h3 className="title is-3">Audi A3</h3>
                      <p>
                        The Audi A3 is a compact luxury sedan that offers
                        responsive handling, stylish design, and advanced
                        technology features.
                      </p>
                      <button className="button is-primary is-inverted is-outlined">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/q/q5/my-2021/1920x1080-cta-model-carousel/1920x1080_desktop_01.jpg"
                        alt="Audi Q5"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3 className="title is-3">Audi Q5</h3>
                      <p>
                        The Audi Q5 is a versatile SUV that offers spaciousness,
                        performance, and advanced technology features.
                      </p>
                      <button className="button is-primary is-inverted is-outlined">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/r/r8/my-2021/1920x1080-cta-model-carousel/1920x1080_desktop_01.jpg"
                        alt="Audi R8"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h3 className="title is-3">Audi R8</h3>
                      <p>
                        The Audi R8 is a high-performance sports car that offers
                        exhilarating power, stunning design, and advanced
                        technology features.
                      </p>
                      <button className="button is-primary is-inverted is-outlined">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
