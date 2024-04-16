ServerEvents.recipes(e => {

    //Diode Fucking Wanker
    e.shaped('kubejs:menril_diode', [
        'kd'
    ],{
        k: 'integrateddynamics:crystalized_menril_chunk',
        d: 'gtceu:diode'
    })

    //ReGregging Da Woods
    const gwood_mapping = {
        '4x wizards_reborn:arcane_wood_planks': '#wizards_reborn:arcane_wood_logs',
        '4x wizards_reborn:innocent_wood_planks': '#wizards_reborn:innocent_wood_logs',
        '4x create_dd:rose_planks': '#create_dd:rose_logs',
        '4x create_dd:smoked_planks': '#create_dd:smoked_logs',
        '4x create_dd:spirit_planks': '#create_dd:spirit_logs',
        '4x create_dd:rubber_planks': '#create_dd:rubber_log',
        '4x integrateddynamics:menril_planks': '#integrateddynamics:menril_logs'
    }
    Object.entries(gwood_mapping).forEach(([planks, logs]) => {
        e.shaped(planks, [
            's',
            'p'
        ], {
            s: '#forge:tools/saws',
            p: logs
        })
    });

    //Noteblock Crafting
    e.shaped('minecraft:note_block', [
        'ppp',
        'igi',
        'prp'
    ],{
        p: 'gtceu:wood_plate',
        i: 'minecraft:iron_bars',
        g: '#forge:gears/wood',
        r: 'gtceu:long_iron_rod'
    })

    //Jukebox Crafting
    e.shaped('minecraft:jukebox', [
        'lbl',
        'nrn',
        'lgl'
    ], {
        l: '#minecraft:logs',
        b: 'gtceu:iron_bolt',
        n: 'minecraft:note_block',
        r: 'gtceu:iron_ring',
        g: '#forge:gears/iron'

    })

    //Dyes
    e.shaped('minecraft:red_dye', [
        'A  ',
        'B  ',
        '   ',
    ], {
        A: '#forge:dusts/redstone',
        B: '#forge:tools/mortars',
    })

    e.shaped('minecraft:black_dye', [
        'A  ',
        'B  ',
        '   ',
    ], {
        A: '#forge:dusts/coal',
        B: '#forge:tools/mortars',
    })

    e.shaped('minecraft:black_dye', [
        'A  ',
        'B  ',
        '   ',
    ], {
        A: '#forge:dusts/charcoal',
        B: '#forge:tools/mortars',
    })

    e.shaped('minecraft:black_dye', [
        'A  ',
        'B  ',
        '   ',
    ], {
        A: '#forge:dusts/carbon',
        B: '#forge:tools/mortars',
    })

    // lime_wool
    e.shaped('minecraft:lime_wool', [
        'AA',
        'AA',
    ], {
        A: 'ex_hammers:plant_fiber',
    })

    // string
    e.shaped('2x minecraft:string', [
        'A ',
        'B ',
    ], {
        A: 'ex_hammers:plant_fiber',
        B: '#forge:tools/knives',
    })

    // grass_seed
    e.shaped('ex_hammers:grass_seed', [
        'A ',
        'B ',
    ], {
        A: 'minecraft:wheat_seeds',
        B: '#forge:tools/knives',
    })

    // clay_ball
    e.shaped('3x minecraft:clay_ball', [
        'A ',
        'B ',
    ], {
        A: '#forge:tools/hammers',
        B: 'minecraft:clay',
    })

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
    })

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
    })

})//End Of File