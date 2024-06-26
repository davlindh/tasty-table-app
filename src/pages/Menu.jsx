import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const menuItems = [
  { id: 1, name: "Grilled Chicken Sandwich", category: "Sandwich", price: 8.99, description: "A delicious grilled chicken sandwich", image: "/images/grilled-chicken-sandwich.jpg" },
  { id: 2, name: "Classic Beef Burger", category: "Burger", price: 10.49, description: "A classic beef burger", image: "/images/classic-beef-burger.jpg" },
  { id: 3, name: "Caesar Salad", category: "Salad", price: 7.49, description: "A fresh Caesar salad", image: "/images/caesar-salad.jpg" },
];

function Menu() {
  const [cart, setCart] = useState([]);

  const [deliveryOption, setDeliveryOption] = useState("table");

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Menu</h1>
      <div className="mb-4">
        <Select onValueChange={setDeliveryOption}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Delivery Option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="table">Table Delivery</SelectItem>
            <SelectItem value="pickup">Pickup</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={item.image} alt={item.name} className="mb-2 w-full h-32 object-cover" />
              <p>{item.description}</p>
              <p>Category: {item.category}</p>
              <p>Price: ${item.price}</p>
              <Button onClick={() => addToCart(item)}>Add to Cart</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Menu;