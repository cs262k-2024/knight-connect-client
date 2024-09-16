import { ScrollView } from 'react-native';

import classes from './styles.module.css';

export default function HelloWorld() {
    return (
        <div className={ classes.container }>
            <ScrollView>
                <h1>Hello World!</h1>

                <h3>- Keith's Favorite Team</h3>
            </ScrollView>
        </div>
    );
}
