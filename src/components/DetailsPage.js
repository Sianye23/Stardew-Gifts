import { useLocation } from 'react-router-dom';

export const DetailsPage = () => {
    const information = useLocation().state

    const gift = information.Gift;

    function clean(villagers) {
        return villagers.split('-').join(', ');
    }

    const love = clean(information.Love);
    const like = clean(information.Like);
    const neutral = clean(information.Neutral);
    const dislike = clean(information.Dislike);
    const hate = clean(information.Hate);

    return (
        <div>
            <h1>{gift}</h1>
            <p>Love: {love}</p>
            <p>Like: {like}</p>
            <p>Neutral: {neutral}</p>
            <p>Dislike: {dislike}</p>
            <p>Hate: {hate}</p>
        </div>
    );
};
