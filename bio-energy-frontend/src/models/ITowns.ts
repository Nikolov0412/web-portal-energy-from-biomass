export interface Town {
    id: string;
    name: string | null;
    municipality: string | null;
    latitude: number;
    longtitude: number;
    ekatte: number;
  }
  export interface TownDTO {
    name: string| null;
    municipality: string| null;
    latitude: number;
    longtitude: number;
    ekatte: number;
  }