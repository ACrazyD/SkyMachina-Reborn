console.info('Create Crafting: Registering recipes...')
ServerEvents.recipes(e => {

    var hammer = '#forge:tools/hammers'
    var saw = '#forge:tools/saws'
    var screwdriver = '#forge:tools/screwdrivers'
    var wrench = '#forge:tools/wrenches'
    var file = '#forge:tools/files'
    var wirecutter = '#forge:tools/wirecutters'

    //Casings
    function casing(plate, frame, output){
        e.shaped(output,[
            'HpF',
            'pap',
            'WpD'
        ],{
            H: hammer,
            p: plate,
            F: file,
            a: frame,
            W: wrench,
            D: screwdriver
        })
    }

    casing('gtceu:wood_plate', 'kubejs:andesite_alloy_frame', 'create:andesite_casing')
    casing('gtceu:treated_wood_plate', 'gtceu:brass_frame', 'create:brass_casing')
    casing('gtceu:treated_wood_plate', 'gtceu:copper_frame', 'create:copper_casing')
    //casing('gtceu:treated_wood_plate', 'gtceu:bronze_frame', 'create_dd:bronze_casing')
    //casing('create_dd:mithril_sheet', 'gtceu:steel_frame', 'create_dd:mithril_casing')
    casing('tfmg:hardened_planks', 'gtceu:steel_frame', 'tfmg:steel_casing')
    casing('gtceu:double_steel_plate', 'gtceu:steel_frame', 'tfmg:heavy_machinery_casing')
    casing('create:sturdy_sheet', 'gtceu:brass_frame', 'create:railway_casing')
    casing('gtceu:copper_plate', 'gtceu:copper_frame', 'create_dd:hydraulic_casing')
    casing('gtceu:double_steel_plate', 'gtceu:steel_frame', 'create_dd:industrial_casing')
    casing('gtceu:steel_plate', 'gtceu:steel_frame', 'create_dd:steel_casing')


    e.shaped('2x create:shaft',[
        'sHs'
    ],{
        s: 'kubejs:andesite_alloy_long_rod',
        H: hammer
    })

    e.shaped('create:cogwheel',[
        'S ',
        'rp'
    ],{
        S: saw,
        r: 'create:shaft',
        p: '#minecraft:planks'
    })

    e.shaped('create:large_cogwheel',[
        ' S ',
        'prp'
    ],{
        S: saw,
        r: 'create:shaft',
        p: '#minecraft:planks'
    })

    e.shaped('create:vertical_gearbox',[
        'Hs ',
        'cac',
        ' sD'
    ],{
        s: 'create:shaft',
        H: hammer,
        c: 'create:cogwheel',
        a: 'kubejs:andesite_alloy_frame',
        D: screwdriver
    })

    e.shaped('create:gearbox',[
        'Hc ',
        'sas',
        ' cD'
    ],{
        s: 'create:shaft',
        H: hammer,
        c: 'create:cogwheel',
        a: 'kubejs:andesite_alloy_frame',
        D: screwdriver
    })

    e.shaped('create:encased_chain_drive',[
        ' c ',
        'sas',
        ' c '
    ],{
        s: 'create:shaft',
        c: 'minecraft:chain',
        a: 'kubejs:andesite_alloy_frame'
    })

    e.shaped('create:clutch',[
        'Hl ',
        'sas',
        ' rD'
    ],{
        s: 'create:shaft',
        l: 'minecraft:lever',
        a: 'kubejs:andesite_alloy_frame',
        r: 'vintageimprovements:redstone_module',
        H: hammer,
        D: screwdriver
    })

    e.shaped('create:gearshift',[
        'ycH',
        'sas',
        'Dcr'
    ],{
        s: 'create:shaft',
        c: 'create:cogwheel',
        a: 'kubejs:andesite_alloy_frame',
        r: 'vintageimprovements:redstone_module',
        y: 'minecraft:redstone_repeater',
        H: hammer,
        D: screwdriver
    })

    e.shaped('create:adjustable_chain_gearshift',[
        'Hc ',
        'ses',
        ' rD'
    ],{
        s: 'create:shaft',
        c: 'minecraft:chain',
        e: 'create:encased_chain_drive',
        r: 'vintageimprovements:redstone_module',
        H: hammer,
        D: screwdriver
    })

    e.shaped('create:belt_connector',[
        'rrr',
        'sWs',
        'rrr'
    ],{
        s: 'kubejs:andesite_alloy_rod',
        r: 'create_dd:rubber',
        W: wrench
    })

    e.shaped('create:water_wheel',[
        'plp',
        'DaH',
        'plp'
    ],{
        p: 'gtceu:wood_plate',
        l: 'create:large_cogwheel',
        D: screwdriver,
        a: 'kubejs:andesite_alloy_frame',
        H: hammer
    })

    e.shaped('create:large_water_wheel',[
        'plp',
        'DaH',
        'plp'
    ],{
        p: 'gtceu:wood_plate',
        l: 'create:large_cogwheel',
        D: screwdriver,
        a: 'create:water_wheel',
        H: hammer
    })

    e.shaped('create:turntable',[
        'ppp',
        ' a ',
        ' c '
    ],{
        p: 'gtceu:wood_plate',
        a: 'kubejs:andesite_alloy_frame',
        c: 'create:cogwheel'
    })

    e.shaped('create:nozzle',[
        'F',
        'c'
    ],{
        F: file,
        c: 'create:chute'
    })

    e.shaped('create:encased_fan',[
        ' c ',
        'DaH',
        ' p '
    ],{
        c: 'create:cogwheel',
        D: screwdriver,
        a: 'kubejs:andesite_alloy_frame',
        p: 'gtceu:iron_rotor',
        H: hammer
    })

    e.shaped('create:hand_crank',[
        'ss',
        'sD',
        'pH'
    ],{
        s: 'create:shaft',
        p: '#minecraft:planks',
        D: screwdriver,
        H: hammer
    })

    e.shaped('create:millstone',[
        'HhW',
        'sas',
        'clc'
    ],{
        h: 'minecraft:stonecutter',
        s: '#forge:stone',
        a: 'kubejs:andesite_alloy_frame',
        c: 'create:cogwheel',
        l: 'create:large_cogwheel',
        W: wrench,
        H: hammer
    })

    e.shaped('create:mechanical_press',[
        ' W ',
        'DcH',
        ' i '
    ],{
        W: wrench,
        D: screwdriver,
        c: 'create:encased_chain_drive',
        H: hammer,
        i: 'minecraft:iron_block'
    })

    e.shaped('create:mechanical_mixer',[
        ' s ',
        'cac',
        'WwH'
    ],{
        s: 'create:shaft',
        c: 'create:cogwheel',
        a: 'kubejs:andesite_alloy_frame',
        W: wrench,
        w: 'create:whisk',
        H: hammer
    })

    e.shaped('create:basin',[
        'p p',
        'pHp',
        'ppp'
    ],{
        p: 'gtceu:stone_plate',
        H: hammer
    })

    e.shaped('create:weighted_ejector',[
        'ppp',
        'wWc',
        'ias'
    ],{
        p: 'gtceu:stone_plate',
        s: 'create:shaft',
        W: wrench,
        c: 'create:cogwheel',
        a: 'kubejs:andesite_alloy_frame',
        i: 'minecraft:piston',
        w: 'gtceu:iron_spring'
    })

    e.shaped('create:empty_blaze_burner',[
        'ccc',
        'cnc',
        'cac'
    ],{
        c: 'minecraft:chain',
        n: 'minecraft:netherrack',
        a: 'gtceu:steel_frame'
    })

    e.shaped('create:chute',[
        'p p',
        'dHd',
        'p p'
    ],{
        p: 'kubejs:andesite_alloy_plate',
        d: 'gtceu:iron_plate',
        H: hammer
    })

    e.shaped('create:smart_chute',[
        ' b ',
        'DcW',
        ' t '
    ],{
        b: 'gtceu:brass_plate',
        D: screwdriver,
        c: 'create:chute',
        W: wrench,
        t: 'create:electron_tube'
    })

    e.shaped('create:depot',[
        ' H ',
        'ppp',
        'pap'
    ],{
        H: hammer,
        p: 'kubejs:andesite_alloy_plate',
        a: 'kubejs:andesite_alloy_frame'
    })

    e.shaped('4x create:fluid_pipe',[
        'p p',
        'pHp',
        'p p'
    ],{
        p: 'gtceu:copper_plate',
        H: hammer
    })

    e.shaped('4x tfmg:brass_pipe',[
        'p p',
        'pHp',
        'p p'
    ],{
        p: 'gtceu:brass_plate',
        H: hammer
    })

    e.shaped('4x tfmg:steel_pipe',[
        'p p',
        'pHp',
        'p p'
    ],{
        p: 'gtceu:steel_plate',
        H: hammer
    })

    e.shaped('4x tfmg:aluminum_pipe',[
        'p p',
        'pHp',
        'p p'
    ],{
        p: 'gtceu:aluminium_plate',
        H: hammer
    })

    e.shaped('create:mechanical_pump',[
        ' D ',
        'cpc',
        ' W '
    ],{
        D: screwdriver,
        c: 'create:cogwheel',
        p: 'create:fluid_pipe',
        W: wrench
    })

    e.shaped('create:smart_fluid_pipe',[
        ' b ',
        'DcW',
        ' t '
    ],{
        b: 'gtceu:brass_plate',
        D: screwdriver,
        c: 'create:fluid_pipe',
        W: wrench,
        t: 'create:electron_tube'
    })

    e.shaped('create:fluid_tank',[
        ' cW',
        'cac',
        'Hc '
    ],{
        c: 'create:copper_sheet',
        W: wrench,
        a: 'kubejs:andesite_alloy_frame',
        H: hammer
    })

    e.shaped('create:copper_valve_handle',[
        ' c ',
        'chc',
        ' c '
    ],{
        c: 'create:copper_sheet',
        h: 'create:hand_crank'
    })

    e.shaped('create:fluid_valve',[
        'Hc ',
        'cpc',
        ' cD'
    ],{
        c: 'create:copper_sheet',
        H: hammer,
        p: 'create:fluid_pipe',
        D: screwdriver
    })

    e.shaped('create:hose_pulley',[
        'WcD',
        ' r ',
        ' r '
    ],{
        W: wrench,
        c: 'create:encased_chain_drive',
        D: screwdriver,
        r: 'create_dd:rubber'
    })

    e.shaped('create:item_drain',[
        'HgD',
        'cac'
    ],{
        H: hammer,
        g: 'design_decor:ornate_grate',
        D: screwdriver,
        c: 'create:copper_sheet',
        a: 'gtceu:copper_frame'
    })

    e.shaped('create:spout',[
        'HtF',
        'WcD'
    ],{
        H: hammer,
        t: 'create:fluid_tank',
        F: file,
        W: wrench,
        c: 'create:fluid_pipe',
        D: screwdriver
    })

    e.shaped('create:brass_hand',[
        ' r ',
        'prp',
        'HpW'
    ],{
        r: 'kubejs:andesite_alloy_long_rod',
        p: 'gtceu:brass_plate',
        H: hammer,
        W: wrench
    })

    e.shaped('create:whisk',[
        ' r ',
        'ipi',
        'HiD'
    ],{
        r: 'kubejs:andesite_alloy_rod',
        p: 'kubejs:andesite_alloy_plate',
        i: 'gtceu:iron_rod',
        H: hammer,
        D: screwdriver
    })

    e.shaped('create:electron_tube',[
        ' v ',
        'ptp',
        'WwD'
    ],{
        v: 'gtceu:glass_tube',
        p: 'gtceu:iron_plate',
        t: 'gtceu:vacuum_tube',
        W: wrench,
        w: 'gtceu:fine_copper_wire',
        D: screwdriver
    })

    e.recipes.gtceu.polarizer('energized_gold')
        .itemInputs('minecraft:gold_ingot')
        .itemOutputs('create_new_age:overcharged_gold')
        .duration(32)
        .EUt(16)

    e.recipes.gtceu.polarizer('energized_iron')
        .itemInputs('gtceu:magnetic_iron_ingot')
        .itemOutputs('create_new_age:overcharged_iron')
        .duration(16)
        .EUt(16)

    e.recipes.gtceu.polarizer('energized_diamond')
        .itemInputs('minecraft:diamond')
        .itemOutputs('create_new_age:overcharged_diamond')
        .duration(160)
        .EUt(16)

    e.recipes.gtceu.bender('overcharged_iron_plate')
        .itemInputs('create_new_age:overcharged_iron')
        .itemOutputs('create_new_age:overcharged_iron_sheet')
        .duration(48)
        .EUt(24);

    e.recipes.gtceu.bender('overcharged_gold_plate')
        .itemInputs('create_new_age:overcharged_gold')
        .itemOutputs('create_new_age:overcharged_golden_sheet')
        .duration(196)
        .EUt(24);

    e.recipes.gtceu.wiremill('copper_wire')
        .itemInputs('gtceu:copper_plate')
        .itemOutputs('4x create_new_age:copper_wire')
        .duration(189)
        .EUt(7);

    e.recipes.gtceu.wiremill('iron_wire')
        .itemInputs('create_new_age:overcharged_iron_sheet')
        .itemOutputs('4x create_new_age:overcharged_iron_wire')
        .duration(321)
        .EUt(7);

    e.recipes.gtceu.wiremill('gold_wire')
        .itemInputs('create_new_age:overcharged_golden_sheet')
        .itemOutputs('4x create_new_age:overcharged_golden_wire')
        .duration(588)
        .EUt(7);

    e.recipes.gtceu.wiremill('diamond_wire')
        .itemInputs('create_new_age:overcharged_diamond')
        .itemOutputs('2x create_new_age:overcharged_diamond_wire')
        .duration(764)
        .EUt(7);

    e.remove({output: 'create:andesite_alloy'});
    e.shapeless('2x create:andesite_alloy', ['2x minecraft:iron_nugget', '2x exnihilosequentia:andesite_pebble']);
    e.shapeless('16x create:andesite_alloy', ['4x minecraft:andesite', '5x minecraft:iron_nugget']);
    
    e.shaped('create:precision_mechanism', [
        'NBN',
        'SPS',
        'NBN'
    ], {
        N: 'minecraft:iron_nugget',
        B: 'create:large_cogwheel',
        S: 'create:cogwheel',
        P: 'gtceu:gold_plate'
    });
}) //End Of File