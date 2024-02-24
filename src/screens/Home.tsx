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
