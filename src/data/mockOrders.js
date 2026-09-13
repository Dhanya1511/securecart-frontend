// Order data model and mock data
export const mockOrders = [
  {
    id: 'ORD1001',
    userId: 'U1001',
    date: '2026-09-10',
    amount: 2499,
    status: 'delivered',
    paymentStatus: 'completed',
    products: [
      {
        id: 'P1001',
        name: 'Premium Wireless Headphones',
        price: 2499,
        quantity: 1,
      },
    ],
    deliveryDate: '2026-09-12',
    estimatedDelivery: '2026-09-12',
  },
  {
    id: 'ORD1002',
    userId: 'U1001',
    date: '2026-09-08',
    amount: 1698,
    status: 'shipped',
    paymentStatus: 'completed',
    products: [
      {
        id: 'P1002',
        name: 'Smartphone Case (Premium Leather)',
        price: 599,
        quantity: 2,
      },
      {
        id: 'P1003',
        name: 'USB-C Fast Charging Cable',
        price: 299,
        quantity: 1,
      },
    ],
    estimatedDelivery: '2026-09-14',
  },
  {
    id: 'ORD1003',
    userId: 'U1001',
    date: '2026-09-05',
    amount: 2198,
    status: 'delivered',
    paymentStatus: 'completed',
    products: [
      {
        id: 'P1004',
        name: 'Portable Bluetooth Speaker',
        price: 1299,
        quantity: 1,
      },
      {
        id: 'P1005',
        name: 'Wireless Charging Pad',
        price: 899,
        quantity: 1,
      },
    ],
    deliveryDate: '2026-09-07',
    estimatedDelivery: '2026-09-07',
  },
  {
    id: 'ORD1004',
    userId: 'U1002',
    date: '2026-09-12',
    amount: 5397,
    status: 'processing',
    paymentStatus: 'completed',
    products: [
      {
        id: 'P1008',
        name: 'Mechanical Keyboard RGB',
        price: 3499,
        quantity: 1,
      },
      {
        id: 'P1007',
        name: 'Laptop Stand (Adjustable)',
        price: 1099,
        quantity: 1,
      },
      {
        id: 'P1001',
        name: 'Premium Wireless Headphones',
        price: 2499,
        quantity: 0,
      },
    ],
    estimatedDelivery: '2026-09-15',
  },
];
