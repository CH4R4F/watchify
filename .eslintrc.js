module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
      },
      {
        usePrettierrc: true,
      },
    ],
  },
};
