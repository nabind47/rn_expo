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
const Instagram = () => {
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

export default Instagram;
