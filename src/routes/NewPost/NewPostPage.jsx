import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  HStack,
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import apiRequest from "../../lib/apiRequest";
import UploadWidget from "../../Components/Upload/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState([]); // State for selected amenities
  const navigate = useNavigate();

  // List of 20 sample amenities
  const amenitiesList = [
    "WiFi",
    "Parking",
    "Gym",
    "Swimming Pool",
    "Air Conditioning",
    "Heating",
    "Balcony",
    "Garden",
    "Fireplace",
    "Security",
    "Elevator",
    "Furnished",
    "Playground",
    "BBQ Area",
    "Laundry Room",
    "Sauna",
    "Jacuzzi",
    "Pet Friendly",
    "Electricity Backup",
    "Conference Room",
  ];

  const handleAmenityChange = (checkedValues) => {
    setSelectedAmenities(checkedValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title || "Untitled",
          price: parseInt(inputs.price) || 0,
          address: inputs.address || "",
          city: inputs.city?.trim().toLowerCase() || "unknown",
          bedroom: parseInt(inputs.bedroom) || 1,
          bathroom: parseInt(inputs.bathroom) || 1,
          type: inputs.type || "rent",
          property: inputs.property || "apartment",
          latitude: inputs.latitude.trim() || "0",
          longitude: inputs.longitude.trim() || "0",
          images: images.length ? images : ["/default.jpg"],
        },
        postDetail: {
          desc: value || "No description provided",
          utilities: inputs.utilities || "shared",
          pet: inputs.pet || "allowed",
          income: inputs.income || "No income policy specified",
          size: parseInt(inputs.size) || 0,
          school: parseInt(inputs.school) || 0,
          bus: parseInt(inputs.bus) || 0,
          restaurant: parseInt(inputs.restaurant) || 0,
          amenities: {
            included: selectedAmenities,
            excluded: amenitiesList.filter(
              (item) => !selectedAmenities.includes(item)
            ),
          },
        },
      });
      navigate("/list/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError("Failed to create a post. Please try again.");
    }
  };

  return (
    <Box maxW="container.md" mx="auto" p={5}>
      <Text fontSize="5xl" textAlign="center" fontWeight="bold" mb={4}>
        Add Your Property to{" "}
        <Text as="span" color="#ef964c">
          Alokik!!
        </Text>
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input id="title" name="title" type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input id="price" name="price" type="number" />
          </FormControl>

          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input id="address" name="address" type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <ReactQuill theme="snow" onChange={setValue} value={value} />
          </FormControl>

          <FormControl>
            <FormLabel>City</FormLabel>
            <Input id="city" name="city" type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Bedroom Number</FormLabel>
            <Input id="bedroom" name="bedroom" type="number" min={1} />
          </FormControl>

          <FormControl>
            <FormLabel>Bathroom Number</FormLabel>
            <Input id="bathroom" name="bathroom" type="number" min={1} />
          </FormControl>

          <FormControl>
            <FormLabel>Latitude</FormLabel>
            <Input id="latitude" name="latitude" type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Longitude</FormLabel>
            <Input id="longitude" name="longitude" type="text" />
          </FormControl>

          <FormControl>
            <FormLabel>Type</FormLabel>
            <Select name="type">
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Property</FormLabel>
            <Select name="property">
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Utilities Policy</FormLabel>
            <Select name="utilities">
              <option value="owner">Owner is responsible</option>
              <option value="tenant">Tenant is responsible</option>
              <option value="shared">Shared</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Pet Policy</FormLabel>
            <Select name="pet">
              <option value="allowed">Allowed</option>
              <option value="not-allowed">Not Allowed</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Income Policy</FormLabel>
            <Input
              id="income"
              name="income"
              type="text"
              placeholder="Income Policy"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Total Size (sqft)</FormLabel>
            <Input id="size" name="size" type="number" min={0} />
          </FormControl>

          <FormControl>
            <FormLabel>School</FormLabel>
            <Input id="school" name="school" type="number" min={0} />
          </FormControl>

          <FormControl>
            <FormLabel>Bus</FormLabel>
            <Input id="bus" name="bus" type="number" min={0} />
          </FormControl>

          <FormControl>
            <FormLabel>Restaurant</FormLabel>
            <Input id="restaurant" name="restaurant" type="number" min={0} />
          </FormControl>

          <FormControl>
            <FormLabel>Select Amenities</FormLabel>
            <CheckboxGroup onChange={handleAmenityChange}>
              <SimpleGrid columns={[2, 3]} spacing={2}>
                {amenitiesList.map((amenity, index) => (
                  <Checkbox value={amenity} key={index}>
                    {amenity}
                  </Checkbox>
                ))}
              </SimpleGrid>
            </CheckboxGroup>
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Add
          </Button>

          {error && <Text color="red.500">Error: {error}</Text>}
        </VStack>
      </form>

      <Box mt={6}>
        <HStack spacing={4} wrap="wrap">
          {images.map((image, index) => (
            <Image
              src={image}
              key={index}
              alt={`uploaded-${index}`}
              boxSize="100px"
            />
          ))}
        </HStack>
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "Alokik",
            uploadPreset: "alokik",
            folder: "posts",
          }}
          setState={setImages}
        />
      </Box>
    </Box>
  );
}

export default NewPostPage;
