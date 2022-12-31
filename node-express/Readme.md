# Node
yarn add --dev ts-node
yarn add --dev typescript
package.json -> 'scripts' -> "start": "ts-node index.ts"


# Express
yarn add express
yarn add -D typescript @types/node @types/express ts-node
tsc --init
yarn add -D nodemon
package.json -> 'scripts' -> "start": "nodemon index.ts"
> Note: lastest version of nodemon support ts-node
