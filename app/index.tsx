import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, Stack, useNavigation } from "expo-router"

import Carousel from "react-native-reanimated-carousel"

export default function App() {
  const buttonStyles = StyleSheet.create({
    outerContainer: {
      padding: 16,
      display: "flex",
      flex: 1,
      flexDirection: "column",
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      position: "absolute",
      bottom: 36,
      left: 0,
      right: 0,
    },
    button: {
      // width: 100,
      //height: 60,
      borderColor: "#420044",
      padding: 16,
      borderRadius: 20,
      borderWidth: 5,
    },
    text: {
      color: "#420044",
      fontSize: 24,
    },
  })

  const imageStyles = StyleSheet.create({
    wrapper: {
      flexDirection: "row",
    },
    imageWrap: {
      flex: 1,
      alignContent: "center",
      textAlign: "center",
      flexDirection: "row",
    },
    logo: {
      height: 60,
      width: 60,
      marginLeft: "auto",
    },
    header: {
      width: 70,
      textAlign: "center",
      fontSize: 26,
      flex: 3,
      marginTop: 16,
    },
  })

  const width = Dimensions.get("window").width

  const carouselStyles = StyleSheet.create({
    carousel: {
      marginTop: 66,
      // display: "flex",
      flexDirection: "column",
      //flex: 2,
      //flexWrap: "wrap",
    },
    cWrap: {
      //display: "flex",
      //flexDirection: "column",
      flex: 1,
      //flexWrap: "wrap",
    },
    image: {
      height: 150,
      position: "relative",
      textAlign: "center",
      margin: "auto",
      //display: "flex",
      flex: 3,
    },
    title: {
      //display: "flex",
      flex: 1,
      //justifyContent: "flex-end",
      textAlign: "center",
      width: "100%",
      verticalAlign: "bottom",
      fontSize: 24,
      marginTop: 40,
    },
  })
  const data = [
    {
      image: require("../assets/images/coffee-to-go.png"),
      title: "Americano",
    },
    {
      image: require("../assets/images/ice-coffee.png"),
      title: "Iced coffee",
    },
    {
      image: require("../assets/images/irish-coffee.png"),
      title: "Cold brew",
    },
  ]

  return (
    <SafeAreaView style={buttonStyles.outerContainer}>
      <Stack.Screen
        options={{
          title: "Home",
          contentStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      />

      <View style={imageStyles.wrapper}>
        <View style={imageStyles.imageWrap}>
          <Image
            style={imageStyles.logo}
            source={require("../assets/images/online-shop.png")}
          />
        </View>
        <Text style={imageStyles.header}>My Coffee Shop</Text>
      </View>

      <Carousel
        style={carouselStyles.carousel}
        loop={false}
        width={width - 32}
        autoPlay={false}
        data={[0, 1, 2]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => {
          console.log("this is image " + data[index].image)
          const imagePath = data[index].image

          return (
            <View style={carouselStyles.cWrap}>
              <View
                style={{
                  //flex: 1,
                  justifyContent: "center",
                  width: "100%",
                  flexDirection: "row",
                }}
              >
                <Image
                  style={carouselStyles.image}
                  source={data[index].image}
                  resizeMode="contain"
                />
              </View>
              <Text style={carouselStyles.title}>{data[index].title}</Text>
            </View>
          )
        }}
      />

      <View style={buttonStyles.container}>
        <Link href="/part2" asChild>
          <Pressable style={buttonStyles.button}>
            <Text style={buttonStyles.text}>Add to order</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  )
}
