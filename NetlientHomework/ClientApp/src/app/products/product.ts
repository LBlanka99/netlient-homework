export interface IProduct {
  id: string;
  itemNumber: string;
  itemName: string;
  netPrice: number;
  tax: number;
  [key: string]: any;
}
