import React from "react";
import { BillingSummary } from "./BillingSummary";
import { DiscountCode } from "./DiscountCode";
import { OrderReview } from "./OrderReview";

export const RightBlock = () => {
  return (
    <section>
      <OrderReview />
      <DiscountCode />
      <BillingSummary />
    </section>
  );
};
