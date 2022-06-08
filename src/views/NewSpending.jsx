import React, { useContext } from "react";
import { EDispatchAction } from "../constants/dispatch-action.constant";
import { EFormAction } from "../constants/form-action.constant";
import { SpendingContext } from "../contexts/SpendingContext";
import Form from "../components/form/Form";

function NewSpending() {
  const { dispatch } = useContext(SpendingContext);

  const handleStore = (spending) => {
    dispatch({ type: EDispatchAction.STORE_SPENDING, spending });
  };

  return (
    <div className="container border pb-3 ml-3 pt-3">
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <br />
          <h2 style={{ fontWeight: "bold" }}>New Spending</h2>
          <br />
          <Form action={handleStore} actionName={EFormAction.STORE} />
        </div>
      </div>
    </div>
  );
}

export default NewSpending;
