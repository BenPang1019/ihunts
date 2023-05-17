import React, { useState,useEffect } from 'react'
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements,PaymentElement} from '@stripe/react-stripe-js';
import axios from 'axios'
import '../PaymentForm/PaymentForm.css'

export default function PaymentForm(props) {

  const axiosInstance = axios.create({
    baseURL:process.env.REACT_APP_API_URL,
  });
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [inputs, setInputs] = useState({
    uid:props.uid,
    username:props.username,
    eventId:props.eventId,
    eventTitle:props.eventTitle,
    eventStartTime:props.eventStartTime,
    eventEndTime:props.eventEndTime,
    date:props.date,
    location:props.location,
    image:props.image,
    active:props.active,
  });

  const [inputsTwo, setInputsTwo] = useState({
    uid:props.uidTwo,
    username:props.usernameTwo,
    eventId:props.eventId,
    eventTitle:props.eventTitle,
    eventStartTime:props.eventStartTime,
    eventEndTime:props.eventEndTime,
    date:props.date,
    location:props.location,
    image:props.image,
    active:props.active,
  });

  const [inputsThree, setInputsThree] = useState({
    firstName:props.firstName,
    lastName:props.lastName,
    phone:props.phone,
    email:props.email,
    address:props.address,
    state:props.state,
    postal:props.postal,
    ticketQuantity:props.ticketQuantity,
    date:props.date,
    amount:props.price * props.ticketQuantity / 100,
  });

console.log(inputs)
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    try {
      const res = await axiosInstance.post("/book/book", inputs);
      console.log(res)
    } catch (err) {
      console.log(err.response)
    }

    try {
      const res = await axiosInstance.post("/book/book", inputsTwo);
      console.log(res)
    } catch (err) {
      console.log(err.response)
    }

    try {
      const res = await axiosInstance.post("/book/ticketSales", inputsThree);
      console.log(res)
    } catch (err) {
      console.log(err.response)
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/thankyou",
      },
      
      
      
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  }

  return (
      <form id="payment-form" onSubmit={handleSubmit} className='paymentForm'>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={isLoading || !stripe || !elements} id="submit" class="submit-btn btn mb-0 btn-join border-0" style={{ marginTop:'3rem' }}>
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : <button className='nextButton'>Pay Now</button>}
          </span>
        </button>
      </form>
    );
}