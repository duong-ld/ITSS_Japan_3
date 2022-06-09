import { React, useState, useContext } from "react";
import SpendingList from "../components/spending-list/SpendingList";
import Search from "../components/search/Search";
import { SpendingContext } from "../contexts/SpendingContext";
import { EFilter, ESpending } from "../constants/spending.constant";
import Filter from "../components/filter/Filter";

function SpendingsView({ size }) {
  const { spendings } = useContext(SpendingContext);
  const [searchKey, setSearchKey] = useState("");
  const [filter, setFilter] = useState(EFilter.ALL);

  const handleSearch = (searchKey) => {
    setSearchKey(searchKey);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const displaySpendings = spendings
    .filter((spending) =>
      spending.title.toLowerCase().includes(searchKey.toLowerCase())
    )
    .filter((spending) => {
      if (filter === EFilter.ALL) return true;
      else if (filter === EFilter.SPEND)
        return spending.type === ESpending.SPEND;
      else return spending.type === ESpending.RECEIVE;
    })
    .sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1));

  return (
    <>
      <Search size={size} onSearch={handleSearch} />

      <div className="row">
        <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1">
          <Filter onChange={handleFilter} value={filter} />
          <SpendingList spendings={displaySpendings} />
        </div>
      </div>
    </>
  );
}

export default SpendingsView;
