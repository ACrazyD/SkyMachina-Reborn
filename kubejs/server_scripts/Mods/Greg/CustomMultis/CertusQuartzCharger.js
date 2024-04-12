ServerEvents.recipes(event => {

    e.recipes.gtceu.certus_quartz_charger('kubejs:certus_quartz_charger/charged_certus_quartz_crystal')
        .itemInputs('4x ae2:certus_quartz_crystal')
        .itemOutputs('4x ae2:charged_certus_quartz_crystal')
        .duration(16)
        .EUt(60)
        .circuit(1)

    e.recipes.gtceu.certus_quartz_charger('kubejs:certus_quartz_charger/charged_certus_quartz_crystal_2')
        .itemInputs('4x ae2:certus_quartz_crystal')
        .inputFluids(Fluid.of('gtceu:nitrogen', 100))
        .itemOutputs('4x ae2:charged_certus_quartz_crystal')
        .duration(8)
        .EUt(60)
        .circuit(2)

    e.recipes.gtceu.certus_quartz_charger('kubejs:certus_quartz_charger/charged_certus_quartz_crystal_3')
        .itemInputs('4x gtceu:certus_quartz_gem')
        .itemOutputs('4x ae2:charged_certus_quartz_crystal')
        .duration(16)
        .EUt(60)
        .circuit(1)

    e.recipes.gtceu.certus_quartz_charger('kubejs:certus_quartz_charger/charged_certus_quartz_crystal_4')
        .itemInputs('4x gtceu:certus_quartz_gem')
        .inputFluids(Fluid.of('gtceu:nitrogen', 100))
        .itemOutputs('4x ae2:charged_certus_quartz_crystal')
        .duration(8)
        .EUt(60)
        .circuit(2)

})//End Of File