# Ignite Timer

## Executando o ESLint
Originalmente o ESLint pode ser executado com os seguintes comandos
 ```
 npx eslint src --ext .ts,.tsx
 npx eslint src --ext .ts,.tsx --fix
 ```
Foram adicionados comandos no package.json para facilitar a execução

 ```
 npm run lint
 npm run lintfix
 ```