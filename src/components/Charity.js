import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ScriptTag from "react-script-tag";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function Charity() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="charity">      
      <form>
        <ScriptTag
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_H8BDaBaF4flc3s"
          async
        ></ScriptTag>
      </form>
    </div>
  );
}
