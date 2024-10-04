import { MutableRefObject, ReactElement, useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import globalStyles from '@/globals/globalStyles';

type InputProps = {
    placeholder: string;
    frontIcon?: ReactElement;
    backIcon?: ReactElement;
    ref?: MutableRefObject<TextInput>;
    onChangeText?: (e: string) => void;
    value?: string;
    secureTextEntry?: boolean;
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
            borderRadius: 5,
            backgroundColor: globalStyles.white
        },
        input: {
            backgroundColor: 'none',
            borderRadius: 5,
            padding: 10
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
                ref={ props.ref }
                {...props}
            />

            { props.backIcon }
        </View>
    );
}
