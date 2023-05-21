import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback, // обертка для для всего контента.
  Keyboard, // импорт компонента клавиатуры
  KeyboardAvoidingView, // обертка для клавиатуры.
  Platform,
} from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
  return (
    <TouchableWithoutFeedback // при касании на пустом месте вне инпута, клавиатура исчезает.
      onPress={Keyboard.dismiss}
    >
      <View style={styles.container}>
        <KeyboardAvoidingView // определяет ОС и настраивает поведение клавиатуры. Фикс перекрытия клавиатурой поля инпут для ios
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            placeholder="Type text"
            value={value}
            onChangeText={inputHandler}
          />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
});
