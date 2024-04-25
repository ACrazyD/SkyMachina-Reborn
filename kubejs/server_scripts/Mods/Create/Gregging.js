ServerEvents.recipes(e => {

    //Functions and Constants
    let idremover = (output) =>
		e.remove({ id: output})

    let outremover = (outputs) =>
		e.remove({ output: outputs})

    var hammer = '#forge:tools/hammers'
    var saw = '#forge:tools/saws'
    var screwdriver = '#forge:tools/screwdrivers'
    var wrench = '#forge:tools/wrenches'
    var file = '#forge:tools/files'
    var wirecutter = '#forge:tools/wirecutters'

    //Removing ReMade Items
    outremover('create:crushing_wheel')
    outremover('create:shaft')
    outremover('create:cogwheel')
    outremover('create:large_cogwheel')
    outremover('create:vertical_gearbox')
    outremover('create:gearbox')
    outremover('create:encased_chain_drive')
    outremover('create:clutch')
    outremover('create:gearshift')
    outremover('create:adjestable_chain_drive')
    outremover('create:belt_connector')
    outremover('create:water_wheel')
    outremover('create:large_water_wheel')
    outremover('create:turntable')
    outremover('create:nozzle')
    outremover('create:encased_fan')
    outremover('create:hand_crank')
    outremover('create:millstone')
    outremover('create:mechanical_press')
    outremover('create:mechanical_mixer')
    outremover('create:basin')
    outremover('create:weighted_ejector')
    outremover('create:empty_blaze_burner')
    outremover('create:chute')
    outremover('create:smart_chute')
    outremover('create:depot')
    idremover('create:crafting/kenetics/depot')


    e.remove({ output: 'hyperbox:hyperbox' })

    e.shaped('create:shaft',[
        'sHs'
    ],{
        s: 'gtceu:long_andesite_alloy_rod',
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
        a: 'gtceu:andesite_alloy_frame',
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
        a: 'gtceu:andesite_alloy_frame',
        D: screwdriver
    })

    e.shaped('create:encased_chain_drive',[
        ' c ',
        'sas',
        ' c '
    ],{
        s: 'create:shaft',
        c: 'minecraft:chain',
        a: 'gtceu:andesite_alloy_frame'
    })

    e.shaped('create:clutch',[
        'Hl ',
        'sas',
        ' rD'
    ],{
        s: 'create:shaft',
        l: 'minecraft:lever',
        a: 'gtceu:andesite_alloy_frame',
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
        a: 'gtceu:andesite_alloy_frame',
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
        s: 'gtceu:andesite_alloy_rod',
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
        a: 'gtceu:andesite_alloy_frame',
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
        a: 'gtceu:andesite_alloy_frame',
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
        a: 'gtceu:andesite_alloy_frame',
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
        a: 'gtceu:andesite_alloy_frame',
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
        a: 'gtceu:andesite_alloy_frame',
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
        a: 'gtceu:andesite_alloy_frame',
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
        p: 'gtceu:andesite_alloy_plate',
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
        p: 'gtceu:andesite_alloy_plate',
        a: 'gtceu:andesite_alloy_frame'
    })


}) //End Of File