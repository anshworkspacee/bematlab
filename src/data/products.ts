import type { Product } from "../types";

const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
export const products: Product[] = [
 {id:1,name:"Fresh Bananas",category:"Fruits",price:48,oldPrice:55,unit:"1 dozen",rating:4.8,badge:"Bestseller",image:photo("photo-1571771894821-ce9b6c11b08e"),description:"Naturally sweet, hand-picked bananas for everyday snacking."},
 {id:2,name:"Red Apples",category:"Fruits",price:149,oldPrice:179,unit:"4 pcs",rating:4.7,badge:"15% off",image:photo("photo-1560806887-1e4cd0b6cbd6"),description:"Crisp apples with a refreshing sweet-tart bite."},
 {id:3,name:"Fresh Strawberries",category:"Fruits",price:129,unit:"250 g",rating:4.6,image:photo("photo-1464965911861-746a04b4bca6"),description:"Juicy berries, perfect for breakfast bowls and desserts."},
 {id:4,name:"Farm Carrots",category:"Vegetables",price:39,unit:"500 g",rating:4.5,image:photo("photo-1445282768818-728615cc910a"),description:"Crunchy, vibrant carrots sourced for everyday cooking."},
 {id:5,name:"Green Broccoli",category:"Vegetables",price:69,oldPrice:79,unit:"1 pc",rating:4.4,badge:"Fresh pick",image:photo("photo-1459411621453-7b03977f4bfc"),description:"Fresh green florets for quick, nourishing meals."},
 {id:6,name:"Farm Tomatoes",category:"Vegetables",price:32,unit:"500 g",rating:4.6,image:photo("photo-1546094096-0df4bcaaa337"),description:"Ripe red tomatoes for salads, curries and sauces."},
 {id:7,name:"Farm Fresh Milk",category:"Dairy & Eggs",price:32,unit:"500 ml",rating:4.8,badge:"Daily essential",image:photo("photo-1563636619-e9143da7973b"),description:"Creamy everyday milk for tea, coffee and breakfast."},
 {id:8,name:"Brown Eggs",category:"Dairy & Eggs",price:89,unit:"6 pcs",rating:4.7,image:photo("photo-1506976785307-8732e854ad03"),description:"A breakfast staple, packed carefully for your kitchen."},
 {id:9,name:"Greek Yogurt",category:"Dairy & Eggs",price:85,unit:"400 g",rating:4.5,image:photo("photo-1488477181946-6428a0291777"),description:"Smooth, creamy yogurt for bowls, dips and snacks."},
 {id:10,name:"Sourdough Bread",category:"Bakery",price:99,unit:"1 loaf",rating:4.6,badge:"Baked today",image:photo("photo-1585478259715-876acc5be8eb"),description:"A rustic loaf with a golden crust and soft centre."},
 {id:11,name:"Butter Croissants",category:"Bakery",price:120,unit:"2 pcs",rating:4.4,image:photo("photo-1555507036-ab1f4038808a"),description:"Flaky, buttery pastries for a slow morning."},
 {id:12,name:"Salted Chips",category:"Snacks",price:30,unit:"1 pack",rating:4.3,image:photo("photo-1566478989037-eec170784d0b"),description:"Light, crunchy chips for your movie-night cravings."},
 {id:13,name:"Roasted Almonds",category:"Snacks",price:199,oldPrice:229,unit:"200 g",rating:4.8,badge:"Popular",image:photo("photo-1508061253366-f7da158b6d46"),description:"Roasted almonds for a satisfying everyday snack."},
 {id:14,name:"Orange Juice",category:"Beverages",price:99,unit:"1 L",rating:4.5,image:photo("photo-1600271886742-f049cd451bba"),description:"Bright citrus flavour for breakfast and beyond."},
 {id:15,name:"Sparkling Water",category:"Beverages",price:55,unit:"750 ml",rating:4.2,image:photo("photo-1606168094336-48f205276929"),description:"A crisp, bubbly refreshment served chilled."},
 {id:16,name:"Avocados",category:"Fruits",price:89,unit:"2 pcs",rating:4.6,image:photo("photo-1523049673857-eb18f1d7b578"),description:"Creamy avocados for toast, salads and bowls."},
 {id:17,name:"Baby Spinach",category:"Vegetables",price:45,unit:"200 g",rating:4.4,image:photo("photo-1576045057995-568f588f82fb"),description:"Tender leafy greens, washed and ready to use."},
 {id:18,name:"Cheddar Cheese",category:"Dairy & Eggs",price:135,unit:"200 g",rating:4.7,image:photo("photo-1486297678162-eb2a19b0a32d"),description:"A rich, savoury cheese for sandwiches and snacks."},
 {id:19,name:"Chocolate Cookies",category:"Snacks",price:79,unit:"1 pack",rating:4.5,image:photo("photo-1499636136210-6f4ee915583e"),description:"A sweet, chocolatey treat to share or keep."},
 {id:20,name:"Cold Brew Coffee",category:"Beverages",price:129,unit:"250 ml",rating:4.6,badge:"New",image:photo("photo-1517701604599-bb29b565090c"),description:"Smooth coffee, ready to pour over ice."}
];
export const categories = [
 {name:"Fruits", emoji:"🍎", count:"Fresh & juicy", color:"#fff0e6"},
 {name:"Vegetables", emoji:"🥦", count:"Straight from farms", color:"#e8f4d9"},
 {name:"Dairy & Eggs", emoji:"🥛", count:"Everyday essentials", color:"#e7f1ff"},
 {name:"Bakery", emoji:"🥐", count:"Warm & comforting", color:"#fff0cc"},
 {name:"Snacks", emoji:"🍪", count:"Little happy breaks", color:"#f7e7f1"},
 {name:"Beverages", emoji:"🧃", count:"Sip something good", color:"#e1f5f1"}
];
