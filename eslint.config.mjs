import globals from "globals"
import pluginJs from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended, // inclui as regras recomendadas do ESLint para JavaScript
  eslintConfigPrettier,
  {
    rules: {
      "no-console": "warn", // Exemplo de regra adicional
    },
  },
]
