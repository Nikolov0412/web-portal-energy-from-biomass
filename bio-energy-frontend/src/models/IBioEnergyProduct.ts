export interface EnergyProduct {
    id: string;
    cnCode: string | null;
    bulName: string | null;
    name: string | null;
    biotech: boolean;
    description: string | null;
  }
  export interface EnergyProductDTO {
    cnCode: string| null;
    bulName: string| null;
    name: string| null;
    biotech: boolean;
    description: string| null;
  }