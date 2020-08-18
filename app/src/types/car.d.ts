export interface CarItem {
  id: number;
  brand: string;
  name: string;
  color: string;
  image: string;
}

export interface Car {
  items: CarItem[] | [];
}
