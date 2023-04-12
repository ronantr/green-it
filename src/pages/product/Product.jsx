import { A } from "@solidjs/router";


export default function Product() {
    return (
        <div>
            <div class="hero is-fullheight has-background">
                <img alt="Audi" class="hero-background is-transparent" src="https://www.audi.fr/content/dam/nemo/fr/Gamme/e-tron-GT/RS-e-tron-GT/refonte/header/1920x1920_RSetronGT_header_20092022.jpg?imwidth=1440"/>
                <div class="hero-body">
                    <div class="container is -flex is-flex-direction-column is-justify-content-space-between  has-text-centered">
                        <h1 class="title is-1 has-text-white">Audi</h1>
                        <h2 class="subtitle is-3 has-text-white">RS e-tron GT</h2>
                    </div>
                </div>
                

                <div class="container is-flex is-flex-direction-row is-align-items-end has-text-centered p-3 has-text-white" style={{ marginBottom: '10px' }}>
                    <div class="statistic mx-6">
                        <div class="title is-4 has-text-white">495 km</div>
                        <div class="title is-7 has-text-white">Autonomie (WLTP)</div>
                    </div>
                    <div class="statistic mx-6">
                        <div class="title is-4 has-text-white">598 ch</div>
                        <div class="title is-7 has-text-white">Puissance</div>
                    </div>
                    <div class="statistic mx-6">
                        <div class="title is-4 has-text-white">3,3 s</div>
                        <div class="title is-7 has-text-white">0 à 100km/h</div>
                    </div>
                    <div class="statistic mx-6">
                        <div class="title is-4 has-text-white">245 km/h</div>
                        <div class="title is-7 has-text-white">Vitesse maximale</div>
                    </div>
                </div>

            </div>
            <style jsx>{`
        @media (max-width: 768px) {
            .container {
                flex-wrap: wrap;
                justify-content: center;
            }
            .statistic {
                margin-bottom: 10px;
            }
        }
    `}</style>

            <div class="hero is-fullheight has-background">
                <img alt="Audi" class="hero-background is-transparent" src="https://images.caricos.com/a/audi/2020_audi_rs6_avant/images/2560x1440/2020_audi_rs6_avant_16_2560x1440.jpg"/>
                <div class="hero-body">
                    <div class="container is -flex is-flex-direction-column is-justify-content-space-between  has-text-centered">
                    </div>
                </div>
                {/* create content with a div on the right and the text on the right */}
                
            </div>
        </div>
        
    );

}
