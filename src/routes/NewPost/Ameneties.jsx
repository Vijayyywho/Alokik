import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Checkbox,
  Button,
  SimpleGrid,
  Text,
  Input,
  VStack,
} from "@chakra-ui/react";

function AmenitiesSelector({ onSubmit }) {
  const [included, setIncluded] = useState([]);
  const [excluded, setExcluded] = useState([]);
  const [customAmenity, setCustomAmenity] = useState("");
  const [amenities, setAmenities] = useState([
    "Pet Allowed",
    "Hookah Allowed",
    "Free WIFI",
    "Cable TV",
    "Hot N Cold Water",
    "Veg N Nonveg Food",
    "Out Door Dining",
    "Non AC Room",
    "AC Room",
    "Swimming Pool",
    "Garden Area",
    "Generator Backup",
    "Inverter Backup",
    "Outdoor Smoking",
    "Room Services",
    "Attached Bathroom",
    "Tile Floor",
    "Extra Bed (On Request)",
    "Daily Housekeeping",
    "CCTV Outdoor Camera",
    "Breakfast Area",
    "Kids Play Area",
    "Suitable for Events",
    "Mobile Network",
    "Music Allowed (Max. 10pm only)",
  ]);

  const handleCheckboxChange = (amenity, isIncluded) => {
    if (isIncluded) {
      setIncluded((prev) => [...prev, amenity]);
      setExcluded((prev) => prev.filter((item) => item !== amenity));
    } else {
      setExcluded((prev) => [...prev, amenity]);
      setIncluded((prev) => prev.filter((item) => item !== amenity));
    }
  };

  const handleAddCustomAmenity = () => {
    if (customAmenity.trim() && !amenities.includes(customAmenity)) {
      setAmenities((prev) => [...prev, customAmenity]);
      setCustomAmenity("");
    }
  };

  const handleSubmit = () => {
    const data = {
      included: included,
      excluded: excluded,
    };

    onSubmit(data);
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Select Amenities
      </Text>
      <FormControl>
        <FormLabel>Included Amenities</FormLabel>
        <SimpleGrid columns={2} spacing={4}>
          {amenities.map((amenity) => (
            <Checkbox
              key={amenity}
              onChange={(e) => handleCheckboxChange(amenity, e.target.checked)}
              isChecked={included.includes(amenity)}
            >
              {amenity}
            </Checkbox>
          ))}
        </SimpleGrid>
      </FormControl>
      <VStack mt={4} spacing={2} align="start">
        <Input
          placeholder="Enter custom amenity"
          value={customAmenity}
          onChange={(e) => setCustomAmenity(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleAddCustomAmenity}>
          Add Amenity
        </Button>
      </VStack>
      <Button colorScheme="teal" mt={4} onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}

export default AmenitiesSelector;
