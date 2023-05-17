import React, { useState,useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from '../PaymentForm/PaymentForm';
const stripePromise = loadStripe("pk_test_51LciwKHQ4D7OwLcoFPakzRfmrLIhAQ8oMHuJsHmJ8B6vummD9EY5ZHwXHL4khxfb1UZA0XJn3ZAIQXaR6Pq5hhi900nciNLqpf")

function StripeCard(props) {
    
    const test= props.price * props.ticketQuantity
    const [clientSecret, setClientSecret] = useState("");
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("/payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount:test }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'night',
        labels: 'floating'
    };
    const options = {
        clientSecret,
        appearance,
    };
      
    return (
        <div>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
                <PaymentForm 
                    firstName={props.firstName} 
                    lastName={props.lastName} 
                    phone={props.phone} 
                    email={props.email} 
                    address={props.address} 
                    state={props.state} 
                    postal={props.postal} 
                    ticketQuantity={props.ticketQuantity} 
                    date={props.date} 
                    uid={props.uid}
                    uidTwo={props.uidTwo}
                    price={props.price} 
                    quantity={props.quantity} 
                    username={props.username}
                    usernameTwo={props.usernameTwo}
                    eventId={props.eventId}
                    eventTitle={props.eventTitle}
                    eventStartTime={props.eventStartTime}
                    eventEndTime={props.eventEndTime} 
                    active={props.active} 
                    image={props.image}
                    location={props.location}   
                    />
            </Elements>
        )}
        </div>
      )
}

export default StripeCard