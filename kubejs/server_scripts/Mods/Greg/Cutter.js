console.info('Greg Cutter: Registering recipes...')
ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920

	// sculk_vein

	event.recipes.gtceu
		.cutter('kubejs:cutter/sculk_vein')
		.itemInputs('minecraft:sculk')
		.inputFluids(Fluid.of('minecraft:water', 80))
		.itemOutputs('9x minecraft:sculk_vein')
		.duration(800)
		.EUt(LV)

	// sculk_vein

	event.recipes.gtceu
		.cutter('kubejs:cutter/sculk_vein_2')
		.itemInputs('minecraft:sculk')
		.inputFluids(Fluid.of('gtceu:distilled_water', 60))
		.itemOutputs('9x minecraft:sculk_vein')
		.duration(600)
		.EUt(LV)

	// sculk_vein

	event.recipes.gtceu
		.cutter('kubejs:cutter/sculk_vein_3')
		.itemInputs('minecraft:sculk')
		.inputFluids(Fluid.of('gtceu:lubricant', 20))
		.itemOutputs('9x minecraft:sculk_vein')
		.duration(400)
		.EUt(LV)

	// obsidian_plate

	event.recipes.gtceu
		.cutter('kubejs:cutter/obsidian_plate')
		.itemInputs('minecraft:obsidian')
		.inputFluids(Fluid.of('minecraft:water', 80))
		.itemOutputs('4x gtceu:obsidian_plate')
		.duration(800)
		.EUt(MV)

	// obsidian_plate

	event.recipes.gtceu
		.cutter('kubejs:cutter/obsidian_plate_2')
		.itemInputs('minecraft:obsidian')
		.inputFluids(Fluid.of('gtceu:distilled_water', 60))
		.itemOutputs('4x gtceu:obsidian_plate')
		.duration(600)
		.EUt(MV)

	// obsidian_plate

	event.recipes.gtceu
		.cutter('kubejs:cutter/obsidian_plate_3')
		.itemInputs('minecraft:obsidian')
		.inputFluids(Fluid.of('gtceu:lubricant', 20))
		.itemOutputs('4x gtceu:obsidian_plate')
		.duration(400)
		.EUt(MV)

	// oak_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/oak_planks')
		.itemInputs('#minecraft:oak_logs')
		.itemOutputs('6x minecraft:oak_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// dark_oak_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/dark_oak_planks')
		.itemInputs('#minecraft:dark_oak_logs')
		.itemOutputs('6x minecraft:dark_oak_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// spruce_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/spruce_planks')
		.itemInputs('#minecraft:spruce_logs')
		.itemOutputs('6x minecraft:spruce_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// birch_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/birch_planks')
		.itemInputs('#minecraft:birch_logs')
		.itemOutputs('6x minecraft:birch_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// acacia_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/acacia_planks')
		.itemInputs('#minecraft:acacia_logs')
		.itemOutputs('6x minecraft:acacia_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// jungle_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/jungle_planks')
		.itemInputs('#minecraft:jungle_logs')
		.itemOutputs('6x minecraft:jungle_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// mangrove_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/mangrove_planks')
		.itemInputs('#minecraft:mangrove_logs')
		.itemOutputs('6x minecraft:mangrove_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// cherry_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/cherry_planks')
		.itemInputs('#minecraft:cherry_logs')
		.itemOutputs('6x minecraft:cherry_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// bamboo_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/bamboo_planks')
		.itemInputs('#minecraft:bamboo_blocks')
		.itemOutputs('6x minecraft:bamboo_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// crimson_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/crimson_planks')
		.itemInputs('#minecraft:crimson_stems')
		.itemOutputs('6x minecraft:crimson_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// warped_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/warped_planks')
		.itemInputs('#minecraft:warped_stems')
		.itemOutputs('6x minecraft:warped_planks')
		.itemOutputs('1x gtceu:wood_dust')
		.duration(60)
		.EUt(LV)

	// rubber_planks

	event.recipes.gtceu
		.cutter('kubejs:cutter/rubber_planks')
		.itemInputs('gtceu:rubber_log')
		.itemOutputs('8x gtceu:rubber_planks')
		.itemOutputs('1x gtceu:raw_rubber_dust')
		.duration(60)
		.EUt(LV)
}) //End Of File
