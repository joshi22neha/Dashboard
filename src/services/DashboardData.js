import axios from "axios";

export default axios.create({
  baseURL:
    "https://gist.githubusercontent.com/paulmillr/4524946/raw/c462a62ac9f3a072fc4106bbd131335ad730da16/github-users-stats.json",
});
