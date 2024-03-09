import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchImages = async (searchQuery, page) => {
  const response = await axios.get("/search/photos", {
    headers: {
      Authorization: "Client-ID P2Cn5yCmn6BTfsdgkZ6eyPII-sOrJJj275KGaC6cXco",
    },
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
  });
  return response.data.results;
};
export default fetchImages;