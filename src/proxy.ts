// src/proxy.ts
import { createProxyMiddleware } from "http-proxy-middleware";

export const proxyMiddleware = createProxyMiddleware({
  target: "https://controle-os.onrender.com/", // Replace with your API server
  changeOrigin: true,
});
