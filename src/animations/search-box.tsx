import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const SearchBox = () => {
  const animation = useSharedValue(0);
  const [value, setValue] = useState(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 1
          ? withTiming(300, { duration: 500 })
          : withTiming(0, { duration: 500 }),
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inputContainer, animatedStyle]}>
        <TextInput placeholder="Search..." />
        <TouchableOpacity
          onPress={() => {
            if (animation.value === 1) {
              animation.value = 0;
              setValue(1);
            } else {
              animation.value = 1;
              setValue(0);
            }
          }}
        >
          {value === 1 ? (
            <AntDesign
              name="search1"
              size={20}
              style={{ width: 20, height: 20 }}
            />
          ) : (
            <Ionicons
              name="exit-outline"
              size={20}
              style={{ width: 20, height: 20 }}
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "gray",
    justifyContent: "space-between",
  },
});
