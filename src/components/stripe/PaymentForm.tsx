import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
    const stripePromise = loadStripe(
        "pk_test_51NVI3GJLwJLu0JfmUJR4YAk3YfKnY3WEn5z0BdO825TRzqxTzeJcMLMltJCX6tOb5hVblXJgejwaqVCb38OkC2vQ008N7pR4jT"
    );
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/create-payment-intent", {
            method: "POST",
            body: JSON.stringify({}),
        })
            .then(async (result) => {
                var { clientSecret } = await result.json();
                setClientSecret(clientSecret);
            })
            .catch((error) => {
                console.error("Error fetching client secret:", error);
            });
    }, []);

    console.log(stripePromise);
    return (
        <>
        <h1>heey</h1>

            {clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    );
}

export default Payment;