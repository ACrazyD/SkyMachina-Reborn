ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920
	let IV = 7680

	// dense_obsidian_plate

	event.recipes.gtceu
		.bender('kubejs:bender/dense_obsidian_plate')
		.itemInputs('9x gtceu:obsidian_plate')
		.itemOutputs('gtceu:dense_obsidian_plate')
		.duration(1200)
		.EUt(96)
		.circuit(9)
}) //End Of File
