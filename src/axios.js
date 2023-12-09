import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;


// import axiosInstance from './path-to-your-axios-instance-file';

// async function fetchData() {
//   try {
//     const response = await axiosInstance.get('/some-endpoint');
//     console.log(response.data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

