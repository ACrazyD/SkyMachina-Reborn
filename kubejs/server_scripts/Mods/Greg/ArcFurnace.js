ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920

	// titanium_fluid_cell
	event.remove({ id: 'gtceu:arc_furnace/arc_titanium_fluid_cell' })
	event.recipes.gtceu
		.arc_furnace('kubejs:arc_furnace/titanium_fluid_cell')
		.itemInputs('gtceu:titanium_fluid_cell')
		.inputFluids(Fluid.of('gtceu:oxygen', 714))
		.itemOutputs('6x gtceu:titanium_ingot')
		.duration(714)
		.EUt(LV)
}) //End Of File
