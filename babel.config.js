module.exports = {
  presets: ['module:@react-native/babel-preset'],
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "@assets": "./src/assets",
          "@navigation": "./src/presentation/navigation",
          "@components": "./src/presentation/components",
          "@screens": "./src/presentation/screens",
          "@props": "./src/presentation/props",
          "@constants": "./src/constants",
          "@hooks": "./src/hooks",
          "@utils": "./src/utils",
          "@config": "./src/config",
          "@context": "./src/context",
          "@services": "./src/services",
          "@models": "./src/data/models",
          "@repositories": "./src/data/repositories",
          "@sources": "./src/data/sources",
          "@usecases": "./src/domain/usecases",
        }
      }
    ]
  ]
};
