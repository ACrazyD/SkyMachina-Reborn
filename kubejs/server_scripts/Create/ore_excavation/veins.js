ServerEvents.recipes(e => {
    [
        { id: 'createoreexcavation:drilling/gold'},
        { id: 'createoreexcavation:drilling/lapis'},
        { id: 'createoreexcavation:drilling/osmium'},
        { id: 'createoreexcavation:drilling/quartz'},
        { id: 'createoreexcavation:drilling/emerald'},
        { id: 'createoreexcavation:drilling/iron'},
        { id: 'createoreexcavation:drilling/uranium'},
        { id: 'createoreexcavation:drilling/zinc'},
        { id: 'createoreexcavation:drilling/glowstone'},
        { id: 'createoreexcavation:drilling/tin'},
        { id: 'createoreexcavation:drilling/diamond'},
        { id: 'createoreexcavation:drilling/fluorite'},
        { id: 'createoreexcavation:drilling/coal'},
        { id: 'createoreexcavation:drilling/lead'},
        { id: 'createoreexcavation:drilling/nether_gold'},
        { id: 'createoreexcavation:drilling/redstone'},
        { id: 'createoreexcavation:drilling/copper'},
    ].forEach((recipe => {
        e.remove(recipe)
    }))


    e.recipes.createoreexcavation.vein('immserivegeology:normal_ore_magnetite','{"text": "Test Vein"}')
        .alwaysInfinite()
        .placement(1024, 128, 64825185)
        .id('skytweaker:test_vein')
})//EF