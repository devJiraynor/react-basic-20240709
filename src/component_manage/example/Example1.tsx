export function getImageUrl(imageId: string, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}

interface Props {
    name: string;
    imageId: string;
    profession: string;
    awardsCount: number;
    awards: string;
    discovered: string;
}

function Profile({ name, imageId, profession, awardsCount, awards, discovered }: Props) {

    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awardsCount} </b>
                    ({awards})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    );
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>

            <Profile 
                name="Maria Skłodowska-Curie" 
                imageId="szV5sdG" 
                profession="physicist and chemist"
                awardsCount={4}
                awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
                discovered="polonium (chemical element)"
            />

            <section className="profile">
                <h2>Maria Skłodowska-Curie</h2>
                <img
                    className="avatar"
                    src={getImageUrl('szV5sdG')}
                    alt="Maria Skłodowska-Curie"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        physicist and chemist
                    </li>
                    <li>
                        <b>Awards: 4 </b>
                        (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
                    </li>
                    <li>
                        <b>Discovered: </b>
                        polonium (chemical element)
                    </li>
                </ul>
            </section>

            <section className="profile">
                <h2>Katsuko Saruhashi</h2>
                <img
                    className="avatar"
                    src={getImageUrl('YfeOqp2')}
                    alt="Katsuko Saruhashi"
                    width={70}
                    height={70}
                />
                <ul>
                    <li>
                        <b>Profession: </b>
                        geochemist
                    </li>
                    <li>
                        <b>Awards: 2 </b>
                        (Miyake Prize for geochemistry, Tanaka Prize)
                    </li>
                    <li>
                        <b>Discovered: </b>
                        a method for measuring carbon dioxide in seawater
                    </li>
                </ul>
            </section>

        </div>
    );
}