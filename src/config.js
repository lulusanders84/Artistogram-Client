module.exports = {
  PORT: process.env.PORT || 8080,
  // other stuff
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL ||
    "http://localhost:8080/api",
  LAST_FM_API_KEY: "b79f2b15b58f900aec459c35cdf1ddde",
  SHARED_SECRET: "68c83382aa42215fddb46af28633dca8"
};
