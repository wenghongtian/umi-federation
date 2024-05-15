import { ModuleFederationPlugin } from "@module-federation/enhanced";
import { defineConfig } from "umi";
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
  publicPath: "/",
  chainWebpack(memo) {
    memo.plugin("mf").use(ModuleFederationPlugin, [
      {
        name: "remote1",
        filename: "remote.js",
        shared,
        remotes: {
          remote1: "remote1@http://localhost:8001/remote.js",
        },
      },
    ]);
  },
  webpack,
});
