export type TooltipContent = {
  country?: string;
  year?: string;
  co2?: string;
  population: string;
};

export type DataRow = {
  iso_code: string;
  year: string;
  country?: string;
  co2?: string;
  population?: string;
};
