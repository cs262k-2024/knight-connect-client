import { Link } from 'expo-router';

import classes from './notFound.module.css';

export default function NotFoundScreen() {
    return (
        <div className={ classes.container }>
            <h1>This page doesn't exist</h1>

            <Link href="/" className={ classes.link }>
                Go back home!
            </Link>
        </div>
    );
}
