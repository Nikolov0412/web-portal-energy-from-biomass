import { EnergyProduct } from "./IBioEnergyProduct";
import { Biomass } from "./IBiomass";
import { PowerMeasure, HeatMeasure } from "./IMeasure";
import { NKID } from "./INKID";
import { Town } from "./ITowns";

export interface Firm {
    id: string;
    eik: number;
    name: string | null;
    description: string | null;
    address: string | null;
    town: Town;
    email: string | null;
    startYear: string;
    endYear: string | null;
    status: string | null;
  }
  
export interface FirmDTO{
    eik: number;
    name: string | null;
    description: string | null;
    address: string | null;
    town: Town;
    email: string | null;
    startYear: string;
    endYear: string | null;
    status: string | null;
}

  export interface FirmData {
    id: string;
    firm: Firm;
    firmName: string | null;
    product: EnergyProduct;
    nkid: NKID;
    source: Biomass;
    power: number;
    measure: PowerMeasure;
    quantity: number;
    quantityMeasurement: HeatMeasure;
    heatQuantity: number|null;
    certification: string | null;
  }
  
  export interface FirmDataDTO {
    firm: Firm;
    firmName: string | null;
    product: EnergyProduct;
    nkid: NKID;
    source: Biomass;
    power: number;
    measure: PowerMeasure;
    quantity: number;
    quantityMeasurement: HeatMeasure;
    heatQuantity: number|null;
    certification: string | null;
  }