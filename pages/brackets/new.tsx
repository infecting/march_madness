import {useState} from 'react'
import config from '../../bracket.json'
import { helper } from '../../utils'

export default function New() {
    const [west, setWest] = useState<Array<Array<number>>>([[],[],[],[]])
    const [east, setEast] = useState<Array<Array<number>>>([[],[],[],[]])
    const [south, setSouth] = useState<Array<Array<number>>>([[],[],[],[]])
    const [midwest, setMidwest] = useState<Array<Array<number>>>([[],[],[],[]])

    let changeHandle = (e: any, i: number, g: string) => {
        switch(g) {
            case "west":
                let copy = [...west]
                let wes: number[][] = helper(e, i, copy)
                console.log(wes)
                setWest(wes)
            case "east":
                copy = [...east]
                let eas: number[][] = helper(e, i, copy)
                console.log(eas)
                setEast(eas)
            case "south":
                copy = [...south]
                let sout: number[][] = helper(e, i, copy)
                console.log(eas)
                setSouth(sout)
            case "midwest":
                copy = [...south]
                let midwes: number[][] = helper(e, i, copy)
                console.log(midwes)
                setMidwest(midwes)
                
        }
    }

    return (
        <div>
            <form>
            <p>Please select your preferred contact method:</p>
            <h1>West</h1>
            {config.bracket.west.six_four.map((games, i) => (
                <fieldset>
                    {games.map((game, g) => (
                        <div className="game" onChange={(e) => changeHandle(e, i, "west")} key={game}>
                            <span>{game} </span>   
                            <input type="radio" name={i.toString()} id={g.toString()} value={game}/>
                            <span>{config.teams.west[game-1].name}</span>
                        </div>
                    ))}
                </fieldset>
            ))}
            <h1>East</h1>
            {config.bracket.east.six_four.map((games, i) => (
                <fieldset>
                    {games.map((game, g) => (
                        <div className="game" onChange={(e) => changeHandle(e, i, "east")} key={game}>
                            <span>{game} </span>   
                            <input type="radio" name={i.toString()} id={g.toString()} value={game}/>
                            <span>{config.teams.east[game-1].name}</span>
                        </div>
                    ))}
                </fieldset>
            ))}
            <h1>South</h1>
            {config.bracket.south.six_four.map((games, i) => (
                <fieldset>
                    {games.map((game, g) => (
                        <div className="game" onChange={(e) => changeHandle(e, i, "south")} key={game}>
                            <span>{game} </span>   
                            <input type="radio" name={i.toString()} id={g.toString()} value={game}/>
                            <span>{config.teams.south[game-1].name}</span>
                        </div>
                    ))}
                </fieldset>
            ))}
            <h1>Midwest</h1>
            {config.bracket.midwest.six_four.map((games, i) => (
                <fieldset>
                    {games.map((game, g) => (
                        <div className="game" onChange={(e) => changeHandle(e, i, "midwest")} key={game}>
                            <span>{game} </span>   
                            <input type="radio" name={i.toString()} id={g.toString()} value={game}/>
                            <span>{config.teams.midwest[game-1].name}</span>
                        </div>
                    ))}
                </fieldset>
            ))}
            </form>
        </div>
    )
}
