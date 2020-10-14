# Chakra-UI-Reicpes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using [typescript](https://create-react-app.dev/docs/adding-typescript/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Bit

### Docs

- [bit component docs](https://docs.bit.dev/docs/add-and-isolate-components)
- [bit typescript compiler](https://bit.dev/bit/envs/compilers/react-typescript)

Read the docs at <https://docs.bit.dev/docs/quick-start>

### Initialize Project

- run `bit init`
- run `bit install`
- run `bit build`
- run `bit test`

### Creating, adding and exporting components

- create new component in `src/components/{folder-name}/{component-name}.tsx` + test file in `src/components/{folder-name}/{component-name}.test.tsx`
- run `bit add src/components/{folder-name}/{component-name}.tsx --id component-name --tests src/components/{folder-name}/{component-name}.test.tsx`
- to run tests do `bit test`
- you can also run `yarn test` to enable the create react app test watch mode
- before tagging new versions run `bit import` to pull changes from bit
- run `bit tag --all` -> this will create a `staging` version like in git for all components that were modified and tag them with a new version
- run `bit export {collection-name}` to publish changes to bit
