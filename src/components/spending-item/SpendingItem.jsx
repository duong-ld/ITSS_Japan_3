import { useContext, useState } from "react";
import { Collapse } from "react-collapse";
import { EDispatchAction } from "../../constants/dispatch-action.constant";
import { EFormAction } from "../../constants/form-action.constant";
import { ESpending } from "../../constants/spending.constant";
import { SpendingContext } from "../../contexts/SpendingContext";
import Form from "../form/Form";
import FunctionButton from "./FunctionButton";

import "./spending-item.css";

const SpendingItem = ({ spending }) => {
  const { dispatch } = useContext(SpendingContext);
  // "open" varible for detail form
  const [open, setOpen] = useState(false);

  const toggleDetail = () => setOpen(!open);

  const handleUpdate = (spending) => {
    setOpen(false);
    dispatch({ type: EDispatchAction.UPDATE_SPENDING, spending });
  };

  const handleDestroy = (id) => {
    setOpen(false);
    dispatch({ type: EDispatchAction.DESTROY_SPENDING, id });
  };

  const getSpendingStyle = (spending) => {
    let spendingStyle = "spending-item";

    if (spending.type === ESpending.SPEND) {
      spendingStyle += " spend";
    } else if (spending.type === ESpending.RECEIVE) {
      spendingStyle += " receive";
    }

    return spendingStyle;
  };

  return (
    <>
      <div className={getSpendingStyle(spending)} key={spending.id}>
        <h4>
          <b>
            {spending.type === ESpending.SPEND ? "- " : "+ "}
            {spending.amount}
          </b>
          <i className="title-preview p-1">{spending.title}</i>
        </h4>
        <FunctionButton
          spending={spending}
          onDestroy={handleDestroy}
          toggleDetail={toggleDetail}
        />
      </div>

      <Collapse isOpened={open}>
        <div className="container p-3 border">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <Form
                spending={spending}
                action={handleUpdate}
                actionName={EFormAction.UPDATE}
              />
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
};

export default SpendingItem;
