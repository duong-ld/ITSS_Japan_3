import SpendingPreview from "../spending-preview/SpendingPreview";

const SpendingList = ({ spendings, onSelect }) => {
  return spendings.length !== 0 ? (
    <div>
      {spendings.map((spending) => (
        <SpendingPreview
          key={spending.id}
          spending={spending}
          onSelect={onSelect}
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
