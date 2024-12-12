import { useState } from "react";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

// Backend logic values
const types = ["buy", "rent"];

// Frontend display labels
const typeLabels = {
  buy: "Hotels",
  rent: "Resorts",
};

const SearchBar = () => {
  const [query, setquery] = useState({
    type: types[0],
    city: "",
    minPrice: "",
    maxPrice: "",
  });

  const switchType = (val) => {
    setquery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setquery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {typeLabels[type]} {/* Use the label mapping */}
          </button>
        ))}
      </div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="city"
          placeholder="City"
          value={query.city}
        />
        <img className="location" src="./loc.png" alt="" />
        <input
          type="number"
          min={0}
          max={10000000}
          placeholder="₹ Min Price"
          name="minPrice"
          value={query.minPrice}
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="₹ Max Price"
          value={query.maxPrice}
          onChange={handleChange}
        />

        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <button type="submit">
            <img src="/search.png" alt="" />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
