export type StockRow = {
  id: number
  category: string
  description: string
  length: number
  qty: number
  altQty: number
}

export const mockCategories: Array<{ name: string; count: number }> = [
  { name: 'All', count: 0 },
  { name: 'Accessories', count: 27 },
  { name: 'Bond', count: 852 },
  { name: 'Foam Board', count: 160 },
  { name: 'Lamination', count: 9073.99 },
  { name: 'Led Modules', count: 8100 },
  { name: 'Normal Flex', count: 261548.55 },
  { name: 'One Way Vision', count: 1599.53 },
  { name: 'Power Supply', count: 190 },
  { name: 'Primary', count: 2622.2 },
  { name: 'Standy', count: 71 },
  { name: 'Star Flex', count: 1490.81 },
  { name: 'Vinyl', count: 17696.22 },
]

export const mockRows: StockRow[] = [
  {
    id: 1,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 002 Hq Bb 3.2 New',
    length: 50,
    qty: 25833.38,
    altQty: 15,
  },
  {
    id: 2,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 010 Hq Bb 3.2 New',
    length: 70,
    qty: 24608.42,
    altQty: 9,
  },
  {
    id: 3,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 011 Hq Bb 3.2 New',
    length: 70,
    qty: 17224.41,
    altQty: 8,
  },
  {
    id: 4,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 015 Hq Bb 3.2 New',
    length: 70,
    qty: 13087.94,
    altQty: 8,
  },
  {
    id: 5,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 019 Hq Bb 3.2 New',
    length: 70,
    qty: 9644.46,
    altQty: 5,
  },
  {
    id: 6,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 020 Hq Bb 3.2 New',
    length: 70,
    qty: 8725.25,
    altQty: 6,
  },
  {
    id: 7,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 021 Hq Bb 3.2 New',
    length: 70,
    qty: 7233.34,
    altQty: 3,
  },
  {
    id: 8,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 022 Hq Bb 3.2 New',
    length: 70,
    qty: 5726.4,
    altQty: 4,
  },
  {
    id: 9,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 023 Hq Bb 3.2 New',
    length: 50,
    qty: 5166.68,
    altQty: 3,
  },
  {
    id: 10,
    category: 'Normal Flex',
    description: 'Pvc Sheeting In Roll 024 Hq Bb 3.2 New',
    length: 50,
    qty: 5166.67,
    altQty: 4,
  },
]
