import { PropsWithChildren } from 'react';
import { StyleSheet, Pressable, ViewStyle } from 'react-native';

import globalStyles from '@/globals/globalStyles';

type ButtonProps = PropsWithChildren & {
    onPress: () => void;
    style?: ViewStyle;
};

export default function Button(props: ButtonProps) {
    const styles = StyleSheet.create(
        {
            buttonContainer: {
                borderRadius: 5,
                backgroundColor: globalStyles.white,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5
            }
        }
    );

    return (
        <Pressable
            onPress={ props.onPress }
            style={ styles.buttonContainer }
        >
            { props.children }
        </Pressable>
    );
}
