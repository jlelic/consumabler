import {useState} from 'react'
import './App.css';
import LoadLogForm from './components/LoadLogForm'
import PlayerTable from './components/PlayerTable'
import Footer from "./components/Footer";
import ReportInfo from "./components/ReportInfo";
import NoData from "./components/NoData";
import Disclaimer from "./components/Disclaimer";

function App() {
    const [data, loadData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    return (
        <div className="App">
            <div className="container">
                <div className='header'>
                    <div className='alpha'>alpha</div>
                    <div className='expansion tbc'>TBC</div>
                    <LoadLogForm loadData={loadData} setLoading={setLoading}/>
                </div>
                {!data && !isLoading && <NoData/>}
                <Disclaimer/>
                {data ? <>
                    <ReportInfo data={data}/>
                    <PlayerTable data={data}/>
                </>
                    :
                    (
                        isLoading && <span>Please Wait</span>
                    )}
                <Footer/>
            </div>
        </div>
    );
}

export default App;
