import NewSpending from "../views/NewSpending";
import SpendingsView from "../views/SpendingsView";


const Spendings = ({ size }) => {
  return size === "small" ? (
    <div className="p-3">
      <div className="d-flex justify-content-center">
        <div style={{ width: "100%" }}>
          <SpendingsView size={size} />
        </div>
      </div>
    </div>
  ) : (
    <div className="p-3">
      <div className="d-flex justify-content-center">
        <div style={{ width: "50%", borderRight: "1px solid" }}>
          <SpendingsView size={size} />
        </div>
        <div style={{ width: "40%" }}>
          <NewSpending />
        </div>
      </div>
    </div>
  );
};

export default Spendings;
