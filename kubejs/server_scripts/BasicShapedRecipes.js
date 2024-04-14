ServerEvents.recipes(e => {

    // red_dye
    e.shaped('minecraft:red_dye', [
        'A  ',
        'B  ',
        '   ',
    ], {
        A: '#forge:dusts/redstone',
        B: '#forge:tools/mortars',
    }
    )

    // black_dye
    e.shaped('minecraft:black_dye', [
        'A  ',
        'B  ',
        '   ',
    ], {
        A: '#forge:dusts/coal',
        B: '#forge:tools/mortars',
    }
    )

    // black_dye
    e.shaped('minecraft:black_dye', [
        'A  ',
        'B  ',
        '   ',
    ], {
        A: '#forge:dusts/charcoal',
        B: '#forge:tools/mortars',
    }
    )

    // black_dye
    e.shaped('minecraft:black_dye', [
        'A  ',
        'B  ',
        '   ',
    ], {
        A: '#forge:dusts/carbon',
        B: '#forge:tools/mortars',
    }
    )

    // lime_wool
    e.shaped('minecraft:lime_wool', [
        'AA',
        'AA',
    ], {
        A: 'ex_hammers:plant_fiber',
    }
    )

    // string
    e.shaped('2x minecraft:string', [
        'A ',
        'B ',
    ], {
        A: 'ex_hammers:plant_fiber',
        B: '#forge:tools/knives',
    }
    )

    // grass_seed
    e.shaped('ex_hammers:grass_seed', [
        'A ',
        'B ',
    ], {
        A: 'minecraft:wheat_seeds',
        B: '#forge:tools/knives',
    }
    )

    // clay_ball
    e.shaped('3x minecraft:clay_ball', [
        'A ',
        'B ',
    ], {
        A: '#forge:tools/hammers',
        B: 'minecraft:clay',
    }
    )

    // staff_of_travelling
    e.remove({ output: 'travelanchors:travel_staff' })
    e.shaped('travelanchors:travel_staff', [
        ' EA',
        'DBE',
        'FC ',
    ], {
        A: '#forge:ender_pearls',
        B: 'gtceu:lv_emitter',
        C: '#forge:tools/wrenches',
        D: '#forge:tools/screwdrivers',
        E: '#forge:screws/steel',
        F: '#forge:rods/long/steel',
    }
    )

    // travel_anchor
    e.remove({ output: 'travelanchors:travel_anchor' })
    e.shaped('travelanchors:travel_anchor', [
        'ABA',
        'CDC',
        'ABA',
    ], {
        A: '#forge:plates/invar',
        B: '#forge:plates/rubber',
        C: '#forge:ender_pearls',
        D: 'gtceu:lv_machine_hull',
    }
    )

})//End Of File