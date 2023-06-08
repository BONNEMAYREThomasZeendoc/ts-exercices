// Typer les objets suivants
interface Address {
    city: string;
    country: string;
}

interface Item {
    id: number;
    quantity: number;
}

interface Order {
    item: Item[];
    shippingAddress: Address;
    paymentAddress: Address;
}

interface User {
    firstName: string;
    lastName: string;
    accountChecked: boolean;
    address: Address;
    orders: Order[];
}


const user : User = {
    firstName: "Beverly",
    lastName: "Davis",
    accountChecked: false,
    address: {
        city: 'Paris',
        country: 'France',
    },
    orders: [
        {
            item: [
                {id: 67231, quantity: 1}, 
                {id: 62913, quantity: 3},
            ],
            shippingAddress: {
                city: 'Toulon',
                country: 'France',
            },
            paymentAddress: {
                city: 'Tokyo',
                country: 'Japan',
            }
        },
        {
            item: [
                {id: 41984, quantity: 2}, 
                {id: 63426, quantity: 1},
                {id: 32654, quantity: 10},
            ],
            shippingAddress: {
                city: 'Nice',
                country: 'France',
            },
            paymentAddress: {
                city: 'Las Vegas',
                country: 'US',
            }
        },
    ]
}

export default function ex1() {}


