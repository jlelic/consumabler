import React, {useState} from 'react'
import {useTable, useSortBy} from 'react-table'
import {motion, AnimatePresence} from 'framer-motion'


import ArrowDown from '../images/arrow-down.svg'
import ArrowUp from '../images/arrow-up.svg'
import './Table.css'
import './PlayerTable.css'
import './SpecIcons.css'

import ConsumableCell from "./ConsumableCell";
import {roleInfo} from "../Utils";


export default function PlayerTable({data}) {
    const [expandedRowId, expand] = useState(null)

    const datax = React.useMemo(
        () => [
            {
                "name": "Asherah",
                "class": "Druid",
                "consumed": [
                    {
                        "itemId": 27500,
                        "count": 3
                    },
                    {
                        "itemId": 27503,
                        "count": 3
                    },
                    {
                        "itemId": 13455,
                        "count": 2
                    },
                    {
                        "itemId": 27498,
                        "count": 3
                    }
                ],
                "spent": 237283
            },
            {
                "name": "Adoette",
                "class": "Rogue",
                "consumed": [
                    {
                        "itemId": 27503,
                        "count": 3
                    },
                    {
                        "itemId": 27498,
                        "count": 3
                    },
                    {
                        "itemId": 22838,
                        "count": 1
                    }
                ],
                "spent": 280397
            },
            {
                "name": "Entz",
                "class": "Shaman",
                "consumed": [
                    {
                        "itemId": 28103,
                        "count": 1
                    },
                    {
                        "itemId": 22832,
                        "count": 1
                    },
                    {
                        "itemId": 22840,
                        "count": 1
                    },
                    {
                        "itemId": 29529,
                        "count": 6
                    },
                    {
                        "itemId": 22861,
                        "count": 1
                    }
                ],
                "spent": 660587
            },
            {
                "name": "Borgrîm",
                "class": "Warrior",
                "consumed": [
                    {
                        "itemId": 32062,
                        "count": 1
                    }
                ],
                "spent": 19457
            },
            {
                "name": "Mevindaar",
                "class": "Shaman",
                "consumed": [
                    {
                        "itemId": 12662,
                        "count": 1
                    },
                    {
                        "itemId": 28103,
                        "count": 3
                    },
                    {
                        "itemId": 22832,
                        "count": 3
                    },
                    {
                        "itemId": 22840,
                        "count": 3
                    },
                    {
                        "itemId": 29529,
                        "count": 3
                    }
                ],
                "spent": 347107
            },
            {
                "name": "Karrsha",
                "class": "Shaman",
                "consumed": [
                    {
                        "itemId": 29529,
                        "count": 3
                    },
                    {
                        "itemId": 22854,
                        "count": 1
                    }
                ],
                "spent": 716941
            },
            {
                "name": "Pexu",
                "class": "Druid",
                "consumed": [
                    {
                        "itemId": 32067,
                        "count": 1
                    },
                    {
                        "itemId": 28491,
                        "count": 3
                    }
                ],
                "spent": 538379
            },
            {
                "name": "Kiril",
                "class": "Priest",
                "consumed": [
                    {
                        "itemId": 22832,
                        "count": 3
                    },
                    {
                        "itemId": 22840,
                        "count": 3
                    },
                    {
                        "itemId": 28491,
                        "count": 3
                    }
                ],
                "spent": 667203
            },
            {
                "name": "Viveq",
                "class": "Warlock",
                "consumed": [
                    {
                        "itemId": 22832,
                        "count": 4
                    },
                    {
                        "itemId": 32067,
                        "count": 3
                    }
                ],
                "spent": 232711
            },
            {
                "name": "Hunterjävel",
                "class": "Hunter",
                "consumed": [
                    {
                        "itemId": 22832,
                        "count": 3
                    },
                    {
                        "itemId": 22840,
                        "count": 4
                    }
                ],
                "spent": 213473
            },
            {
                "name": "Fyllmig",
                "class": "Paladin",
                "consumed": [
                    {
                        "itemId": 12662,
                        "count": 1
                    },
                    {
                        "itemId": 22832,
                        "count": 4
                    },
                    {
                        "itemId": 32067,
                        "count": 2
                    },
                    {
                        "itemId": 28491,
                        "count": 2
                    }
                ],
                "spent": 646359
            },
            {
                "name": "Narsilla",
                "class": "Warrior",
                "consumed": [
                    {
                        "itemId": 32062,
                        "count": 3
                    },
                    {
                        "itemId": 22849,
                        "count": 2
                    }
                ],
                "spent": 129355
            },
            {
                "name": "Shalgreth",
                "class": "Warlock",
                "consumed": [
                    {
                        "itemId": 13444,
                        "count": 1
                    },
                    {
                        "itemId": 22832,
                        "count": 2
                    }
                ],
                "spent": 51495
            },
            {
                "name": "Niksi",
                "class": "Priest",
                "consumed": [
                    {
                        "itemId": 28103,
                        "count": 2
                    }
                ],
                "spent": 19746
            },
            {
                "name": "Forsythra",
                "class": "Warlock",
                "consumed": [
                    {
                        "itemId": 28103,
                        "count": 2
                    },
                    {
                        "itemId": 22832,
                        "count": 3
                    }
                ],
                "spent": 86403
            },
            {
                "name": "Roggán",
                "class": "Rogue",
                "consumed": [
                    {
                        "itemId": 32062,
                        "count": 1
                    }
                ],
                "spent": 19457
            },
            {
                "name": "Deeze",
                "class": "Warrior",
                "consumed": [
                    {
                        "itemId": 27500,
                        "count": 1
                    },
                    {
                        "itemId": 32062,
                        "count": 1
                    },
                    {
                        "itemId": 27503,
                        "count": 1
                    },
                    {
                        "itemId": 27498,
                        "count": 1
                    }
                ],
                "spent": 80922
            },
            {
                "name": "Rw",
                "class": "Hunter",
                "consumed": [
                    {
                        "itemId": 22832,
                        "count": 2
                    },
                    {
                        "itemId": 22840,
                        "count": 4
                    }
                ],
                "spent": 191254
            },
            {
                "name": "Arathán",
                "class": "Shaman",
                "consumed": [
                    {
                        "itemId": 22832,
                        "count": 1
                    },
                    {
                        "itemId": 32067,
                        "count": 3
                    },
                    {
                        "itemId": 28491,
                        "count": 3
                    }
                ],
                "spent": 656488
            },
            {
                "name": "Willbut",
                "class": "Mage",
                "consumed": [
                    {
                        "itemId": 28103,
                        "count": 3
                    }
                ],
                "spent": 29619
            },
            {
                "name": "Xiane",
                "class": "Paladin",
                "consumed": [
                    {
                        "itemId": 22832,
                        "count": 4
                    },
                    {
                        "itemId": 22834,
                        "count": 1
                    },
                    {
                        "itemId": 28491,
                        "count": 1
                    }
                ],
                "spent": 309425
            },
            {
                "name": "Crim",
                "class": "Rogue",
                "consumed": [
                    {
                        "itemId": 31679,
                        "count": 2
                    },
                    {
                        "itemId": 22838,
                        "count": 2
                    }
                ],
                "spent": 377708
            },
            {
                "name": "Gienah",
                "class": "Paladin",
                "consumed": [
                    {
                        "itemId": 22832,
                        "count": 1
                    },
                    {
                        "itemId": 27503,
                        "count": 2
                    },
                    {
                        "itemId": 27498,
                        "count": 2
                    },
                    {
                        "itemId": 22838,
                        "count": 3
                    },
                    {
                        "itemId": 20520,
                        "count": 2
                    },
                    {
                        "itemId": 22854,
                        "count": 1
                    }
                ],
                "spent": 1442548
            },
            {
                "name": "Tictac",
                "class": "Mage",
                "consumed": [
                    {
                        "itemId": 32062,
                        "count": 1
                    }
                ],
                "spent": 19457
            },
            {
                "name": "Saviq",
                "class": "Druid",
                "consumed": [
                    {
                        "itemId": 28103,
                        "count": 2
                    },
                    {
                        "itemId": 22832,
                        "count": 3
                    },
                    {
                        "itemId": 32067,
                        "count": 2
                    }
                ],
                "spent": 182293
            }
        ],
        []
    )

    const roleColSorter = React.useMemo(() => (rowA, rowB, id, desc) => {
        if (!rowA || !rowB) {
            return 0
        }
        const roleDiff = roleInfo[rowB.original.icon].order - roleInfo[rowA.original.icon].order
        if (roleDiff === 0) {
            return rowA.original.name.localeCompare(rowB.original.name)
        }
        return roleDiff
    })

    const consumableColSorter = React.useMemo(() => (rowA, rowB, id, desc) => {
        if (!rowA || !rowB) {
            return 0
        }
        return rowA.original[id].length - rowB.original[id].length
    })

    const [reportCode, setReportCode] = useState(null)

    if (reportCode !== data.reportCode) {
        setReportCode(data.reportCode)
    }

    const columns = React.useMemo(
        () => [
            {
                Header: 'Role',
                accessor: 'icon',
                Cell: ({value}) => {
                    console.log(value)
                    console.log(roleInfo[value])
                    debugger
                    return <div><img className={`role-icon role-${value}`} title={roleInfo[value].note}/></div>
                },
                sortType: roleColSorter,
            },
            {
                Header: 'Name',
                accessor: 'name',
                Cell: ({value, row}) => {
                    return <div className={`name-cell class-name-${row.original.class}`}>
                        {value}
                    </div>
                }
            },
            {
                Header: 'Consumables',
                accessor: 'consumed',
                Cell: ({value, row}) => {
                    return <ConsumableCell row={row} expandedRowId={expandedRowId} value={value} prices={data.prices}/>
                },
                sortType: consumableColSorter,
            },
            {
                Header: 'Spent',
                accessor: 'spent',
                Cell: ({value}) => <span className="money-gold">{Math.round(value / 10000)}</span>
            },
        ],
        [reportCode]
    )

    const playerData = React.useMemo(
        () => data.playerData,
        [reportCode]
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data: playerData}, useSortBy)


    return (
        <table {...getTableProps()} className="player-table">
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <motion.th
                            {...column.getHeaderProps(column.getSortByToggleProps())}

                        >
                            {column.render('Header')}
                            <span>
                                {column.isSorted
                                    ? column.isSortedDesc
                                        ? <img className='sorter-arrow' src={ArrowDown}/>
                                        : <img className='sorter-arrow' src={ArrowUp}/>
                                    : ''}
                              </span>
                        </motion.th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            <AnimatePresence>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <motion.tr {...row.getRowProps()} onClick={() => {
                            expand(row.id)
                        }}>
                            {row.cells.map(cell => {
                                return (
                                    <motion.td
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </motion.td>
                                )
                            })}
                        </motion.tr>
                    )
                })}
            </AnimatePresence>
            </tbody>
        </table>
    )
}
