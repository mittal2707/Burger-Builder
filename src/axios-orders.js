import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-1c67f.firebaseio.com/",
});

export default instance;
