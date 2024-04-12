ServerEvents.recipes(event => {

    event.recipes.gtceu.natural_fluid_generator('kubejs:natural_fluid_generator/natural_gas')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .outputFluids(Fluid.of('gtceu:natural_gas', 1000))
        .duration(60)
        .EUt(60)
        .circuit(1)

    event.recipes.gtceu.natural_fluid_generator('kubejs:natural_fluid_generator/lava')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .outputFluids(Fluid.of('minecraft:lava', 4000))
        .duration(20)
        .EUt(60)
        .circuit(2)

    event.recipes.gtceu.natural_fluid_generator('kubejs:natural_fluid_generator/raw_oil')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .outputFluids(Fluid.of('gtceu:oil_medium', 1000))
        .duration(60)
        .EUt(60)
        .circuit(3)

})//End Of File