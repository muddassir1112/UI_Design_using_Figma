import React from "react";
import { BillingAddress } from "./BillingAddress";
import { PaymentMethod } from "./PaymentMethod";
import { ShippingMethod } from "./ShippingMethod";

export const LeftBlock = () => {
  return (
    <section className="left-block">
      <BillingAddress />
      <ShippingMethod />
      <PaymentMethod />
    </section>
  );
};
