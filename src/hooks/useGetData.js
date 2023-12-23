import axios from "axios";

export default async function getData(url, method) {
try {
          if (method == "get") {
            const res = await axios.get(url);

            return res;
          }
} catch (error) {
     return error
}
    
}
