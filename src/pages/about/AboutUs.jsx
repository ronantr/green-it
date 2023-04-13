export default function AboutUs() {

    return (
        <>
            <section class="section">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-6">
                            <img src="https://www.audi.com/content/dam/gbp2/company/history/2020/logo-design/Audi_Logo_History_1920x1080-v2.jpg?imwidth=706&imdensity=1" alt="Your image" />
                        </div>
                        <div class="column is-6 has-text-centered">
                            <h2 class="title is-2">Historique de la marque</h2>
                            <p>August Horch a fondé Audi en 1909. Suite à sa fusion avec Horch, Wanderer et DKW en 1932, Audi est devenue Auto Union AG. Volkswagen a acquis Audi en 1994, et aujourd'hui, la marque est connue pour son innovation, sa qualité et sa performance en tant que marque automobile.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container mt-4 mb-4">
                <div class="columns is-vcentered">
                    <div class="column is-6 ">
                        <h2 class="title is-2 has-text-left">Présentation de l'équipe</h2>
                        <p>Voici l'équipe clé d'Audi, composée de membres de la direction, d'ingénieurs et de designers, qui travaillent ensemble pour faire progresser l'entreprise dans la transformation numérique et l'électrification de la gamme de modèles.</p>
                    </div>
                    <div class="column is-6">
                        <img src="./src/assets/images/audiMember.avif?imwidth=500" alt="Your image" />
                    </div>
                </div>
            </div>

            <div className="landing-page">
                <section class="section has-background-black">
                    <div class="container mt-4 mb-4">
                        <div class="columns is-vcentered">
                            <div class="column is-6">
                                <img src="https://img4.autodeclics.com/photos/12/353965/hd-audi-q8-tfsi-e-quattro---les-photos-officielles-du-suv-coup%C3%A9-hybride-rechargeable.jpg?imwidth=500" alt="Your image" />
                            </div>
                            <div class="column is-6">
                                <h2 class="title is-2 has-text-left has-text-white">Engagements sociaux et environnementaux</h2>
                                <p className="has-text-white">Présenter les actions et les engagements d'Audi en matière de responsabilité sociale et environnementale, notamment en termes de développement durable et de réduction de l'empreinte carbone.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container mt-4 mb-4">
                        <div class="columns is-vcentered">
                            <div class="column is-6 ">
                                <h2 class="title is-2 has-text-left">Contact</h2>
                                <p> Fournir les informations de contact d'Audi pour que les visiteurs puissent facilement contacter la marque en cas de questions ou de commentaires.</p>
                            </div>
                            <div class="column is-6">
                                <img src="https://images.caradisiac.com/images/5/9/9/7/95997/S1-Audi-6-millions-de-quattro-produites-326514.jpg?imwidth=500" alt="Your image" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
