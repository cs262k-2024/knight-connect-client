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
        },
        dividerLine: {
            backgroundColor: props.color ? props.color : globalStyles.darkGray,
            height: 1,
            flex: 1,
            alignSelf: 'center'
        },
        dividerText: {
            alignSelf: 'center',
            paddingHorizontal: 5,
            color: props.color ? props.color : globalStyles.darkGray,
            // fontWeight: 100,
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
