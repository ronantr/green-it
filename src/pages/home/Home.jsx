import Header from "./Header";
import "./home.css";
function Home() {
    return (
      <>
      <Header />

      <div className="landing-page">
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/rs/audi-rs7-sportback-4-performance-quattro-kraftstoffverbrauch-ksv-roadtrip.jpg" alt="Audi RS7" />
            </div>
            <div className="column">
              <h3 className="title is-3">Audi RS7</h3>
              <p>The ultimate luxury sports car, the RS7 combines breathtaking performance with sleek and elegant design.</p>
              <button className="button is-primary is-inverted is-outlined">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
  <div className="container">
    <div className="columns">
      <div className="column">
        <h3 className="title is-3">Audi Q7</h3>
        <p>The Audi Q7 is the perfect luxury SUV, combining spaciousness, versatility, and advanced safety features.</p>
        <button className="button is-primary is-inverted is-outlined">Learn More</button>
      </div>
      <div className="column">
        <img src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/q/q7/my-2020/1920x1080-cta-model-carousel/1920x1080_desktop_03.jpg" alt="Audi Q7" />
      </div>
    </div>
    <div className="columns">
  <div className="column">
    <img src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/concept-cars/aicon/1920x1080_desktop_01.jpg" alt="Audi Aicon" />
  </div>
  <div className="column">
    <h3 className="title is-3">Audi Aicon</h3>
    <p>The Audi Aicon is a fully electric concept car that demonstrates the brand's commitment to sustainable mobility.</p>
    <button className="button is-primary is-inverted is-outlined">Learn More</button>
  </div>
</div>

<div className="columns">
  <div className="column">
    <h3 className="title is-3">Audi RS 7</h3>
    <p>The Audi RS 7 is a high-performance luxury car that offers exhilarating driving dynamics and advanced technology features.</p>
    <button className="button is-primary is-inverted is-outlined">Learn More</button>
  </div>
  <div className="column">
    <img src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/rs/rs7-sportback/my-2020/1920x1080-cta-model-carousel/1920x1080_desktop_02.jpg" alt="Audi RS 7" />
  </div>
</div>
</div>
</section> 
<section className="section has-background-light">
  <div className="container">
    <h2 className="title is-2">Experience the Audi Difference</h2>
    <p>With a wide range of models to choose from, Audi offers something for everyone. Whether you're looking for a luxurious sedan, a versatile SUV, or a high-performance sports car, Audi has a vehicle that will meet your needs and exceed your expectations.</p>
    <button className="button is-primary is-inverted is-outlined">View Our Inventory</button>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="columns">
      <div className="column">
        <h3 className="title is-3">Audi E-Tron</h3>
        <p>The Audi E-Tron is a fully electric SUV that offers impressive range, performance, and technology features.</p>
        <button className="button is-primary is-inverted is-outlined">Learn More</button>
      </div>
      <div className="column">
        <img src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/e-tron/e-tron-sportback/my-2021/192"/>
     </div>
    </div>
  </div>
</section>
<section className="section is-dark">
  <div className="container">
    <h2 className="title is-2 has-text-centered">Find Your Perfect Audi</h2>
    <div className="columns is-multiline">
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/a/a3/my-2020/1920x1080-cta-model-carousel/1920x1080_desktop_01.jpg" alt="Audi A3" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h3 className="title is-3">Audi A3</h3>
              <p>The Audi A3 is a compact luxury sedan that offers responsive handling, stylish design, and advanced technology features.</p>
              <button className="button is-primary is-inverted is-outlined">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/q/q5/my-2021/1920x1080-cta-model-carousel/1920x1080_desktop_01.jpg" alt="Audi Q5" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h3 className="title is-3">Audi Q5</h3>
              <p>The Audi Q5 is a versatile SUV that offers spaciousness, performance, and advanced technology features.</p>
              <button className="button is-primary is-inverted is-outlined">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/production-models/r/r8/my-2021/1920x1080-cta-model-carousel/1920x1080_desktop_01.jpg" alt="Audi R8" />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h3 className="title is-3">Audi R8</h3>
              <p>The Audi R8 is a high-performance sports car that offers exhilarating power, stunning design, and advanced technology features.</p>
              <button className="button is-primary is-inverted is-outlined">Learn More</button>
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

