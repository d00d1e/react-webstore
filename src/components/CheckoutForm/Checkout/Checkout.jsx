import React, { useState, useEffect } from "react";
import { commerce } from "../../../lib/commerce";

import { AddressForm, PaymentForm } from "../../../components";

import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";

const steps = ["Shipping Address", "Payment details"];

export default function Checkout({ cart }) {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const generateToken = async () => {
      if (cart.id) {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          console.log(token);
          setCheckoutToken(token);
        } catch (error) {}
      }
    };

    generateToken();
  }, [cart]);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm />
    );

  const Confirmation = () => <div>Confirmation</div>;

  return (
    <>
      <div className={classes.toolBar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
}
