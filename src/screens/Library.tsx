import { FontAwesome } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Canvas, LinearGradient, Rect, vec } from "@shopify/react-native-skia";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const getRandomColor = () => {
  // Generate random RGB color values
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Return the color in the format '#RRGGBB'
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

const LibraryScreen = () => {
  const bottomTabBarHeight = useBottomTabBarHeight();
  // const { width, height } = useWindowDimensions();
  const height = Dimensions.get("screen").height;
  const width = Dimensions.get("screen").width;

  const leftColor = useSharedValue("red");
  const rightColor = useSharedValue("blue");

  const colors = useDerivedValue(() => {
    return [leftColor.value, rightColor.value];
  }, []);

  return (
    <View style={[{ flex: 1 }]}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={colors}
          />
        </Rect>
      </Canvas>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          leftColor.value = withTiming(getRandomColor(), { duration: 1000 });
          rightColor.value = withTiming(getRandomColor(), { duration: 1000 });
        }}
      >
        <FontAwesome name="random" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 60,
    right: 32,
    height: 64,
    aspectRatio: 1,
    borderRadius: 40,
    backgroundColor: "#111",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
