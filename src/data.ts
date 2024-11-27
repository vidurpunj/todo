import { Food } from "./app/shared/models/Food";
export const sample_foods: Food[] = [
    {
    id: '1',
    name: "Tomato Soup",
    tags: ['Slow Food', 'Soup'],
    fovorite: false,
    starts: 3.0,
    imageUrl: 'assets/tomato_soup.jpg',
    origins: ['india','asia'],
    cookTime: '40-50',
    price: '100'
},
{
    id: '2',
    name: "Veg Pizza",
    tags: ['Fast Food', 'Pizza', 'Lunch'],
    fovorite: true,
    starts: 4.0,
    imageUrl: 'assets/veg_pizza.jpg',
    origins: ['italy'],
    cookTime: '40-50',
    price: '200'
},
]