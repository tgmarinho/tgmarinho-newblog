module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  root: true, // Make sure eslint picks up the config at the root of the directory
  parserOptions: {
    ecmaVersion: 2020, // Use the latest ecmascript standard
    sourceType: `module`, // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: `detect`, // Automatically detect the react version
    },
    // 'import/resolver': {
    //   typescript: {
    //     project: `.`,
    //   },
    // },
  },
  globals: {
    globalThis: false, // means it is not writeable
  },
  env: {
    browser: true, // Enables browser globals like window and document
    amd: true, // Enables require() and define() as global variables as per the amd spec.
    node: true, // Enables Node.js global variables and Node.js scoping.
    es6: true,
  },
  extends: [
    // 'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    `eslint:recommended`,
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    `plugin:react/recommended`,
    `plugin:react-hooks/recommended`,
    `plugin:jsx-a11y/recommended`,
  ],
  rules: {
    'no-prototype-builtins': `off`,
    'react/prop-types': `off`,
    'react/react-in-jsx-scope': `off`,
    'react/no-unescaped-entities': `off`,
    'jsx-a11y/anchor-is-valid': `off`,
    // 'prettier/prettier': [`error`, {}, { usePrettierrc: true }], // Use our .prettierrc file as source
    'import/prefer-default-export': `off`,
    'react/jsx-filename-extension': `off`,
    'react/jsx-props-no-spreading': `off`,
    // 'import/extensions': [
    //   `error`,
    //   `ignorePackages`,
    //   {
    //     ts: `never`,
    //     tsx: `never`,
    //     js: `never`,
    //     jsx: `never`,
    //   },
    // ],
    'react/no-danger': `off`,
    'no-underscore-dangle': `off`,
    camelcase: `off`,
    'react/jsx-uses-react': `off`,
  },
  ignorePatterns: [`*.macro.js`],
  // 'no-restricted-imports': [
  //   'error',
  //   {
  //     paths: [
  //       {
  //         name: 'styled-components',
  //         message: 'Please import from styled-components/macro.',
  //       },
  //     ],
  //     patterns: ['!styled-components/macro'],
  //   },
  // ],
  // overrides: [
  //   {
  //     files: `**/*.+(ts|tsx)`,
  //     parser: `@typescript-eslint/parser`,
  //     plugins: [`@typescript-eslint/eslint-plugin`],
  //     extends: [`plugin:@typescript-eslint/recommended`],
  //     rules: {
  //       '@typescript-eslint/explicit-function-return-type': [
  //         `warn`,
  //         {
  //           allowExpressions: true,
  //         },
  //       ],
  //       'no-use-before-define': [0],
  //       '@typescript-eslint/no-use-before-define': [1],
  //       '@typescript-eslint/no-explicit-any': `off`,
  //       '@typescript-eslint/no-var-requires': `off`,
  //     },
  //   },
  // ],
}
