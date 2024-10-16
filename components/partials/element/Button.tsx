import { GestureResponderEvent, Pressable, StyleProp, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import Text from "./CustomText";
import color from "@/constants/color";

type TButtonProps = {
    title: string;
    onPress: ((event: GestureResponderEvent) => void);
    style?: StyleProp<ViewStyle>;
    textStyle?: TextStyle;
}

const Button = ({ title, onPress, style, textStyle }: TButtonProps) => {
    return (
        // <View>
        <Pressable onPress={onPress} style={[styles.pressableContainer, style]}><Text style={{ ...styles.textStyle, ...textStyle }}>{title}</Text></Pressable>
        // </View>
    );
};

const styles = StyleSheet.create({
    pressableContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        backgroundColor: color.primary,
        paddingHorizontal: 4,
        
    },
    textStyle: { fontSize: 20, textAlign: "center", color: "white" }
})

export default Button;