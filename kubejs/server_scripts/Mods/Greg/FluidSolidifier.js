console.info('Greg Fluid Solidifier: Registering recipes...')
ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920
	let IV = 7680

	// slime_ball

	event.recipes.gtceu
		.fluid_solidifier('kubejs:fluid_solidifier/slime_ball')
		.notConsumable('gtceu:ball_casting_mold')
		.inputFluids(Fluid.of('gtceu:glue', 144))
		.itemOutputs('1x minecraft:slime_ball')
		.duration(20)
		.EUt(LV)

	// empty_soul_vial

	event.recipes.gtceu
		.fluid_solidifier('kubejs:fluid_solidifier/empty_soul_vial')
		.itemInputs('gtceu:glass_tube')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('1x enderio:empty_soul_vial')
		.duration(100)
		.EUt(LV)
}) //End Of File
