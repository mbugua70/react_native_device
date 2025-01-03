import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AllPlaces from "./screen/AllPlaces";
import AddPlace from "./screen/AddPlace";
import { Colors } from "./constants/Globalcolors";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home Screen testing</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary500,
          headerTintColor: Colors.gray700,
        },
        contentStyle: {
          backgroundColor: Colors.gray700
        }
      }}>
        <Stack.Screen name="All Places" component={AllPlaces} />
        <Stack.Screen name="Add Place" component={AddPlace} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
