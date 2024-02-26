import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const BottomBar = () => {
  const [selected, setSelected] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: animatedX.value },
        { translateY: animatedY.value },
      ],
    };
  });

  useEffect(() => {
    if (selected === 0) {
      animatedY.value = withTiming(50, { duration: 1000 });

      setTimeout(() => {
        animatedX.value = withTiming(0, { duration: 1000 });
      }, 500);
      setTimeout(() => {
        animatedY.value = withTiming(0, { duration: 500 });
      }, 1000);
    } else if (selected === 1) {
      animatedY.value = withTiming(50, { duration: 1000 });
      setTimeout(() => {
        animatedX.value = withTiming(120, { duration: 1000 });
      }, 500);
      setTimeout(() => {
        animatedY.value = withTiming(0, { duration: 1000 });
      }, 1000);
    } else {
      animatedY.value = withTiming(50, { duration: 1000 });
      setTimeout(() => {
        animatedX.value = withTiming(235, { duration: 1000 });
      }, 500);
      setTimeout(() => {
        animatedY.value = withTiming(0, { duration: 1000 });
      }, 1000);
    }
  }, [selected]);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/4467127/pexels-photo-4467127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={{ width: "100%", height: "100%" }}
      />
      <View style={styles.bottomNavContainer}>
        <Animated.View style={[styles.circle, animationStyle]} />

        <TouchableOpacity style={styles.icons} onPress={() => setSelected(0)}>
          {selected === 0 ? (
            <Ionicons name="home" size={25} style={{ color: "white" }} />
          ) : (
            <Ionicons name="home-outline" size={25} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={() => setSelected(1)}>
          {selected === 1 ? (
            <Ionicons name="heart" size={25} style={{ color: "white" }} />
          ) : (
            <Ionicons name="heart-outline" size={25} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons} onPress={() => setSelected(2)}>
          {selected === 2 ? (
            <Ionicons name="settings" size={25} style={{ color: "white" }} />
          ) : (
            <Ionicons name="settings-outline" size={25} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavContainer: {
    width: "100%",
    height: 70,
    elevation: 15,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#F3F8FF",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#E26EE5",
    position: "absolute",
  },
  icons: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
