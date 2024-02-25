import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const ThemeSwitch = () => {
  const animation = useSharedValue(0);
  const [dark, setDark] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: animation.value }] };
  });

  return (
    <View style={[styles.container, dark && { backgroundColor: "#696268" }]}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          if (animation.value === 0) {
            animation.value = withTiming(100, { duration: 500 });
            setDark(true);
          } else {
            animation.value = withTiming(0, { duration: 500 });
            setDark(false);
          }
        }}
      >
        <Animated.View style={[styles.iconContainer, animatedStyle]}>
          {dark ? (
            <Feather name="moon" size={30} />
          ) : (
            <Feather name="sun" size={30} />
          )}
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeSwitch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 150,
    height: 50,
    borderRadius: 30,
    borderWidth: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
