// ! Temporary, get these from backend later
export const CATEGORIES = [
    '🎤 Music',
    '🏫 Education',
    '🏈 Sports',
    '🏘️ Residence Life',
    '⛪️ Chapel',
    '👫 Social Activities',
    '🎨 Arts & Culture',
    '🧬 Science & Tech',
    '🗓️ Other',
    '🩺 Health & Fitness',
    '💼 Career & Business',
    '🎮 Gaming',
    '🎬 Film & Media',
    '🍔 Food & Drink',
];

export const EVENTS: CalvinEvent[] = [
    {
        id: '1',
        name: 'Maroon & Gold Day',
        date: (() => {
            const now = new Date();
            now.setMinutes(now.getMinutes() + 32);
            return now;
        })(),
        location: 'Calvin University',
        description: 'Gold',
        type: 'education',
    },
    {
        id: '2',
        name: 'Cornhole Tournament',
        date: (() => {
            const now = new Date();
            now.setMinutes(now.getMinutes() + 35);
            return now;
        })(),
        location: 'Calvin University',
        description: 'Gold',
        type: 'sports',
        price: 15,
    },
];
