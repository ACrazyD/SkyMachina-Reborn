ServerEvents.recipes((event) => {
	event.recipes.gtceu
		.desulfurizer('kubejs:desulfurizer/light_fuel')
		.itemInputs('1x #forge:dusts/zeolite')
		.inputFluids(Fluid.of('gtceu:sulfuric_light_fuel', 96000))
		.outputFluids(Fluid.of('gtceu:light_fuel', 96000))
		.itemOutputs('32x gtceu:sulfur_dust')
		.duration(128)
		.EUt(2048)

	event.recipes.gtceu
		.desulfurizer('kubejs:desulfurizer/heavy_fuel')
		.itemInputs('1x #forge:dusts/zeolite')
		.inputFluids(Fluid.of('gtceu:sulfuric_heavy_fuel', 96000))
		.outputFluids(Fluid.of('gtceu:heavy_fuel', 96000))
		.itemOutputs('32x gtceu:sulfur_dust')
		.duration(128)
		.EUt(2048)

	event.recipes.gtceu
		.desulfurizer('kubejs:desulfurizer/naphtha')
		.itemInputs('1x #forge:dusts/zeolite')
		.inputFluids(Fluid.of('gtceu:sulfuric_naphtha', 96000))
		.outputFluids(Fluid.of('gtceu:naphtha', 96000))
		.itemOutputs('32x gtceu:sulfur_dust')
		.duration(128)
		.EUt(2048)

	event.recipes.gtceu
		.desulfurizer('kubejs:desulfurizer/gas')
		.itemInputs('1x #forge:dusts/zeolite')
		.inputFluids(Fluid.of('gtceu:sulfuric_gas', 96000))
		.outputFluids(Fluid.of('gtceu:refinery_gas', 96000))
		.itemOutputs('32x gtceu:sulfur_dust')
		.duration(128)
		.EUt(2048)
}) //End Of File
