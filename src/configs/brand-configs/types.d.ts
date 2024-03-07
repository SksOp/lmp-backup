export interface Brand {
  name: string;
  logo: string;
  models: CarModel[];
}

export interface CarModel {
  name: string;
  logo?: string;
  variants: string[];
}
