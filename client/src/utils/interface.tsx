export interface iBmi {
  sex?: string;
  id?: string;
  height?: number;
  weight?: number;
  bmi?: number;
  bmiStatus?: string;
}

export interface iWeather {
  id?: string;
  location?: string;
  temperature?: string;
  pressure?: string;
  wind?: string;
  humidity?: string;
}

export interface iBooks {
  id?: string;
  author?: string;
  publicationYear?: string;
  genre?: string;
}

export interface iCars {
  id?: string;
  color?: string;
  price?: string;
}
