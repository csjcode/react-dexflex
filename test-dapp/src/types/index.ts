//types/index.ts

export interface Gotchi {
	collateral: string;
	id: string;
	name: string;
	withSetsNumericTraits: Array<Number>;
 }
 
 export interface QueryResponse {
	aavegotchis: Array<Gotchi>
 }