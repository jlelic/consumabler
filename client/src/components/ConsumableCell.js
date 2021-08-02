import React, {useRef, useState} from 'react'
import WowheadLink from "./WowheadLink";
import Consumables from '../shared/consumables';
import DownArrow from '../images/arrow-down.svg'

const lineHeight = 60

export default function ConsumableCell({value, prices}) {
    const [expanded, expand] = useState(false)
    const [detailsShown, showDetails] = useState(false)
    const [preparedToShow, prepareToShow] = useState(false)
    const [positions, setPositions] = useState([])
    const wrapperRef = useRef()

    const clickHandler = () => {
        const row = wrapperRef.current.parentElement.parentElement.parentElement

        if (expanded) {
            showDetails(false)
            row.style.height = '0px'
            wrapperRef.current.parentElement.style.height = '50px';

            [...wrapperRef.current.children].map((el, i) => {
                el.style.left = `${positions[i].left}px`
                el.style.top = `${positions[i].top}px`
                // setTimeout(() => {
                //     el.style.top = `${i * lineHeight}px`
                //     el.style.left = `20px`
                // }, 20)
                setTimeout(() => {
                    el.style.position = 'relative'
                    el.style.left = ``
                    el.style.top = ``
                    prepareToShow(false)
                }, 500)
                // setTimeout(() => {
                //     showDetails(true)
                //     setPositions(newPositions)
                // }, 200)
            })
        } else {
            const newPositions = [];
            setTimeout(() => {
                [...wrapperRef.current.children].map(el => {
                    newPositions.push({left: el.offsetLeft, top: el.offsetTop})
                });
                [...wrapperRef.current.children].map((el, i) => {
                    el.style.left = `${newPositions[i].left}px`
                    el.style.top = `${newPositions[i].top}px`
                    el.style.position = 'absolute'
                    setTimeout(() => {
                        el.style.top = `${i * lineHeight}px`
                        el.style.left = `20px`
                    }, 20)
                    setTimeout(() => {
                        prepareToShow(true)
                    }, 200)
                    setTimeout(() => {
                        showDetails(true)
                        setPositions(newPositions)
                    }, 200)
                })
            }, 200)

            row.style.height = `${value.length * lineHeight}px`
            wrapperRef.current.parentElement.style.height = `${value.length * lineHeight}px`
        }


        expand(!expanded)
    }

    return <div
        className={`consumable-cell ${expanded ? 'expanded' : ''} ${detailsShown ? 'details-shown' : ''} ${preparedToShow ? 'prepared-to-show' : ''}`}
        onClick={clickHandler}
    >
        <img className="expander-arrow" src={DownArrow}/>
        <span ref={wrapperRef}>
            {
                value.map(consumable => {
                    return <span
                        className="consumable consumable-brief"
                    >
                        <span className="consumable-count"
                              style={{opacity: expanded ? 0 : 1}}> {consumable.count}x</span>
                        <WowheadLink itemId={consumable.itemId}/>
               </span>

                })
            }

        </span>
        {
            expanded && value.map((consumable, i) => {
                console.log(`${i * lineHeight}px`)
                const consumableInfo = Consumables.byItemId[consumable.itemId]
                const price = prices[consumableInfo.priceBy || consumable.itemId]
                const totalPrice = consumable.spent
                return <>
                    <div className='consumable-detail' style={{top: `${i * lineHeight + 8}px`}}>
                        <div className='consumable-detail-price'>
                            {price > 10000 && <span className="money-gold">{Math.floor(price / 10000)}</span>}
                            <span className="money-silver">{Math.floor((price % 10000) / 100)}</span>
                            {/*<span className="money-copper">{Math.floor(price%100)}</span>*/}
                        </div>
                        <div className='consumable-detail-count'>
                            x {consumable.count} {consumableInfo.charges && <span className="consumable-detail-charges"> / {consumableInfo.charges}</span>} =
                        </div>
                        <div className='consumable-detail-total'>
                            {totalPrice > 10000 && <span className="money-gold">{Math.floor(totalPrice / 10000)}</span>}
                            <span className="money-silver">{Math.floor((totalPrice % 10000) / 100)}</span>
                            {/*<span className="money-copper">{Math.floor(price%100)}</span>*/}
                        </div>
                    </div>
                </>

            })
        }
    </div>
}
