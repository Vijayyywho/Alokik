import { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import "./Filter.scss";
import { useSearchParams } from "react-router-dom";

function Filter({ posts }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false); // Add loading state
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = async () => {
    setLoading(true); // Show spinner

    try {
      // Set search parameters
      setSearchParams(query);

      // Simulate data fetching (delay)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2-second delay

      // Filter posts based on the query parameters
      const filteredPosts = posts.filter((post) => {
        let isValid = true;

        if (query.minPrice && post.price < parseInt(query.minPrice)) {
          isValid = false;
        }

        if (query.maxPrice && post.price > parseInt(query.maxPrice)) {
          isValid = false;
        }

        if (query.type && post.type !== query.type) {
          isValid = false;
        }

        if (query.city && post.city !== query.city) {
          isValid = false;
        }

        if (query.property && post.property !== query.property) {
          isValid = false;
        }

        if (query.bedroom && post.bedroom !== query.bedroom) {
          isValid = false;
        }

        return isValid;
      });

      // Log filtered posts (can replace with setting state to display them)
      console.log(filteredPosts); // This will show the filtered posts
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Hide spinner after fetching data
    }
  };

  return (
    <div className="filter">
      <h1>
        Search results for{" "}
        <span>
          <b>{searchParams.get("city")}</b>
        </span>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            defaultValue={query.type}
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            name="property"
            id="property"
            onChange={handleChange}
            defaultValue={query.property}
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.bedroom}
          />
        </div>
        <button onClick={handleFilter} disabled={loading}>
          {loading ? (
            <Spinner size="sm" color="blue.500" />
          ) : (
            <img src="/search.png" alt="Search" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Filter;
