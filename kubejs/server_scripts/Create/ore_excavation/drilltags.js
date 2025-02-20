//prority: 1000
console.log('Adding Drill Tags...')

ServerEvents.tags('item', e => {
    e.add('createoreexcavation:drills', ['kubejs:test_drill', 'kubejs:test_drill2'])
})//EF