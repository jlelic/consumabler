import {useState, useMemo} from 'react'
import './Disclaimer.css'
import NexusHub from '../images/nexushub.svg'

export default () => {
    const [closed, close] = useState(false)
    const [showingList, showList] = useState(false)

    if (closed) {
        return <></>
    }

    return <div className='disclaimer'>
        <div className='close-button' onClick={() => close(true)}/>
        <strong>Disclaimer:</strong> The numbers presented on this website are just approximations and don't necessarily reflect
        the reality. Do not use them to judge your guildmates.
        <br/>
        <br/>
        There are several known
        issues:
        {/*:. <span className='read-more' onClick={() => showList(!showingList)}>{showingList ? 'Hide list' : 'Read more'}</span>*/}
        <div>
            <ul>
                <li>
                    Long duration buffs like those from flasks, elixirs, weapon oils and stones can't be reliably
                    tracked on trash fights.
                </li>
                <li>
                    <a href="https://tbc.wowhead.com/item=13512/flask-of-supreme-power" data-wh-icon-size="tiny"
                       style={{color: 'black!important'}}>Flask of Supreme Power</a>, <a
                    href='https://tbc.wowhead.com/item=22831/elixir-of-major-agility' data-wh-icon-size="tiny"
                    style={{color: 'black!important'}}>Elixir of Major Agility</a> and <a
                    href='https://tbc.wowhead.com/item=9088/gift-of-arthas' data-wh-icon-size="tiny"
                    style={{color: 'black!important'}}>Gift of Arthas</a> don't
                    show up even on the boss fights (although in some special occasions we can still detect them).
                </li>
                <li>
                    Different consumables can have the same effect and therefore it's not possible to determined from
                    the logs which consumable was actually used. This issue is most notably visible on the food buffs.
                </li>
                <li>
                    Demonic Runes are BoP and cannot be sold on auction house. For estimating their value we're using
                    the price of Dark Runes instead.
                </li>
                <li>
                    Prices are loaded from <a href='https://nexushub.co/'>NexusHub</a> when you load the report on this
                    page and can differ from the prices at the time the report was created.
                </li>
            </ul>
            We're still missing a bunch of consumables in our database. If there's a consumable you're using that shows
            up on <a href='https://classic.warcraftlogs.com/'>Warcraft Logs</a> but is missing here, don't hesitate to
            contact me on Discord - <strong>Jožo#9796</strong>
        </div>
    </div>
}
