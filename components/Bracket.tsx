import Rounds from './Rounds'
import Championship from './Championship'

export default function Bracket() {
    return (
        <div className="bracker">
            <div className="64-wrapper"> 
                <Rounds region="west" round="six_four"/>
                <Rounds region="east" round="six_four"/>
                <Rounds region="south" round="six_four"/>
                <Rounds region="midwest" round="six_four"/>
            </div>
            <div className="32-wrapper">
                <Rounds region="west" round="three_two"/>
                <Rounds region="east" round="three_two"/>
                <Rounds region="south" round="three_two"/>
                <Rounds region="midwest" round="three_two"/>
            </div>
            <div className="16-wrapper">
                <Rounds region="west" round="one_six"/>
                <Rounds region="east" round="one_six"/>
                <Rounds region="south" round="one_six"/>
                <Rounds region="midwest" round="one_six"/>
            </div>
            <div className="8-wrapper">
                <Rounds region="west" round="eight"/>
                <Rounds region="east" round="eight"/>
                <Rounds region="south" round="eight"/>
                <Rounds region="midwest" round="eight"/>
            </div>
            <div className="4-wrapper">
                <Championship round="four"/>
            </div>
            <div className="championship-wrapper">
                <Championship round="championship"/>
            </div>
        </div>
        
    )
}