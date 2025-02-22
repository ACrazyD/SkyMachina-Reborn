ServerEvents.recipes(e => {
    [
        { id: 'createoreexcavation:ore_vein_type/osmium'},
        { id: 'createoreexcavation:ore_vein_type/redstone'},
        { id: 'createoreexcavation:ore_vein_type/diamond'},
        { id: 'createoreexcavation:ore_vein_type/hardened_diamond'},
        { id: 'createoreexcavation:ore_vein_type/tin'},
        { id: 'createoreexcavation:ore_vein_type/copper'},
        { id: 'createoreexcavation:ore_vein_type/emerald'},
        { id: 'createoreexcavation:ore_vein_type/iron'},
        { id: 'createoreexcavation:ore_vein_type/fluorite'},
        { id: 'create_ore_excavation_plus:ore_vein_type/raw_lapis_lazuli_vein'},
        { id: 'create_ore_excavation_plus:ore_vein_type/raw_netherite_scrap_vein'},
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
        { id: 'create_ore_excavation_plus:drilling/raw_netherite_scrap'},
        { id: 'create_ore_excavation_plus:drilling/hardened_diamond'},
        { id: 'create_ore_excavation_plus:drilling/raw_lapis_lazuli'},
        { mod: 'createoreexcavation', output: 'minecraft:raw_gold'},
        { mod: 'createoreexcavation', output: 'minecraft:lapis_lazuli'},
        { mod: 'createoreexcavation', output: 'create:raw_osmium'},
        { mod: 'createoreexcavation', output: 'minecraft:quartz'},
        { mod: 'createoreexcavation', output: 'minecraft:emerald'},
        { mod: 'createoreexcavation', output: 'minecraft:iron_ore'},
        { mod: 'createoreexcavation', output: 'mekanism:raw_uranium'},
        { mod: 'createoreexcavation', output: 'create:raw_zinc'},
        { mod: 'createoreexcavation', output: 'minecraft:glowstone_dust'},
        { mod: 'createoreexcavation', output: 'create:raw_tin'},
        { mod: 'createoreexcavation', output: 'minecraft:diamond'},
        { mod: 'createoreexcavation', output: 'mekanism:fluorite'},
        { mod: 'createoreexcavation', output: 'minecraft:coal'},
        { mod: 'createoreexcavation', output: 'mekanism:raw_lead'},
        { mod: 'createoreexcavation', output: 'minecraft:gold_nugget'},
        { mod: 'createoreexcavation', output: 'minecraft:redstone'},
        { mod: 'createoreexcavation', output: 'minecraft:copper_ore'},
        { mod: 'createoreexcavation', output: 'create_ore_excavation_plus:raw_netherite_scrap'},
        { mod: 'createoreexcavation', output: 'create_ore_excavation_plus:raw_diamond'},
        { mod: 'createoreexcavation', output: 'create_ore_excavation_plus:raw_lapis_lazuli'}
    ].forEach((recipe => {
        e.remove(recipe)
    }))


    /* e.recipes.createoreexcavation.vein('immserivegeology:normal_ore_magnetite','{"text": "Test Vein"}')
        .alwaysInfinite()
        .placement(1024, 128, 64825185)
        .id('skytweaker:test_vein') */
})//EF