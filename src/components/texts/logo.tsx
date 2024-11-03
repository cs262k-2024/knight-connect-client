import { Text } from 'react-native';

import globalStyles from '@/globals/globalStyles';

export default function Logo(props: { fontSize?: number }) {
    return (
        <Text
            style={ {
                color: globalStyles.white,
                fontSize: props.fontSize || 40,
                letterSpacing: 2,
                fontFamily: 'PlayfairItalic',
            } }
        >
            knight connect
        </Text>
    );
}
