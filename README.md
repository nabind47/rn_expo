```sh
npx create-expo-app -t expo-template-blank-typescript
```

```sh
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

[Lottie React Native](https://airbnb.io/lottie/#/react-native) |
[react-native-onboarding-swiper](https://www.npmjs.com/package/react-native-onboarding-swiper)

---

## [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

```sh
npx expo install react-native-reanimated
```

```sh
  module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```

> `react-native-reanimated/plugin` has to be listed last.

## [Bottom Sheet](https://ui.gorhom.dev/components/bottom-sheet/)

```sh
npm i @gorhom/bottom-sheet@^4
npx expo install react-native-reanimated react-native-gesture-handler
```

## [Gradient Backgrounds](https://www.npmjs.com/package/react-native-linear-gradient)

```sh
npm install react-native-linear-gradient

import LinearGradient from 'react-native-linear-gradient';
```

```tsx
const Home = () => {
  return (
    <LinearGradient
      colors={["#FF407D", "#FB88B4", "#7F27FF", "#40A2E3"]}
      style={styles.container}
    />
  );
};
```

> [An In-Depth Look at React Gradient Backgrounds](<(https://www.dhiwise.com/post/an-in-depth-look-at-react-gradient-backgrounds)>)
