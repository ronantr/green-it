export default function Footer() {
  return (
    <footer class="footer pb-0">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <p class="subtitle is-5 has-text-weight-bold">Nous contacter</p>
            <p class="is-size-6">
              123 rue principale
              <br />
              Ville, Pays 12345
              <br />
              Téléphone : (555) 555-1234
              <br />
              Email : info@audi.com
            </p>
          </div>
          <div class="column is-one-third">
            <p class="subtitle is-5 has-text-weight-bold">Liens</p>
            <ul>
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">À propos de nous</a>
              </li>
              <li>
                <a href="#">Modèles</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Nous contacter</a>
              </li>
            </ul>
          </div>
          <div class="column is-one-third">
            <p class="subtitle is-5 has-text-weight-bold">Nous suivre</p>
            <div class="field is-grouped">
              <div class="control">
                <a
                  class="button is-small is-link is-outlined"
                  href="#"
                  style={{ border: 0 }}
                >
                  <img
                    src="/images/facebook.png"
                    alt="Facebook"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
              <div class="control">
                <a
                  class="button is-small is-link is-outlined"
                  href="#"
                  style={{ border: 0 }}
                >
                  <img
                    src="/images/twitter.png"
                    alt="Twitter"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
              <div class="control">
                <a
                  class="button is-small is-link is-outlined"
                  href="#"
                  style={{ border: 0 }}
                >
                  <img
                    src="/images/instagram.png"
                    alt="Instagram"
                    style={{ width: "40px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="columns">
          <div class="column is-half">
            <p class="is-size-7">© 2023 Audi. Tous droits réservés.</p>
          </div>
          <div class="column is-half has-text-right">
            <p class="is-size-7">
              Conditions d'utilisation | Politique de confidentialité |
              Politique en matière de cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
