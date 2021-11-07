import axios from "axios";

export const getRecommendations = async (lat: string, lng: string) => {
  const result = await axios.get(`http://15.164.40.176:8080/api/v1/recommend?lat=${lat}&lng=${lng}`);

  return result;
}