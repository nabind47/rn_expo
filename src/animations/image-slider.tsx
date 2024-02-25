import { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const fruits = [
  "https://images.pexels.com/photos/760281/pexels-photo-760281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1486976/pexels-photo-1486976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const SilderItem = ({
  imageurl,
  current,
  index,
}: {
  imageurl: string;
  current: number;
  index: number;
}) => {
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: animation.value === index ? withSpring(1) : withSpring(0.5),
        },
      ],
    };
  });
  useEffect(() => {
    animation.value = current;
  }, [current]);

  return (
    <Animated.View style={[styles.sliderContainer, animatedStyle]}>
      <Image
        source={{ uri: imageurl }}
        style={{ width: "100%", height: "100%" }}
      />
    </Animated.View>
  );
};

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        onScroll={(e) => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrent(Math.ceil(x / Dimensions.get("window").width));
        }}
        data={fruits}
        renderItem={({ item, index }) => (
          <SilderItem imageurl={item} index={index} current={current} />
        )}
      />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "center",
    alignItems: "center",
  },
});
