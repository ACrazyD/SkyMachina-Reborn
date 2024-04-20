StartupEvents.registry('item', e => {

    e.create('menril_diode')
    e.create('crude_steel')
    
})

GTCEuStartupEvents.registry('gtceu:material', e => {

    e.create('andesite_alloy')
        .ingot()
        .toolStats(ToolProperty.Builder.of(3.0F, 2.0F, 192, 2))
        .components('2x andesite', '2x iron')
        .color(0x747878).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_DENSE)

})//End Of File Test

