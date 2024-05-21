import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, Stack } from "expo-router"

export default function App() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: "My home",
          contentStyle: {
            backgroundColor: "#ff0000",
          },
        }}
      />

      <Text>My App</Text>
      <Link href={{ pathname: "part2" }}>Go to Part2</Link>
    </SafeAreaView>
  )
}
