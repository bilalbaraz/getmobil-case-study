module.exports = {
  presets: ['module:@react-native/babel-preset'],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "@components": "./src/presentation/components",
          "@screens": "./src/presentation/screens",
          "@types": "./src/presentation/types",
          "@constants": "./src/constants",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
          "@services": "./src/services",
          "@models": "./src/data/models",
          "@repositories": "./src/data/repositories",
        }
      }
    ]
  ]
};
