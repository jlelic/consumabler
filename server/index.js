const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const graphqlClient = require('graphql-client')
const fetch = require('node-fetch')

const {byEffectId: consumableEffects, byItemId: consumableItems} = require('../client/src/shared/consumables')

const wlogsEndpoint = 'https://classic.warcraftlogs.com/api/v2/client'
const apiClient = graphqlClient({
    url: wlogsEndpoint,
    headers: {
        authorization: `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5M2RlODBhZC05ODRjLTRjZGEtOTZjYy1jMGUyY2EwMzMzNjAiLCJqdGkiOiI2YjcwYjFlYTgwYTI0YTAxYmYyMzE4MjQ5OTQ0NTkwYjc3OTE0MTUwMGJiZWJiY2UzNzQwYzQxNTYxY2RmZDQ2ZjYyMmJhNDUwZTc1ZDI3NiIsImlhdCI6MTYyNTgzODc3OCwibmJmIjoxNjI1ODM4Nzc4LCJleHAiOjE2MzYyMDY3NzgsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXByaXZhdGUtcmVwb3J0cyJdfQ.egql5ak1mEJ6FrJH6pRiAha5FWEj4-PnZg3oE7-EVW4-unGRtrt-06xzr5Rjv0HDiAT1eIUiU0Z7tHpoaF-E-df3bQ5YLNAH917yl45701-Xq24ZCPP2Ka9Oa2dHt56P7OlrDI3lWkjaOHPzsW_TZOVTSZ77PwGWI61GWIWU6zSHd8v3uSGPPmSxP5gMJpbgusmPIshqusxi-RYsB1OHH8QlUhAGb5H5-FA4C_MWZO9MdpnT-vTmecJWoC8dajsaA_UKitzJN-i2dDDvIRfKDbxU0SUeJ-_uWzU5HnDWdlyp-2iSeStbNycclcuODMX6j0HlGTVH3QHXZcSPfaqA5tgMbESRP9fKl9k7nIp14_PypYxEhY58w0VfKwU7PH-oN93IP2tvPUvNWg5VmqZ7ynt4951wqzz-uySlyiIfw4ghTRG0OYzi0DU48S0g0RuN6paG4GZqpWLyHE7THDhaa8j_eM4DYgPyPbgilqHg0kpsWyy58kuvB8FadlDilFMzpwcZzqY5YZCJNGUciv8eN69bOMtl29bJDpWZG0QImA_L1crLyHl6dsvv9uy-UMWC9n1GuYJE3g5QiPia9FneEcMzvPJMC7OY2dw5UwqLx6wVHjVoa5gCTjHxMDIC5M9yWJH23Y4FHI7C752dSQXDA0EFiVZt017OmUO1crxhm9M"}`,
    },
});

const dummyData = {
    "reportCode": "cjvYQA8ya6ZDMGTw",
    "playerData": [{"name": "Narsilla", "class": "Warrior", "consumed": [], "spent": 0}, {
        "name": "Mevindaar",
        "class": "Shaman",
        "consumed": [{"itemId": 22861, "count": 1, "spent": 560147}, {
            "itemId": 12662,
            "count": 2,
            "spent": 252260
        }, {"itemId": 22832, "count": 4, "spent": 87248}],
        "spent": 899655
    }, {"name": "Azox", "class": "Mage", "consumed": [], "spent": 0}, {
        "name": "Forsythra",
        "class": "Warlock",
        "consumed": [{"itemId": 32067, "count": 2, "spent": 90962}, {"itemId": 22832, "count": 4, "spent": 87248}],
        "spent": 178210
    }, {
        "name": "Mho",
        "class": "Shaman",
        "consumed": [{"itemId": 22832, "count": 10, "spent": 218120}, {
            "itemId": 22840,
            "count": 1,
            "spent": 38280
        }, {"itemId": 22825, "count": 1, "spent": 13289}, {"itemId": 29529, "count": 6, "spent": 11149.68}],
        "spent": 280839
    }, {
        "name": "Spamlock",
        "class": "Warlock",
        "consumed": [{"itemId": 22832, "count": 2, "spent": 43624}],
        "spent": 43624
    }, {
        "name": "Rw",
        "class": "Hunter",
        "consumed": [{"itemId": 22840, "count": 4, "spent": 153120}, {
            "itemId": 22832,
            "count": 4,
            "spent": 87248
        }, {"itemId": 27498, "count": 2, "spent": 62586}],
        "spent": 302954
    }, {"name": "Squeezebox", "class": "Paladin", "consumed": [], "spent": 0}, {
        "name": "Massageman",
        "class": "Priest",
        "consumed": [{"itemId": 32067, "count": 2, "spent": 90962}, {
            "itemId": 13444,
            "count": 6,
            "spent": 41658
        }, {"itemId": 22825, "count": 3, "spent": 39867}],
        "spent": 172487
    }, {
        "name": "Adoette",
        "class": "Rogue",
        "consumed": [{"itemId": 27498, "count": 2, "spent": 62586}, {"itemId": 27503, "count": 2, "spent": 45002}],
        "spent": 107588
    }],
    "prices": {
        "9088": 21012,
        "13444": 6943,
        "13455": 27692,
        "20520": 126130,
        "22825": 13289,
        "22832": 21812,
        "22834": 54666,
        "22838": 104411,
        "22840": 38280,
        "22849": 34319,
        "22854": 684090,
        "22861": 560147,
        "27498": 31293,
        "27500": 3843,
        "27503": 22501,
        "28103": 10085,
        "29529": 92914,
        "31679": 79154,
        "32062": 17642,
        "32067": 45481
    }
}

// const code = 'JXTb4LrVfK9kdFGv'
// const code = 'wWHcD7TYyhxQBZNb'

const castConsumableIdSet = new Set(Object.keys(consumableEffects.casts).map(castId => ~~castId))
const buffConsumableIdSet = new Set(Object.keys(consumableEffects.buffs).map(buffId => ~~buffId))
const itemConsumableIdSet = new Set(
    Object.values(consumableEffects.casts).map(c => c.itemId)
        .concat(
            Object.values(consumableEffects.buffs).map(c => c.itemId)
        ))

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

const getPrices = async (server, faction) => {
    const serverSlug = `${server.replace(/([A-Z])/g, '-$1').substr(1)}-${faction}`
    console.log(`finding prices for ${serverSlug}`)
    const queryResult = await fetch(`https://api.nexushub.co/wow-classic/v1/items/${serverSlug}`)
    const json = await queryResult.json()
    const {data} = json
    const prices = {}
    data.forEach(item => {
        if (itemConsumableIdSet.has(item.itemId)) {
            prices[item.itemId] = item.marketValue
        }
    })
    return prices
}

app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/consumables_report/:code', async (req, res) => {
    // res.send(dummyData)
    // return
    const {code} = req.params

    const playerData = []
    let prices

    const casts = {}
    const buffs = {}
    const masterTable = {}
    let faction, server, guild, date, title, zone, owner

    try {
        const masterDataResult = await apiClient.query(`
{
  reportData {
    report(code: "${code}") {
      title
      zone {
        name
      }
      guild {
        name
      }
      owner {
        name
      }
      masterData {
        actors {
          name,
          id,
          type,
          subType,
          server
        }
      }
      startTime
      endTime
    }
  }
}
        `)

        const {masterData, startTime, endTime, guild: guildInfo, zone: {name: zoneName}, title: reportTitle, owner: {name: ownerName}} = masterDataResult.data.reportData.report
        guild = guildInfo && guildInfo.name
        zone = zoneName
        title = reportTitle
        date = startTime
        owner = ownerName
        masterData.actors.forEach(({id, name, type, subType, server: serverName}) => {
            masterTable[id] = {name, type, class: subType}
            casts[id] = {}
            if (serverName) {
                server = serverName
            }
        })
        const duration = endTime - startTime
        let queryStartTime = 0
        let prevQueryStartTime = 0
        let counter = 1
        let events = []
        let progress = 0
        do {

            progress = Math.round((queryStartTime) / duration * 1000) / 10
            console.log(`Making request ${counter} - ${progress}`)
            console.log(`${Math.round(queryStartTime / 60000)} minutes in`)

            const eventsResult = await apiClient.query(`
{
  reportData {
    report(code: "${code}") {
       events(filterExpression: "type = 'cast' and ability.id in (${Object.keys(consumableEffects.casts).join(',')}) or type = 'combatantinfo' or  type = 'death' or (type = 'applybuff' or type='removebuff') and ability.id in (${Object.keys(consumableEffects.buffs).join(',')})", startTime: ${queryStartTime}, endTime: 999999999999) {
        nextPageTimestamp
        data
      }
    }
  }
}
`)
            const {nextPageTimestamp, data} = eventsResult.data.reportData.report.events
            prevQueryStartTime = queryStartTime
            console.log(nextPageTimestamp, queryStartTime)
            queryStartTime = Math.max(nextPageTimestamp, queryStartTime)
            events = data
            events.forEach(async (event) => {
                // console.log(event)
                if (event.type === 'cast') {
                    const castId = event.abilityGameID;
                    if (event.sourceID === 7 && event.abilityGameID === 28499) {
                        console.log('Mho used Mana pot')
                    }
                    if (castConsumableIdSet.has(castId)) {
                        casts[event.sourceID][castId] = casts[event.sourceID][castId] || 0
                        casts[event.sourceID][castId]++
                    }
                } else if (event.type === 'combatantinfo') {
                    const {auras, faction: playerFaction, gear, sourceID: playerId, timestamp} = event
                    if (playerFaction === 1) {
                        faction = 'alliance'
                    } else if (playerFaction === 0) {
                        faction = 'horde'
                    }
                    buffs[playerId] = buffs[playerId] || {}
                    const playerBuffs = buffs[playerId]
                    auras.forEach(aura => {
                        const buffId = aura.ability
                        if (buffConsumableIdSet.has(buffId)) {
                            const buffInfo = consumableEffects.buffs[buffId]
                            playerBuffs[buffId] = playerBuffs[buffId] || {
                                count: 0,
                                startTime: 0,
                                itemId: buffInfo.itemId,
                                active: false
                            }
                            const buff = playerBuffs[buffId]
                            if (!buff.active || timestamp - buff.startTime > buffInfo.duration * 60 * 1000) {
                                buff.count++
                                buff.startTime = timestamp
                                buff.active = true
                            }
                        }
                    })
                } else if (event.type === 'applybuff') {
                    const {abilityGameID: buffId, sourceID: playerId, timestamp} = event
                    buffs[playerId] = buffs[playerId] || {}
                    const playerBuffs = buffs[playerId]
                    const buffInfo = consumableEffects.buffs[buffId]
                    if (playerBuffs[buffId]) {
                        playerBuffs[buffId].active = true
                        playerBuffs[buffId].startTime = timestamp
                        playerBuffs[buffId].count++
                    } else {
                        playerBuffs[buffId] = {
                            count: 1,
                            startTime: timestamp,
                            itemId: buffInfo.itemId,
                            active: true
                        }
                    }
                } else if (event.type === 'removebuff') {
                    const {abilityGameID: buffId, sourceID: playerId} = event
                    buffs[playerId] = buffs[playerId] || {}
                    const buff = buffs[playerId][buffId]
                    if (buff) {
                        if (buff.active) {
                            buff.active = false
                        } else {
                            buff.count++
                        }
                    } else {
                        buffs[playerId][buffId] = {
                            active: false,
                            startTime: 0,
                            count: 1
                        }
                    }
                } else if (event.type === 'death') {
                    const {targetID: playerId} = event
                    const playerBuffs = buffs[playerId]
                    if (!playerBuffs) {
                        return
                    }
                    Object.keys(playerBuffs).forEach(buffId => {
                        if (consumableEffects.buffs[buffId].persistsDeath) {
                            return
                        }
                        playerBuffs[buffId].active = false
                    })
                } else {
                    console.log('EVENT')
                    console.log(event)
                }
            })
            counter++
            console.log(`${prevQueryStartTime} < ${queryStartTime}`)
        } while (prevQueryStartTime < queryStartTime)
    } catch (e) {
        console.log(e)
        res.send(500)
    }

    prices = await getPrices(server, faction)

    Object.keys(masterTable).forEach(playerId => {
        if (masterTable[playerId].type != 'Player' || masterTable[playerId].class === 'Unknown') {
            return
        }
        const consumed = []
        let spent = 0
        const spentOn = {}
        Object.entries(casts[playerId]).forEach(([castId, usedNum]) => {
            const consumable = consumableEffects.casts[castId]
            const {itemId} = consumable

            spentOn[itemId] = prices[consumable.priceBy || itemId] * usedNum / (consumable.charges || 1)
            spent += spentOn[itemId]
            consumed.push({itemId, count: usedNum, spent: spentOn[itemId]})
            console.log(`${masterTable[playerId].name} spent ${spentOn[itemId]} on ${consumable.name}`)
        })
        try {
            Object.entries(buffs[playerId]).forEach(([buffId, buffData]) => {
                const consumable = consumableEffects.buffs[buffId]
                const {itemId} = consumable
                spentOn[itemId] = prices[consumable.priceBy || itemId] * buffData.count / (consumable.charges || 1)
                spent += spentOn[itemId]
                consumed.push({itemId, count: buffData.count, spent: spentOn[itemId]})
                console.log(`${masterTable[playerId].name} spent ${spentOn[itemId]} on ${consumable.name}`)
            })
        } catch (e) {
            console.log(e)
        }

        consumed.sort((a, b) => spentOn[b.itemId] - spentOn[a.itemId])
        const playerRecord = {
            name: masterTable[playerId].name,
            class: masterTable[playerId].class,
            consumed,
            spent: Math.round(spent)
        }

        playerData.push(playerRecord)
    })
    // console.log(playerData)
    console.log('done')

    console.log(faction)
    console.log(server)
    res.send({reportCode: code, faction, server, owner, guild, date, title, zone, playerData, prices})
})

