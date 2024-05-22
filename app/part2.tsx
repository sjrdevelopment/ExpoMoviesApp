import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, Stack, useNavigation } from "expo-router"
import { useEffect, useState } from "react"

export default function Part2() {
  const [loadingState, setLoadingState] = useState("")

  useEffect(() => {
    // write your code here, it's like componentWillMount
    setTimeout(() => {
      setLoadingState("inactive")
    }, 700)
  }, [])

  const containerStyles = {
    padding: 16,
  }

  const headerStyles = {
    width: "100%",
    textAlign: "center",
    fontSize: 26,
  }

  const imageStyles = StyleSheet.create({
    wrapper: {
      marginTop: 46,
    },
    imageWrap: {
      textAlign: "center",
      justifyContent: "center",
    },
    logo: {
      height: 160,
      width: 160,
      position: "relative",
      margin: "auto",
    },
    header: {
      marginTop: 46,
      textAlign: "center",
      fontSize: 26,
    },
  })

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
      borderColor: "#d86e0c",
      padding: 16,
      borderRadius: 20,
      borderWidth: 5,
    },
    text: {
      color: "#d86e0c",
      fontSize: 24,
    },
  })

  const loadingStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      marginTop: 100,
    },
    inactive: {
      display: "none",
    },
  })

  return (
    <SafeAreaView style={buttonStyles.outerContainer}>
      <Stack.Screen
        options={{
          title: "Basket",
          contentStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      />

      <View style={{ ...containerStyles }}>
        <Text style={headerStyles}>Basket</Text>

        <View style={[loadingStyles.container, loadingStyles[loadingState]]}>
          <ActivityIndicator size="large" />
        </View>

        <View
          style={[
            imageStyles.wrapper,
            loadingState === "" && loadingStyles.inactive,
          ]}
        >
          <View style={imageStyles.imageWrap}>
            <Image
              style={imageStyles.logo}
              source={require("../assets/images/shopping-basket.png")}
            />
          </View>
          <Text style={imageStyles.header}>Added to order</Text>
        </View>
      </View>

      <View style={buttonStyles.container}>
        <Link href="/" asChild>
          <Pressable style={buttonStyles.button}>
            <Text style={buttonStyles.text}>Back to menu</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  )
}
