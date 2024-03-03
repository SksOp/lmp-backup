import { CarModel, Honda, Jeep } from "./models";


export interface Brand {
    name: string;
    logo: string;
    models: CarModel[];
}

export const brands: Brand[] = [
    {
        name: "Jeep",
        logo: "https://pngimg.com/d/jeep_PNG95.png",
        models: Jeep,
    },
    {
        name: "nishan",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png",
        models: Honda,
    },
    {
        name: "Honda",
        logo: "https://www.freeiconspng.com/thumbs/honda-logo-png/honda-logo-png-picture-20.png",
        models: Honda,
    },
    {
        name: "Volvo",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png",
        models: Honda,
    },
    {
        name: "Mercedes",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png",
        models: Honda,
    },
    {
        name: "Audi",
        logo: "https://www.freeiconspng.com/thumbs/honda-logo-png/honda-logo-png-picture-20.png",
        models: Honda,
    },
    {
        name: "Renault",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvQ6qwHZp6LLnG_rdycWD5gHrPB-0T-FpVsCRYbFrSA&s",
        models: Honda,
    },
    {
        name: "BMW",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png",
        models: Honda,
    },
    

];