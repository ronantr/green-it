export default function Header() {
  return (
    <div class="hero mb-6">
      <picture id="Audi">
        <source media="(max-width: 700px)"
          srcset="/images/audi-e-tron-gt-mobile.jpg" />
        <img alt="Audi" src="/images/audi-e-tron-gt.jpg" />
      </picture>
      <div
        class="container is-flex is-flex-direction-column is-justify-content-space-between has-text-centered
            is-flex-grow-1 is-align-items-flex-end is-justify-content-flex-start"
      >
        <div>
          <h1
            class="title is-4 is-size-5-desktop is-size-6-mobile  has-text-white"
            style={{ "margin-top": "-80px" }}
          >
            Design élégant, performances et une technologie de pointe, voici
            Audi.
          </h1>
        </div>
      </div>
    </div>
  );
}
