import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text field</Text>
      <ScrollView style={styles.scroll}>
        <Text>
          ScrollView textScrollView textScrollView textScrollView text
          ScrollView text ScrollView text ScrollView text ScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView textScrollView textScrollView
          textScrollView textScrollView text ScrollView text ScrollView text
          ScrollView textScrollView textScrollView textScrollView textScrollView
          text ScrollView text ScrollView text ScrollView textScrollView
          textScrollView textScrollView textScrollView text ScrollView text
          ScrollView text ScrollView text
        </Text>
      </ScrollView>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Button was pressed")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scroll: {
    flex: 1,
  },
});
