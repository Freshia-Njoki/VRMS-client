import {useState, useEffect} from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout"
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js"
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";



export default function PaymentForm() {
    const stripePromise= loadStripe (
        "pk_test_51NVI3GJLwJLu0JfmUJR4YAk3YfKnY3WEn5z0BdO825TRzqxTzeJcMLMltJCX6tOb5hVblXJgejwaqVCb38OkC2vQ008N7pR4jT"
    )
    
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/api/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({}),
        })
        .then(async (result) => {
            var{ clientSecret } = await result.json();
            setClientSecret(clientSecret);
        })
        .catch((error) => {
            console.log("error fetching client secret:", error);
        })
        
    }, [])
    console.log(stripePromise);
    const options: StripeElementsOptions = {
        clientSecret,
    };
  return (
    <>
    {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    )}
    </>
  )
}
