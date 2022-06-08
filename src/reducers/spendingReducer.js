import { toast } from "react-toastify";
import { EDispatchAction } from "../constants/dispatch-action.constant";

export const spendingReducer = (state, action) => {
  switch (action.type) {
    case EDispatchAction.STORE_SPENDING:
      toast.success(`Spending #${action.spending.title} added successfully`, {
        toastId: "store" + action.spending.id,
      });
      return [...state, action.spending];

    case EDispatchAction.UPDATE_SPENDING:
      toast.success(`Spending #${action.spending.title} updated successfully`, {
        toastId: "update" + action.spending.id,
      });
      return state.map((t) => {
        if (t.id === action.spending.id) {
          return action.spending;
        }
        return t;
      });

    case EDispatchAction.DESTROY_SPENDING:
      toast.success("Spending deleted successfully", {
        toastId: "destroy" + action.id,
      });
      return state.filter((t) => t.id !== action.id);

    default:
      return state;
  }
};
