import { Audi, BMW, CarModel, Honda, Jeep, Mercedes, Nisan, Renault } from "./models";

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
    name: "nisan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Nissan_logo.png",
    models: Nisan,
  },
  {
    name: "Honda",
    logo: "https://www.freeiconspng.com/thumbs/honda-logo-png/honda-logo-png-picture-20.png",
    models: Honda,
  },
  {
    name: "Volvo",
    logo: "https://www.carlogos.org/logo/Volvo-logo-2014-1920x1080.png",
    models: Honda,
  },
  {
    name: "Mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/1024px-Mercedes-Logo.svg.png",
    models: Mercedes,
  },
    {
      name: "Audi",
      logo: "https://static.wixstatic.com/media/f2bf43_fd166301e7aa405b980f5b38a7b256c9~mv2.png",
      models: Audi,
    },
    {
      name: "Renault",
      logo: "https://purepng.com/public/uploads/large/purepng.com-renault-logorenaultgroupe-renaultautomobile-manufacturerrenault-automobilesrenault-logo-17015276106938bcdq.png",
      models: Renault,
    },
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1015px-BMW.svg.png",
    models: BMW,
  },
];
