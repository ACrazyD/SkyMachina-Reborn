//prority: 1000
console.log('Adding Drill Tags...')

ServerEvents.tags('item', e => {
    e.add('createoreexcavation:crudedrills', ['kubejs:test_drill'])
    e.add('createoreexcavation:drills', ['kubejs:test_drill2'])
})//EF
