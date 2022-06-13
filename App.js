import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions } from "react-native";

import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    width: "100%",
    height: Dimensions.get('window').height,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
