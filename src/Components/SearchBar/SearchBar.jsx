import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, Box, Input, Button } from "@chakra-ui/react";
import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";

const types = ["buy", "rent", "villa", "farmhouse", "campsite"];

const typeLabels = {
  buy: "Hotels",
  rent: "Resorts",
  villa: "Villas",
  farmhouse: "Farmhouses",
  campsite: "Campsites",
};

// Hall options
const halls = ["Birthday Party Hall or Lawn", "Wedding Hall or Lawn"];

const cities = [
  "Vasai",
  "Dahanu",
  "Palghar",
  "Wada",
  "Talasari",
  "Vikramgad",
  "Jawhar",
  "Mokhada",
];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: types[0],
    city: "",
    minPrice: "",
    maxPrice: "",
  });
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="searchbar">
      <div className="type">
        {isSmallScreen ? (
          <Select
            name="type"
            value={query.type}
            onChange={(e) => switchType(e.target.value)}
            placeholder="Select Type"
            bg="white"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {typeLabels[type]}
              </option>
            ))}
          </Select>
        ) : (
          types.map((type) => (
            <button
              key={type}
              onClick={() => switchType(type)}
              className={query.type === type ? "active" : ""}
            >
              {typeLabels[type]}
            </button>
          ))
        )}
      </div>

      <form>
        <Box
          display="flex"
          gap="10px"
          alignItems="center"
          p={{ base: 0, md: 4 }}
        >
          <Select
            name="city"
            value={query.city}
            onChange={handleChange}
            placeholder="Select City"
            bg="white"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </Select>
        </Box>

        {/* Hall Dropdown */}
        <Box>
          <Select
            name="hall"
            value={query.hall}
            onChange={handleChange}
            placeholder=" Halls"
            bg="white"
            mt={4}
            width="80%"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
          >
            {halls.map((hall) => (
              <option key={hall} value={hall}>
                {hall}
              </option>
            ))}
          </Select>
        </Box>

        <Box display="flex" gap="10px" alignItems="center">
          <Input
            type="number"
            min={0}
            max={10000000}
            placeholder="₹ Min Price"
            name="minPrice"
            value={query.minPrice}
            onChange={handleChange}
            bg="white"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
          />
          <Input
            type="number"
            name="maxPrice"
            min={0}
            max={10000000}
            placeholder="₹ Max Price"
            value={query.maxPrice}
            onChange={handleChange}
            bg="white"
            borderColor="gray.300"
            _hover={{ borderColor: "gray.400" }}
          />
        </Box>

        <Link
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          <Button
            mt={4}
            mr={2}
            bg="#EF964C"
            color="white"
            _hover={{ bg: "#D8772B" }}
          >
            <FaSearch />
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
