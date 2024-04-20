StartupEvents.registry('item', e => {

    e.create('menril_diode')
    
})

GTCEuStartupEvents.registry('gtceu:material', e => {

    e.create('andesite_alloy')
        .ingot()
        .components('2x andesite', '2x iron')
        .color(0x747878).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_DENSE)

})//End Of File

