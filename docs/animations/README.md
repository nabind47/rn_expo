# [React Native Reanimated](https://www.reanimated2.com/docs/fundamentals/getting-started)

```sh
npx expo install react-native-reanimated
```

```js
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

> `react-native-reanimated/plugin` plugin to your `babel.config.js` has to be listed last

```tsx
import Animated from "react-native-reanimated";

export default function App() {
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: "violet",
      }}
    />
  );
}
```

> This `Animated` object wraps React Native built-ins such as `View`, `ScrollView` or `FlatList`.

```tsx
import { useState } from "react";
import { Text, Button, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Home = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return { translateX: animation.value };
  });

  return (
    <View>
      <Animated.View style={[{}, animatedStyle]} />
      <Button
        title="Animate"
        onPress={() => {
          if (clicked) {
            animation.value = withTiming(100, { duration: 100 });
          } else {
            animation.value = withTiming(-100, { duration: 600 });
          }
          setClicked(!clicked);
        }}
      />
    </View>
  );
};
```

## Interpolation

```tsx
const animation = useSharedValue(0);
const [clicked, setClicked] = useState(false);

const width = interpolate(animation.value, [1, 0], [100, 200]);
const borderRadius = interpolate(animation.value, [1, 0], [0, 100]);
const backgroundColor = interpolateColor(
  animation.value,
  [1, 0],
  ["pink", "orange"]
);

const animatedStyle = useAnimatedStyle(() => {
  return {
    width,
    height: width,
    backgroundColor,
    borderRadius,
  };
});

<Animated.View
  style={[{ width: 100, height: 100, backgroundColor: "pink" }, animatedStyle]}
/>;
```
