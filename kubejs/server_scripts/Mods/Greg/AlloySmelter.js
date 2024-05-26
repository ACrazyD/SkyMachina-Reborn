console.info('Greg Alloy Smelter: Registering recipes...')
ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920

	// soldering_alloy_ingot

	event.recipes.gtceu
		.alloy_smelter('kubejs:alloy_smelter/soldering_alloy_ingot')
		.itemInputs('9x gtceu:tin_ingot')
		.itemInputs('1x gtceu:antimony_ingot')
		.itemOutputs('10x gtceu:soldering_alloy_ingot')
		.duration(100)
		.EUt(LV)

	// potin_ingot

	event.recipes.gtceu
		.alloy_smelter('kubejs:alloy_smelter/potin_ingot')
		.itemInputs('8x #forge:ingots/bronze')
		.itemInputs('1x #forge:ingots/lead')
		.itemOutputs('9x gtceu:potin_ingot')
		.duration(100)
		.EUt(LV)

	// fin //
})
