tsconfig -> allowJs: true
tsconfig -> "module": "CommonJS"

tsconfig -> checkJS: true
// @no-check       => add this on the top of js file (tsc will not emit errors)


# @types
Github repo containing type declaration for all popular npm packages.

problem :-
Error: Could not find a declaration file for module 'lodash'
Reason: Because lodash is a purely js library.

Solution :-
yarn add --dev @types/lodas