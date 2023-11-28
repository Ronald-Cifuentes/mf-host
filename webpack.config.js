const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const WebpackRemoteTypesPlugin = require("webpack-remote-types-plugin").default;
const path = require("path");

const remoteUrl = "mf_design_system@http://localhost:3012/remoteEntry.js";

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:1422/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 1422,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        // viteRemote: `promise import("http://localhost:5001/assets/remoteEntry.js")`,
        // profile_user: `profile_user@http://localhost:3001/remoteEntry.js`,
        // // remote_vue: `remote_vue@http://localhost:3002/remoteEntry.js`,
        // settings_user: `settings_user@http://localhost:3002/remoteEntry.js`,
        // // remote_app: `promise import("http://localhost:5001/assets/remoteEntry.js")`,
        mf_design_system: remoteUrl,
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new WebpackRemoteTypesPlugin({
      remotes: {
        app: remoteUrl,
      },
      outputDir: "types",
      remoteFileName: "[name]-dts.tgz",
    }),
  ],
});
