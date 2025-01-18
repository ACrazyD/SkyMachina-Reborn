// Makeing Pebbles Great Again!
ServerEvents.recipes(e => {
    
    //Flake Crafting
    //Copper
    e.shaped('skytweaker:copper_flake',[
        'p  ',
        ' pp',
        '  p'
    ],{
        p: '#skytweaker:owpebbles'
    })
    //Iron
    e.shaped('skytweaker:iron_flake',[
        '  p',
        'pp ',
        'p  '
    ],{
        p: '#skytweaker:owpebbles'
    })
    //Gold
    e.shaped(' skytweaker:gold_flake',[
        'p  ',
        'pp ',
        'p  '
    ],{
        p: '#skytweaker:owpebbles'
    })
    //Coal Shavings
    e.shaped('skytweaker:coal_shavings',[
        'p  ',
        'pp ',
        ' p '
    ],{
        p: '#skytweaker:owpebbles'
    })
    //Flake To Something??
    //Copper
    e.shapeless('minecraft:raw_copper',[
        'skytweaker:copper_flake'
    ])
    //Iron
    e.shapeless('minecraft:raw_iron',[
        'skytweaker:iron_flake'
    ])
    //Gold
    e.shapeless('minecraft:raw_gold',[
        'skytweaker:gold_flake'
    ])
    //Coal Shavings
    e.shapeless('minecraft:coal',[
        'skytweaker:coal_shavings'
    ])

})
//End Of File