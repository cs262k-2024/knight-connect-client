import { PropsWithChildren } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export default function TouchableWrapper({ children }: PropsWithChildren) {
    return (
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
            { children }
        </TouchableWithoutFeedback>
    );
}
