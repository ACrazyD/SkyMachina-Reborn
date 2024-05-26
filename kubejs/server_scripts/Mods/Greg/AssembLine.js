console.info('Greg AssembLine: Registering recipes...')
ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920

	// atomic_casing

	event.recipes.gtceu
		.assembly_line('kubejs:assembly_line/atomic_casing')
		.itemInputs('1x #forge:frames/neutronium')
		.itemInputs('1x gtceu:ruthenium_trinium_americium_neutronate_hex_wire')
		.itemInputs('2x #gtceu:circuits/uhv')
		.itemInputs('4x gtceu:uv_field_generator')
		.itemInputs('32x gtceu:highly_advanced_soc')
		.itemInputs('6x #forge:double_plates/neutronium')
		.itemInputs('64x #forge:bolts/neutronium')
		.itemInputs('64x #forge:bolts/neutronium')
		.inputFluids(Fluid.of('gtceu:argon_plasma', 1000))
		.inputFluids(Fluid.of('gtceu:helium_plasma', 1000))
		.inputFluids(Fluid.of('gtceu:nitrogen_plasma', 1000))
		.inputFluids(Fluid.of('gtceu:oxygen_plasma', 1000))
		.itemOutputs('gtceu:atomic_casing')
		.duration(200)
		.EUt(1966080)

}) //End Of File
