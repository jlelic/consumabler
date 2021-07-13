import React from 'react'

import './LoadLogForm.css'

class LoadLogForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            error: null,
            loading: false
        }
        this.inputRef = React.createRef()

        window.onpopstate = (e) => {
            if (e.state) {
                this.loadReportFromUrl()
            }
        }
    }

    componentDidMount = () => {
        this.loadReportFromUrl()
    }

    loadReportFromUrl = () => {
        const code = new URLSearchParams(window.location.search).get('report')
        if (code) {
            this.inputRef.current.value = code
            this.onSubmit()
        }
    }

    onSubmit = async (e) => {
        if (e) {
            e.preventDefault()
        }
        const {loadData, setLoading} = this.props
        this.setState({loading: true})
        setLoading(true)
        let code = this.inputRef.current.value
        code = code.split('#')[0]
        if (code[code.length - 1] == '/') {
            code = code.slice(0, -1)
        }
        const split = code.split('/')
        code = split[split.length - 1]
        this.inputRef.current.value = code
        try {
            const response = await fetch(`/consumables_report/${code}`);
            const body = await response.json();

            if (response.status !== 200) {
                throw Error(body.message)
            }
            this.setState({error: null, loading: false})
            setLoading(false)
            loadData(body)
            window.history.pushState({code: body.reportCode}, '', `?report=${body.reportCode}`)
            setTimeout(() => window.$WowheadPower.refreshLinks(), 100)
        } catch (e) {
            console.error(e)
            this.setState({error: 'Error occured', loading: false})
            setLoading(false)
        }
    }

    render = () => {
        return (
            <form onSubmit={this.onSubmit} className="loadLogForm">
                <div>
                    <div className='enter-code'>
                        <label>
                            Enter log code or URL:
                        </label>
                    </div>
                    <input type="text" name="log id" ref={this.inputRef}/>
                    <input className={`button ${this.state.loading && 'loading'}`} type="submit"
                           disabled={this.state.loading}
                           value={this.state.loading ? "Loading..." : "Load"}/>
                </div>
                <div className="error">
                    {this.state.error}
                </div>
            </form>
        );
    }
}

export default LoadLogForm;
