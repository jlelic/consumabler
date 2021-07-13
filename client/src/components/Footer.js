import './Footer.css'
import NexusHub from '../images/nexushub.svg'
import Wowhead from '../images/wowhead.webp'
import WarcraftLogs from '../images/warcraftlogs.png'

export default () =>
    <div className='footer'>
        <div className='powered-by'>
            Powered by
            <a href='https://classic.warcraftlogs.com/' target='_blank'><img className='warcraftlogs' src={WarcraftLogs}/></a>
            <a href='https://www.wowhead.com/' target='_blank'><img className='wowhead' src={Wowhead}/></a>
            <a href='https://nexushub.co/' target='_blank'><img className='nexushub' src={NexusHub}/></a>
        </div>
        <div className='made-by'>
            Made by <a href='https://discord.gg/fevQq3bs9h' target='_blank'><img className='tempus'></img></a> {'<'}Tempus{'>'} Veggie - Zandalar Tribe
        </div>
    </div>
