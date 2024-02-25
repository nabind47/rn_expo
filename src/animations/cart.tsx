import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Cart = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const animateX = useSharedValue(0);
  const animateY = useSharedValue(0);
  const scaleCount = useSharedValue(0);
  const cartScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: animateX.value },
        { translateY: animateY.value },
        { scale: scaleCount.value },
      ],
    };
  });
  const cartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: cartScale.value }],
    };
  });
  const handleClick = () => {
    if (animateX.value === 0) {
      setClicked(true);
      scaleCount.value = 1;
      animateX.value = withTiming(185, { duration: 1500 });
      animateY.value = withTiming(-560, { duration: 1500 });
      setTimeout(() => {
        scaleCount.value = 0;
        cartScale.value = withSpring(1.5);
        setCount(count + 1);
        animateX.value = withTiming(0, { duration: 1500 });
        animateY.value = withTiming(0, { duration: 1500 });
        setTimeout(() => {
          cartScale.value = withSpring(1);
          setClicked(false);
        }, 200);
      }, 1500);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={styles.image}
      />
      <View style={[styles.cartIconContainer]}>
        <Ionicons name="cart" size={30} />
        <Animated.View style={[styles.cartBadge, cartStyle]}>
          <Text style={styles.cartBadgeText}>{count}</Text>
        </Animated.View>
      </View>
      <Text style={styles.title}>Welcome to Creative Nepal</Text>
      <Text style={styles.description}>
        Discover a world of creativity at Creative Nepal. Immerse yourself in a
        curated collection of unique and inspiring products that celebrate art,
        culture, and innovation. Our handpicked items are designed to bring joy,
        inspiration, and a touch of elegance to your life.
      </Text>

      <Animated.View style={[styles.cartAnimation, animatedStyle]}>
        <Text style={styles.cartBadgeText}>+1</Text>
      </Animated.View>
      <TouchableOpacity
        disabled={clicked}
        style={[styles.button, clicked && { backgroundColor: "gray" }]}
        onPress={handleClick}
      >
        <Text style={[styles.buttonText]}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    margin: 10,
  },
  description: {
    fontSize: 16,
    margin: 10,
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "black",
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  cartIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 80,
    right: 10,
    borderRadius: 30,
  },
  cartBadge: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },
  cartBadgeText: {
    color: "white",
  },
  cartAnimation: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});

export default Cart;
