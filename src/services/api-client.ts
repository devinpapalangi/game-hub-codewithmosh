import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4fb450658b774f4ba68554a0cc4feef3",
  },
});
