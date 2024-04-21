ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920

	// dust

	event.recipes.gtceu
		.forge_hammer('kubejs:forge_hammer/sand_to_dust')
		.itemInputs('#forge:sand')
		.itemOutputs('ex_hammers:dust')
		.duration(10)
		.EUt(LV)

	// paper_dust

	event.recipes.gtceu
		.forge_hammer('kubejs:forge_hammer/paper_dust')
		.itemInputs('3x minecraft:sugar_cane')
		.itemOutputs('2x gtceu:paper_dust')
		.duration(20)
		.EUt(ULV)
}) //End Of File
