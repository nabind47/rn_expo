import { Image, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const ImageFlip = () => {
  const spin = useSharedValue(0);
  const frontAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  });
  const backAnimatedStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  });
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Animated.View
          style={[
            {
              height: 400,
              width: 250,
              backgroundColor: "#D8D9CF",
              borderRadius: 16,
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
            },
            frontAnimatedStyle,
          ]}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/7292733/pexels-photo-7292733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        </Animated.View>
        <Animated.View
          style={[
            {
              height: 400,
              width: 250,
              backgroundColor: "#FF8787",
              borderRadius: 16,
              backfaceVisibility: "hidden",
              alignItems: "center",
              justifyContent: "center",
            },
            backAnimatedStyle,
          ]}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/18113446/pexels-photo-18113446/free-photo-of-red-light-over-man-in-white-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
          />
        </Animated.View>
      </View>

      <Text
        style={{
          marginTop: 50,
          borderWidth: 1,
          padding: 10,
          color: "black",
          borderRadius: 10,
        }}
        onPress={() => {
          spin.value = spin.value ? 0 : 1;
        }}
      >
        Flip Card
      </Text>
    </View>
  );
};
export default ImageFlip;
