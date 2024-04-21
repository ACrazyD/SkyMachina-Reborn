ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920
	let IV = 7680

	// certus_quartz_crystal

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/certus_quartz_crystal')
		.itemInputs('gtceu:certus_quartz_gem')
		.inputFluids(Fluid.of('minecraft:water', 50))
		.itemOutputs('ae2:certus_quartz_crystal')
		.duration(20)
		.EUt(ULV)

	// clay

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/dust')
		.itemInputs('ex_hammers:dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:clay')
		.duration(20)
		.EUt(LV)

	// endstone

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/endstone')
		.itemInputs('gtceu:endstone_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:end_stone')
		.duration(20)
		.EUt(LV)

	// netherrack

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/netherrack')
		.itemInputs('gtceu:netherrack_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:netherrack')
		.duration(20)
		.EUt(LV)

	// granite

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/granite')
		.itemInputs('gtceu:granite_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:granite')
		.duration(20)
		.EUt(LV)

	// andesite

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/andesite')
		.itemInputs('gtceu:andesite_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:andesite')
		.duration(20)
		.EUt(LV)

	// diorite

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/diorite')
		.itemInputs('gtceu:diorite_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:diorite')
		.duration(20)
		.EUt(LV)

	// deepslate

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/deepslate')
		.itemInputs('gtceu:deepslate_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:deepslate')
		.duration(20)
		.EUt(LV)

	// basalt

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/basalt')
		.itemInputs('gtceu:basalt_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:basalt')
		.duration(20)
		.EUt(LV)

	// stone

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/stone')
		.itemInputs('gtceu:stone_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:stone')
		.duration(20)
		.EUt(LV)

	// silicon

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/silicon')
		.itemInputs('gtceu:silicon_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('ae2:silicon')
		.duration(20)
		.EUt(LV)

	// ender_pearl

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/ender_pearl')
		.itemInputs('2x gtceu:ender_pearl_dust')
		.inputFluids(Fluid.of('minecraft:water', 250))
		.itemOutputs('minecraft:ender_pearl')
		.duration(20)
		.EUt(LV)

	// conduit_binder

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/conduit_binder')
		.itemInputs('enderio:conduit_binder_composite')
		.inputFluids(Fluid.of('minecraft:water', 125))
		.itemOutputs('2x enderio:conduit_binder')
		.duration(20)
		.EUt(ULV)

	// mythic_material

	event.recipes.gtceu
		.autoclave('kubejs:autoclave/mythic_material')
		.itemInputs('gtceu:iv_field_generator')
		.inputFluids(Fluid.of('gtceu:rhodium_sulfate', 1000))
		.itemOutputs('1x apotheosis:mythic_material')
		.duration(2000)
		.EUt(IV)
}) //End Of File
