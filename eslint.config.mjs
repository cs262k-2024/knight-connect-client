import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    (module.exports = {
        extends: ['expo', 'eslint:recommended'],
    }),
    (module.exports = {
        extends: ['expo', 'prettier'],
        plugins: ['prettier'],
        rules: { 'prettier/prettier': 'error' },
    }),
];
