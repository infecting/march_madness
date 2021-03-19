import config from '../bracket.json'

type IProps = {
    round: string;
    region: string;
}

export default function Rounds({round, region}: IProps) {
    return (
        <div className={round}>
            {config.bracket[region][round].map((games) => (
                games.map((game) => (
                    <div className="game" key={game}>
                        <span>{game} </span>   
                        <span>{config.teams[region][game -1].name}</span>
                    </div>
                ))
            ))}
        </div>
    )
}


