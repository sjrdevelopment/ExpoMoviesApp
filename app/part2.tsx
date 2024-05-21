import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link, Stack } from "expo-router"

export default function Part2() {
  return (
    <SafeAreaView>
      <Text>Part 2</Text>
      <Link href={{ pathname: "" }}>back</Link>
    </SafeAreaView>
  )
}
