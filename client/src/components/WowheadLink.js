import React from 'react'

export default class WowheadLink extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false
    }

    render() {
        return <a href={`http://tbc.wowhead.com/item=${this.props.itemId}`} target="_blank"/>
    }
}
