import { StyleSheet, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import Feather from "@expo/vector-icons/Feather";

const GmailArchive = () => {
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: animation.value }] };
  });
  const animatedIcon = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            animation.value > 70 || animation.value < -50
              ? withSpring(2)
              : withSpring(1),
        },
      ],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = animation.value;
    },
    onActive: (event, ctx: any) => {
      animation.value = ctx.startX + event.translationX;
    },
    onEnd: (event, ctx) => {
      animation.value = withSpring(0);
    },
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={styles.card}>
          <Animated.View style={[styles.c, animatedIcon]}>
            <Feather name="archive" style={{ color: "white" }} />
          </Animated.View>
          <Animated.View style={[styles.c, animatedIcon]}>
            <Feather name="archive" style={{ color: "white" }} />
          </Animated.View>
          <Animated.View style={[styles.o, animatedStyle]}></Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default GmailArchive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    height: 100,
    elevation: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "green",
    justifyContent: "space-between",
  },
  c: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  d: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  o: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "white",
  },
});
