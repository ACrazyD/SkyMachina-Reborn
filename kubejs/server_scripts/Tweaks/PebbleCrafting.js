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
    e.shaped('kubejs:copper_flake',[
        'p  ',
        ' pp',
        '  p'
    ],{
        p: '#kubejs:owpebbles'
    })
    // Iron
    e.shaped('kubejs:iron_flake',[
        '  p',
        'pp ',
        'p  '
    ],{
        p: '#kubejs:owpebbles'
    })
    // Gold
    e.shaped('kubejs:gold_flake',[
        'p  ',
        'pp ',
        'p  '
    ],{
        p: '#kubejs:owpebbles'
    })
    // Coal Shavings
    e.shaped('kubejs:coal_shavings',[
        'p  ',
        'pp ',
        ' p '
    ],{
        p: '#kubejs:owpebbles'
    })
    
    //Flake To Something??
    // Copper
    e.shapeless('minecraft:raw_copper',[
        'kubejs:copper_flake'
    ])
    // Iron
    e.shapeless('minecraft:raw_iron',[
        'kubejs:iron_flake'
    ])
    // Gold
    e.shapeless('minecraft:raw_gold',[
        'kubejs:gold_flake'
    ])
    // Coal Shavings
    e.shapeless('minecraft:coal',[
        'kubejs:coal_shavings'
    ])

})
//End Of File