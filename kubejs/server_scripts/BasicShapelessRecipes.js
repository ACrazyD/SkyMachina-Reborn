ServerEvents.recipes(e => {


    // item_filter
    e.shapeless('gtceu:item_filter',
        'gtceu:item_filter'
    )

    // item_tag_filter
    e.shapeless('gtceu:item_tag_filter',
        'gtceu:item_tag_filter'
    )

    // fluid_filter
    e.shapeless('gtceu:fluid_filter',
        'gtceu:fluid_filter'
    )

    // fluid_tag_filter
    e.shapeless('gtceu:fluid_tag_filter',
        'gtceu:fluid_tag_filter'
    )

    // ender_tank
    e.shapeless('endertanks:ender_tank',
        'endertanks:ender_tank'
    )

    // fluid_tank
    e.shapeless('enderio:fluid_tank',
        'enderio:fluid_tank'
    )

    // pressurized_fluid_tank
    e.shapeless('enderio:pressurized_fluid_tank',
        'enderio:pressurized_fluid_tank'
    )

    // ender_pearl_dust
    e.shapeless('4x gtceu:ender_pearl_dust',
        [
            'gtceu:beryllium_dust',
            '4x gtceu:potassium_dust'
        ]
    )

    // cardboard
    e.remove({ output: 'dustrial_decor:cardboard' })
    e.shapeless('dustrial_decor:cardboard',
        [
            '2x minecraft:paper'
        ]
    )

})//End Of File