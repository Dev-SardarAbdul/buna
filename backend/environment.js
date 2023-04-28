const environment = {
  MONGOOSE_URL:
    "mongodb+srv://onateme1999:hanifkhan12345@cluster0.1ffol3y.mongodb.net/",
  SECRET_TOKEN: "adminsecerest@key2login_secure",
  PROJECT_NAME: "buna",
  PORT: "8080",
};

if (process.env.NODE_ENV === "development") {
  environment.MONGOOSE_URL =
    "mongodb+srv://onateme1999:hanifkhan12345@cluster0.1ffol3y.mongodb.net/";
  environment.SECRET_TOKEN = "adminsecerest@key2login_secure";
}

if (process.env.NODE_ENV === "production") {
  environment.MONGOOSE_URL =
  "mongodb+srv://onateme1999:hanifkhan12345@cluster0.1ffol3y.mongodb.net/";
  environment.SECRET_TOKEN = "adminsecerest@key2login_secure";
}

if (process.env.NODE_ENV === "staging") {
  environment.MONGOOSE_URL =
    "mongodb+srv://onateme1999:hanifkhan12345@cluster0.1ffol3y.mongodb.net/";
  environment.SECRET_TOKEN = "adminsecerest@key2login_secure";
}

module.exports = {
  env: environment,
};
