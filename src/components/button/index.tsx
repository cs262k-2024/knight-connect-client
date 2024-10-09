import { PropsWithChildren } from 'react';
import { StyleSheet, Pressable, ViewStyle } from 'react-native';

import globalStyles from '@/globals/globalStyles';

type ButtonProps = PropsWithChildren & {
    onPress: () => void;
    style?: ViewStyle;
    disabled?: boolean;
};

export default function Button(props: ButtonProps) {
    const styles = StyleSheet.create({
        buttonContainer: Object.assign({
            borderRadius: 5,
            backgroundColor: globalStyles.white,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 15,
            paddingBottom: 15,
        }, props.style, (props.disabled ? { opacity: 0.4 } : {})),
    });

    return (
        <Pressable
            onPress={ props.onPress }
            style={ styles.buttonContainer }
            disabled={ props.disabled }
        >
            { props.children }
        </Pressable>
    );
}
