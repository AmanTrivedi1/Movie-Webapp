import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    // key: "AIzaSyAg2qn4JkBBhC2m_nUYIiHuzpPHmmTNKH8",
    key: "AIzaSyAJpXRXMh-GvdjeS_q6DcqfWnVk8uA85Rc",
  },
});

export default request;
