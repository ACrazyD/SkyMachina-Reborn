console.info('Create Crafting: Registering recipes...')
ServerEvents.recipes(e => {

    //Functions and Constants
    let idRemover = (output) =>
		e.remove({ id: output})

    let outRemover = (outputs) =>
		e.remove({ output: outputs})

    var hammer = '#forge:tools/hammers'
    var saw = '#forge:tools/saws'
    var screwdriver = '#forge:tools/screwdrivers'
    var wrench = '#forge:tools/wrenches'
    var file = '#forge:tools/files'
    var wirecutter = '#forge:tools/wirecutters'

    //Removing Create Casings and Machinisems
    /* idRemover('create:item_application/andesite_casing_from_wood')
    idRemover('create:item_application/andesite_casing_from_log')
    idRemover('create:item_application/brass_casing_from_log')
    idRemover('create:item_application/brass_casing_from_wood')
    idRemover('create:item_application/copper_casing_from_log')
    idRemover('create:item_application/copper_casing_from_wood')
    idRemover('create:item_application/railway_casing')
    idRemover('tfmg:item_application/steel_casing')
    idRemover('tfmg:item_application/heavy_macinery_casing')
    idRemover('create_dd:item_application/mithril_casing')
    idRemover('create_dd:bronze_casing_from_wood')
    idRemover('create_dd:bronze_casing_from_log')
    idRemover('create_dd:tin_casing_from_wood')
    idRemover('create_dd:tin_casing_from_log')
    idRemover('create_dd:item_application/netherite_casing')
    idRemover('create_dd:brick_casing_from_wood')
    idRemover('create_dd:brick_casing_from_log')
    idRemover('create_dd:item_application/nether_brick_casing')
    idRemover('create_dd:crafting/moddy_andesite_casing')
    idRemover('create_dd:item_application/hydraulic_casing')
    idRemover('create_dd:item_application/idustrial_casing')
    idRemover('create_dd:item_application/overburden_casing')
    idRemover('create_dd:item_application/refined_radiance_casing')
    idRemover('create_dd:acompat/create/createaddition/item_application/overcharged_casing')
    idRemover('create_dd:item_application/blaze_gold_casing')
    idRemover('create_dd:item_application/stargaze_singularity_casing') */

    //Removing ReMade Items
    outRemover('create:crushing_wheel')
    outRemover('create:shaft')
    outRemover('create:cogwheel')
    outRemover('create:large_cogwheel')
    outRemover('create:vertical_gearbox')
    outRemover('create:gearbox')
    outRemover('create:encased_chain_drive')
    outRemover('create:clutch')
    outRemover('create:gearshift')
    outRemover('create:adjestable_chain_drive')
    outRemover('create:belt_connector')
    outRemover('create:water_wheel')
    outRemover('create:large_water_wheel')
    outRemover('create:turntable')
    outRemover('create:nozzle')
    outRemover('create:encased_fan')
    outRemover('create:hand_crank')
    outRemover('create:millstone')
    outRemover('create:mechanical_press')
    outRemover('create:mechanical_mixer')
    outRemover('create:basin')
    outRemover('create:weighted_ejector')
    outRemover('create:empty_blaze_burner')
    outRemover('create:chute')
    outRemover('create:smart_chute')
    outRemover('create:depot')
    idRemover('create:crafting/kenetics/depot')
    outRemover('create:fluid_pipe')
    outRemover('create:mechanical_pump')
    outRemover('create:smart_fluid_pipe')
    outRemover('create:fluid_tank')
    outRemover('create:copper_valve_handle')
    outRemover('create:fluid_valve')
    outRemover('create:hose_pulley')
    outRemover('create:item_drain')
    outRemover('create:spout')

    e.remove({ output: 'hyperbox:hyperbox' })

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



    e.shaped('create:shaft',[
        'sHs'
    ],{
        s: 'gtceu:andesite_alloy_long_rod',
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
        'lD',
        'pH'
    ],{
        s: 'create:shaft',
        l: 'create:large_cogwheel',
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

    e.shaped('create:fluid_pipe',[
        'p p',
        'pHp',
        'p p'
    ],{
        p: 'create:copper_sheet',
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
        b: 'create:brass_sheet',
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



}) //End Of File