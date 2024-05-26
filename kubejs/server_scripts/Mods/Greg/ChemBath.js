console.info('Greg Chemical Bath: Registering recipes...')
ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920
	let IV = 7680

	// magnesium_diboride_ingot

	event.recipes.gtceu
		.chemical_bath('kubejs:chemical_bath/magnesium_diboride_ingot')
		.itemInputs('#forge:hot_ingots/magnesium_diboride')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('gtceu:magnesium_diboride_ingot')
		.duration(400)
		.EUt(MV)

	// magnesium_diboride_ingot_2

	event.recipes.gtceu
		.chemical_bath('kubejs:chemical_bath/magnesium_diboride_ingot_2')
		.itemInputs('#forge:hot_ingots/magnesium_diboride')
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs('gtceu:magnesium_diboride_ingot')
		.duration(250)
		.EUt(MV)
}) //End Of File
