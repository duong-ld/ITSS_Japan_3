import { EFilter } from "../../constants/spending.constant";
import "./Filter.css";

function Filter({ value, onChange }) {
  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };

  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, EFilter.ALL)}
        className={value === EFilter.ALL ? "is-active" : ""}
      >
        All
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, EFilter.SPEND)}
        className={value === EFilter.SPEND ? "is-active" : ""}
      >
        Spend
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, EFilter.RECEIVE)}
        className={value === EFilter.RECEIVE ? "is-active" : ""}
      >
        Receive
      </a>
    </div>
  );
}

export default Filter;
