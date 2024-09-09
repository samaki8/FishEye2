export default class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPhotographerHeader() {
        const profilePageHeader = document.querySelector(".main_about");

        document.addEventListener('DOMContentLoaded', () => {
            const formName = document.querySelector(".modal_form_name");
            if (formName) {
                if (this.photographer && this.photographer.name) {
                    formName.textContent = this.photographer.name;
                } else {
                    console.error("L'objet photographer est undefined ou n'a pas de propriété 'name'");
                    formName.textContent = "Nom du photographe inconnu";
                }
            }
        });

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            if (this.photographer && this.photographer.name && this.photographer.city && this.photographer.country && this.photographer.price) {
                metaDescription.content = `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
            } else {
                console.error("Certaines propriétés de l'objet photographer sont manquantes");
                metaDescription.content = "Découvrez ce photographe professionnel offrant ses services.";
            }
        }

        if (profilePageHeader) {
            const about = `
                <div class="photographer_profile__infos">
                    <h2 class="photographer_name">${this.photographer?.name ?? "Nom du photographe inconnu"}</h2>
                    <h3 class="photographer_location">${this.photographer?.city ?? "Ville inconnue"}, ${this.photographer?.country ?? "Pays inconnu"}</h3>
                    <p class="photographer_tagline">${this.photographer?.tagline ?? "Aucune description disponible"}</p>    
                </div>
                <button class="btn btn_cta" type="button" aria-label="Open contact form">Contactez-moi</button>
                <img class="photographer_thumbnail" src="./assets/photographers/${this.photographer?.portrait ?? "default.jpg"}" alt="${this.photographer?.name ?? "Photographe"}">
            `;
            profilePageHeader.innerHTML = about;
            return about;
        }
    }
}


/*export default class PhotographerHeader {
    constructor(photographer) {
        this.photographer = photographer;
    };

    createPhotographerHeader() {
        const profilePageHeader = document.querySelector(".main_about");
     /*const formName = document.querySelector(".modal_form_name");
 /*formName.textContent = this.photographer?.name ?? "Nom du photographe inconnu";*/
/*
if (photographer && photographer.name) {
    formName.textContent = this.photographer.name
} else {
    console.error("L'objet photographer est undefined ou n'a pas de propriété 'name'");
}  
*/
/*
       document.addEventListener('DOMContentLoaded', () => {
        const formName = document.querySelector(".modal_form_name");
        if (formName) {
            formName.textContent = this.photographer.name;
        }
        
        
        });
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = `Découvrez ${this.photographer.name}, photographe professionnel basé à ${this.photographer.city}, ${this.photographer.country} offrant ses services à partir de ${this.photographer.price} € / jour.`;
        };
        const about = `
            <div class="photographer_profile__infos">
                <h2 class="photographer_name">${this.photographer.name}</h2>
                <h3 class="photographer_location">${this.photographer.city}, ${this.photographer.country}</h3>
                <p class="photographer_tagline">${this.photographer.tagline}</p>    
            </div>
            <button class="btn btn_cta" type="button" aria-label="Open contact form">Contactez-moi</button>
            <img class="photographer_thumbnail" src="./assets/photographers/${this.photographer.portrait}" alt="${this.photographer.name}">
        `;
        profilePageHeader.innerHTML = about;
        return about;
    };
}
*/