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

## Gesture Handler

```tsx
import { View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const Home = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.startX = x.value;
      c.startY = y.value;
    },
    onActive: (e, c: any) => {
      x.value = c.startX + e.translationX;
      y.value = c.startY + e.translationY;
    },
    onEnd: (e, c) => {
      x.value = withSpring(0);
      y.value = withSpring(0);
    },
  });
  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: x.value }, { translateY: y.value }] };
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            { width: 100, height: 100, backgroundColor: "pink" },
            animatedStyle,
          ]}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Home;
```

## Instagram Double Click

```tsx
import { useCallback } from "react";
import { Dimensions, Image, ImageBackground, View } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

const ImageComponent = Animated.createAnimatedComponent(Image);
const Home = () => {
  const scale = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ scale: Math.max(scale.value, 0) }] };
  });

  const doubleTapped = useCallback(() => {
    scale.value = withSpring(1, undefined, (isFinished) => {
      if (isFinished) {
        scale.value = withDelay(100, withSpring(0));
      }
    });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <TapGestureHandler
          maxDelayMs={250}
          numberOfTaps={2}
          onActivated={doubleTapped}
        >
          <Animated.View>
            <ImageBackground
              source={{
                uri: "https://images.pexels.com/photos/19528148/pexels-photo-19528148/free-photo-of-a-brick-wall-with-a-light-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              }}
              style={{
                width: Dimensions.get("window").width,
                height: Dimensions.get("screen").width,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageComponent
                source={{
                  uri: "https://www.shutterstock.com/shutterstock/photos/1149436154/display_1500/stock-vector-heart-vector-icon-on-transparent-background-heart-icon-1149436154.jpg",
                }}
                style={[{ width: 100, height: 100 }, animatedStyle]}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </View>
    </View>
  );
};

export default Home;
```
