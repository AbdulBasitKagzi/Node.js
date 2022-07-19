import axios from "axios";

axios
  .get("http://www.google.com")
  .then((resp) => console.log("response", resp))
  .catch((err) => console.log(err));
