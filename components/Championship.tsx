import config from '../bracket.json'

type IProps = {
    round: string;
}

export default function Rounds({round}: IProps) {
    return (
        <div className={round}>
            {config.bracket.final_games[round].map((games) => (
                games.map((game) => (
                    <div className="game" key={game}>
                        <span>{game.team}</span>   
                        <span>{config.teams[game.region][game.team -1].name}</span>
                    </div>
                ))
            ))}
        </div>
    )
}
