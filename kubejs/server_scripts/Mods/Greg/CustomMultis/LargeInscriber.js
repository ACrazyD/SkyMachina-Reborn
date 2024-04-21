ServerEvents.recipes((event) => {
	event.recipes.gtceu
		.large_inscriber('kubejs:large_inscriber/logic_processor')
		.notConsumable('ae2:silicon_press')
		.notConsumable('ae2:logic_processor_press')
		.itemInputs('#forge:silicon')
		.itemInputs('#forge:ingots/gold')
		.inputFluids(Fluid.of('gtceu:redstone', 144))
		.itemOutputs('ae2:logic_processor')
		.duration(8)
		.EUt(60)

	event.recipes.gtceu
		.large_inscriber('kubejs:large_inscriber/logic_processor_2')
		.notConsumable('ae2:silicon_press')
		.notConsumable('ae2:logic_processor_press')
		.itemInputs('#forge:dusts/silicon')
		.itemInputs('#forge:ingots/gold')
		.inputFluids(Fluid.of('gtceu:redstone', 144))
		.itemOutputs('ae2:logic_processor')
		.duration(8)
		.EUt(60)

	event.recipes.gtceu
		.large_inscriber('kubejs:large_inscriber/engineering_processor')
		.notConsumable('ae2:silicon_press')
		.notConsumable('ae2:engineering_processor_press')
		.itemInputs('#forge:silicon')
		.itemInputs('#forge:gems/diamond')
		.inputFluids(Fluid.of('gtceu:redstone', 144))
		.itemOutputs('ae2:engineering_processor')
		.duration(8)
		.EUt(60)

	event.recipes.gtceu
		.large_inscriber('kubejs:large_inscriber/engineering_processor_2')
		.notConsumable('ae2:silicon_press')
		.notConsumable('ae2:engineering_processor_press')
		.itemInputs('#forge:dusts/silicon')
		.itemInputs('#forge:gems/diamond')
		.inputFluids(Fluid.of('gtceu:redstone', 144))
		.itemOutputs('ae2:engineering_processor')
		.duration(8)
		.EUt(60)

	event.recipes.gtceu
		.large_inscriber('kubejs:large_inscriber/calculation_processor')
		.notConsumable('ae2:silicon_press')
		.notConsumable('ae2:calculation_processor_press')
		.itemInputs('#forge:silicon')
		.itemInputs('#forge:gems/certus_quartz')
		.inputFluids(Fluid.of('gtceu:redstone', 144))
		.itemOutputs('ae2:calculation_processor')
		.duration(8)
		.EUt(60)

	event.recipes.gtceu
		.large_inscriber('kubejs:large_inscriber/calculation_processor_2')
		.notConsumable('ae2:silicon_press')
		.notConsumable('ae2:calculation_processor_press')
		.itemInputs('#forge:dusts/silicon')
		.itemInputs('#forge:gems/certus_quartz')
		.inputFluids(Fluid.of('gtceu:redstone', 144))
		.itemOutputs('ae2:calculation_processor')
		.duration(8)
		.EUt(60)
}) //End Of File
