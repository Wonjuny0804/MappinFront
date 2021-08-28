const proxy = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: "http://15.164.40.176:8080",
      changeOrigin: true,
    })
  );
};
