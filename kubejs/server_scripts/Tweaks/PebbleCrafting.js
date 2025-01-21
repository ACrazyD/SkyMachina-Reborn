// Makeing Pebbles Great Again!
ServerEvents.recipes(e => {

    let ptos = (pebble, stone) => {
        e.shaped(stone, [
            'pp',
            'pp'
        ],{
            p: pebble
        })
    }

    // Pebble To Stones
    ptos('havenpebbles:tuff_pebble', 'minecraft:tuff')
    ptos('havenpebbles:stone_pebble', 'minecraft:cobblestone')
    ptos('havenpebbles:granite_pebble', 'minecraft:granite')
    ptos('havenpebbles:diorite_pebble', 'minecraft:diorite')
    ptos('havenpebbles:andesite_pebble', 'minecraft:andesite')
    ptos('havenpebbles:dripstone_pebble', 'minecraft:dripstone_block')
    ptos('havenpebbles:calcite_pebble', 'minecraft:calcite')
    ptos('havenpebbles:blackstone_pebble', 'minecraft:blackstone')
    ptos('havenpebbles:basalt_pebble', 'minecraft:basalt')
    ptos('havenpebbles:netherrack_pebble', 'minecraft:netherrack')
    
    //Flake Crafting
    // Copper
    e.shaped('skytweaker:copper_flake',[
        'p  ',
        ' pp',
        '  p'
    ],{
        p: '#skytweaker:owpebbles'
    })
    // Iron
    e.shaped('skytweaker:iron_flake',[
        '  p',
        'pp ',
        'p  '
    ],{
        p: '#skytweaker:owpebbles'
    })
    // Gold
    e.shaped(' skytweaker:gold_flake',[
        'p  ',
        'pp ',
        'p  '
    ],{
        p: '#skytweaker:owpebbles'
    })
    // Coal Shavings
    e.shaped('skytweaker:coal_shavings',[
        'p  ',
        'pp ',
        ' p '
    ],{
        p: '#skytweaker:owpebbles'
    })
    
    //Flake To Something??
    // Copper
    e.shapeless('minecraft:raw_copper',[
        'skytweaker:copper_flake'
    ])
    // Iron
    e.shapeless('minecraft:raw_iron',[
        'skytweaker:iron_flake'
    ])
    // Gold
    e.shapeless('minecraft:raw_gold',[
        'skytweaker:gold_flake'
    ])
    // Coal Shavings
    e.shapeless('minecraft:coal',[
        'skytweaker:coal_shavings'
    ])

})
//End Of File