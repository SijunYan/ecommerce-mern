module.exports = {
  webpack: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  plugins: {
    add: [
      new webpack.DefinePlugin({
        process: { env: {} },
      }),
    ],
  },
};
