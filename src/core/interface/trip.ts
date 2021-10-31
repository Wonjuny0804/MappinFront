export interface Itrip {
    title: string;
    startDate : string;
    endDate : string;
    memo : string;
    paths : Array<Ipath>;
}

export interface Ipath {
  id: number;
  places: Array<Iplace>;
}

export interface Iplace {
  lat: number;
  lng: number;
  name: string;
}