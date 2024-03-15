module.exports = {
  webpack: (config, { isServer }) => {

    config.module.rules.push({
      test: /\.css$/,
      exclude: /\.module\.css$/, 
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            url: false,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]--[hash:base64:5]', 
            },
            url: false,
          },
        },
      ],
    });

    return config;
  },
};
