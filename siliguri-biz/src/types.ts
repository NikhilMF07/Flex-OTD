export interface StockItem {
  id: string;
  category: string;
  itemDescription: string;
  length: number;
  qty: number; // main quantity
  altQty: number; // alternate quantity shown at right of qty
}
