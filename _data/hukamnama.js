const fetch = require("node-fetch");

module.exports = async () => {
  let response = await fetch(
    `https://api.gurbaninow.com/v2/hukamnama/today?${
      Math.random() * 100000000000000000
    }`
  );
  let hukamnamaJSON = await response.json();
  return hukamnamaJSON.hukamnama;
};
