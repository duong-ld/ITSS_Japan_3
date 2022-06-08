import { React, useState, useContext } from "react";
import SpendingList from "../components/spending-list/SpendingList";
import Search from "../components/search/Search";
import { SpendingContext } from "../contexts/SpendingContext";

function SpendingsView({ size }) {
  const { spendings } = useContext(SpendingContext);
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = (searchKey) => {
    setSearchKey(searchKey);
  };

  return (
    <>
      <Search
        size={size}
        onSearch={handleSearch}
      />

      <div className="row">
        <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1">
          <br />
          <br />
          <hr />
          <SpendingList
            spendings={spendings
              .filter((spending) =>
                spending.title.toLowerCase().includes(searchKey.toLowerCase())
              )
              .sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1))}
          />
        </div>
      </div>
    </>
  );
}

export default SpendingsView;
