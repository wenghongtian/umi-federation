import { ModuleFederationPlugin } from "@module-federation/enhanced";
import { defineConfig } from "umi";
import { resolve } from "path";
import webpack from "webpack";

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  "react-dom": {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  routes: [{ path: "/", component: "index" }],
  npmClient: "pnpm",
  jsMinifier: "terser",
  mfsu: false,
  publicPath: "http://localhost:8001/",
  chainWebpack(memo) {
    memo.plugin("mf").use(ModuleFederationPlugin, [
      {
        name: "remote1",
        filename: "remote.js",
        exposes: {
          "./Button": resolve(__dirname, "./src/exposes/Button"),
        },
        shared,
      },
    ]);
  },
  webpack,
  writeToDisk: true,
});
