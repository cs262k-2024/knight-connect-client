import { ReactElement, useState } from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';

import globalStyles from '@/globals/globalStyles';

type InputProps = Omit<TextInputProps, 'style'> & {
    frontIcon?: ReactElement;
    backIcon?: ReactElement;
};

export default function Input(props: InputProps) {
    const [isFocused, updateFocused] = useState(false);

    const styles = StyleSheet.create({
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
            backgroundColor: globalStyles.white
        },
        input: {
            backgroundColor: 'none',
            borderRadius: 5,
            padding: 10,
            width: '100%',
        }
    });

    return (
        <View style={ styles.container }>
            { props.frontIcon }

            <TextInput
                style={ styles.input }
                placeholderTextColor={
                    !isFocused ? globalStyles.darkGray : globalStyles.black
                }
                onFocus={ () => updateFocused(true) }
                onBlur={ () => updateFocused(false) }
                {...props}
            />

            { props.backIcon }
        </View>
    );
}
