const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/", {
      target: "https://dailylif-sharing-app.herokuapp.com",
      changeOrigin: true,
    })
  );
};
