/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Cases } from './Cases';
import type { Coordinates } from './Coordinates';
export type Place = {
    id: string;
    type: string;
    code: string;
    name: string;
    country_code: string;
    country_name: string;
    state_code: (string | null);
    coordinates: Coordinates;
    index_strings: Array<string>;
    weight: number;
    cases: Cases;
    country_cases: Cases;
    main_airport_name: string;
};

