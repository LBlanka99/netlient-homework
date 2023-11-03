export interface IProduct {
  id: string;
  itemNumber: number;
  itemName: string;
  netPrice: number;
  tax: number;
  [key: string]: any;
}
