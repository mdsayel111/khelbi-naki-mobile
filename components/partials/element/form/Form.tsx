import color from "@/constants/color";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

type TFormProps = {
  title: string;
  children: React.ReactNode;
};

export default function Form({ children, title }: TFormProps) {
  return (
    <View style={{ display: "flex", gap: 20 }}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.formContainer}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    // backgroundColor: color.secondary,
    paddingVertical: 4
  },
  formContainer: {
    backgroundColor: color.secondary,
    gap: 20
  }
})
