const byEffectId = require('./consumables-data.json')

const byItemId = {};
Object.keys(byEffectId.buffs).forEach(buffId => {
    const buff = byEffectId.buffs[buffId]
    byItemId[buff.itemId] = buff
})
Object.keys(byEffectId.casts).forEach(castId => {
    const cast = byEffectId.casts[castId]
    byItemId[cast.itemId] = cast
})

module.exports = {byEffectId, byItemId}
