import { useLocation } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Receipt() {
  const location = useLocation();
  const { cart, paymentDetails } = location.state;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-3xl font-bold">Receipt</h1>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {cart.map((item) => (
              <div key={item.id}>
                <p>{item.name} - ${item.price} x {item.quantity}</p>
              </div>
            ))}
            <div>
              <h2 className="text-xl font-bold">Payment Details</h2>
              <p>Card Number: **** **** **** {paymentDetails.cardNumber.slice(-4)}</p>
              <p>Expiry Date: {paymentDetails.expiryDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default Receipt;