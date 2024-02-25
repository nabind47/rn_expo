import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

const ProfileImage = () => {
  const animatedWidth = useSharedValue(70);
  const animatedHeight = useSharedValue(70);
  const animatedY = useSharedValue(0);
  const animatedCross = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      height: animatedHeight.value,
      transform: [{ translateY: animatedY.value }],
    };
  });
  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animatedCross.value }],
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedButton
        style={[animatedButtonStyle]}
        onPress={() => {
          animatedWidth.value = withTiming(70, { duration: 500 });
          animatedHeight.value = withTiming(70, { duration: 500 });
          animatedY.value = withTiming(0, { duration: 500 });
          animatedCross.value = withTiming(0, { duration: 500 });
        }}
      >
        <Text style={{ fontSize: 30 }}>x</Text>
      </AnimatedButton>
      <TouchableOpacity
        onPress={() => {
          if (animatedWidth.value == 70) {
            animatedCross.value = withTiming(1, { duration: 500 });
            animatedWidth.value = withTiming(350, { duration: 500 });
            animatedHeight.value = withTiming(350, { duration: 500 });
            animatedY.value = withTiming(150, { duration: 500 });
          } else {
            animatedWidth.value = withTiming(70, { duration: 500 });
            animatedHeight.value = withTiming(70, { duration: 500 });
            animatedY.value = withTiming(0, { duration: 500 });
            animatedCross.value = withTiming(0, { duration: 500 });
          }
        }}
      >
        <AnimatedImage
          source={{
            uri: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={[styles.image, animatedStyle]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    resizeMode: "cover",
  },
});
