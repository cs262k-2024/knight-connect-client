import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';

import globalStyles from '@/globals/globalStyles';

type DividerProps = {
    text: string;
    color?: string;
    style?: StyleProp<ViewStyle>;
};

export default function Divider(props: DividerProps) {
    const styles = StyleSheet.create({
        divider: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
        },
        dividerLine: {
            backgroundColor: props.color
                ? props.color
                : globalStyles.veryDarkGray,
            height: 1,
            width: '30%',
            alignSelf: 'center',
        },
        dividerText: {
            alignSelf: 'center',
            paddingHorizontal: 5,
            color: props.color ? props.color : globalStyles.darkGray,
            fontSize: 11,
            lineHeight: 16.5,
            userSelect: 'none',
        },
    });

    return (
        <View style={ props.style }>
            <View style={ styles.divider }>
                <View style={ styles.dividerLine } />

                <Text style={ styles.dividerText }>{ props.text }</Text>

                <View style={ styles.dividerLine } />
            </View>
        </View>
    );
}
