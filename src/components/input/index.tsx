import { ReactElement, useState } from 'react';
import { StyleSheet, View, TextInput, TextInputProps, ViewStyle, TextStyle } from 'react-native';

import globalStyles from '@/globals/globalStyles';

type InputProps = Omit<TextInputProps, 'style'> & {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    frontIcon?: ReactElement;
};

export default function Input(props: InputProps) {
    const [isFocused, updateFocused] = useState(false);

    const styles = StyleSheet.create({
        container: Object.assign({
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
            backgroundColor: globalStyles.white
        }, props.containerStyle),
        input: Object.assign({
            backgroundColor: 'none',
            borderRadius: 5,
            padding: 10,
            width: '100%',
            color: globalStyles.white
        }, props.inputStyle)
    });

    return (
        <View style={ styles.container }>
            { props.frontIcon }

            <TextInput
                style={ styles.input }
                placeholderTextColor={
                    !isFocused ? globalStyles.gray : globalStyles.black
                }
                onFocus={ () => updateFocused(true) }
                onBlur={ () => updateFocused(false) }
                { ...props }
            />
        </View>
    );
}
