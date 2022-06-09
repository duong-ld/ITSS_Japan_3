import SpendingItem from "../spending-item/SpendingItem";

const SpendingList = ({ spendings }) => {
  return spendings.length !== 0 ? (
    <div>
      {spendings.map((spending) => (
        <SpendingItem
          key={spending.id}
          spending={spending}
        />
      ))}
    </div>
  ) : (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="alert alert-info mt-3 w-50"
      role="alert"
    >
      No spendings to show
    </div>
  );
};

export default SpendingList;
