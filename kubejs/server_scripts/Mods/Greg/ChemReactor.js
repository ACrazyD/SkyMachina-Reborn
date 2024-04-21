ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920
	let IV = 7680

	// soul_sand

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/soul_sand')
		.itemInputs('#forge:sand')
		.itemInputs('wstweaks:fragment')
		.inputFluids(Fluid.of('gtceu:nitric_acid', 250))
		.itemOutputs('minecraft:soul_sand')
		.duration(100)
		.EUt(MV)

	// soul_soil

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/soul_soil')
		.itemInputs('#minecraft:dirt')
		.itemInputs('wstweaks:fragment')
		.inputFluids(Fluid.of('gtceu:nitric_acid', 250))
		.itemOutputs('minecraft:soul_soil')
		.duration(100)
		.EUt(MV)

	// flawless_budding_quartz

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/flawless_budding_quartz')
		.itemInputs('#forge:storage_blocks/certus_quartz')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
		.itemOutputs('ae2:flawless_budding_quartz')
		.duration(100)
		.EUt(MV)

	// bedrock

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/bedrock')
		.itemInputs('8x gtceu:black_steel_dust')
		.inputFluids(Fluid.of('gtceu:kanthal', 1296))
		.itemOutputs('minecraft:bedrock')
		.duration(100)
		.EUt(MV)

	// sculk

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/sculk')
		.itemInputs('ex_hammers:dust')
		.itemInputs('gtceu:carbon_dust')
		.inputFluids(Fluid.of('mob_grinding_utils:fluid_xp', 125))
		.itemOutputs('minecraft:sculk')
		.duration(20)
		.EUt(LV)

	// sculk_catalyst

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/sculk_catalyst')
		.itemInputs('minecraft:sculk')
		.itemInputs('gtceu:ender_pearl_dust')
		.inputFluids(Fluid.of('gtceu:carbon', 125))
		.itemOutputs('minecraft:sculk_catalyst')
		.duration(20)
		.EUt(LV)

	// sculk_sensor

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/sculk_sensor')
		.itemInputs('minecraft:sculk')
		.itemInputs('minecraft:redstone')
		.inputFluids(Fluid.of('gtceu:antimony', 125))
		.itemOutputs('minecraft:sculk_sensor')
		.duration(20)
		.EUt(LV)

	// sculk_shrieker

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/sculk_shrieker')
		.itemInputs('minecraft:sculk')
		.itemInputs('gtceu:ender_eye_dust')
		.inputFluids(Fluid.of('gtceu:antimony', 125))
		.itemOutputs('minecraft:sculk_shrieker')
		.duration(20)
		.EUt(LV)

	// crying_obsidian

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/crying_obsidian')
		.itemInputs('minecraft:obsidian')
		.inputFluids(Fluid.of('gtceu:lead', 288))
		.itemOutputs('minecraft:crying_obsidian')
		.duration(20)
		.EUt(MV)

	// leather

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/leather')
		.itemInputs('2x gtceu:bio_chaff')
		.itemInputs('1x enderio:conduit_binder_composite')
		.inputFluids(Fluid.of('gtceu:distilled_water', 250))
		.itemOutputs('minecraft:leather')
		.duration(100)
		.EUt(LV)

	// moss_block

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/moss_block')
		.itemInputs('4x gtceu:bio_chaff')
		.itemInputs('1x minecraft:dirt')
		.inputFluids(Fluid.of('gtceu:distilled_water', 500))
		.itemOutputs('2x minecraft:moss_block')
		.duration(100)
		.EUt(LV)

	// lily_pad

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/lily_pad')
		.itemInputs('4x gtceu:bio_chaff')
		.itemInputs('1x #minecraft:leaves')
		.inputFluids(Fluid.of('gtceu:distilled_water', 500))
		.itemOutputs('2x minecraft:lily_pad')
		.duration(100)
		.EUt(LV)

	// cobweb

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/cobweb')
		.itemInputs('4x gtceu:bio_chaff')
		.itemInputs('5x #forge:string')
		.inputFluids(Fluid.of('gtceu:glue', 250))
		.itemOutputs('1x minecraft:cobweb')
		.duration(100)
		.EUt(LV)

	// nether_star_dust

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/nether_star_dust')
		.itemInputs('1x gtceu:rarest_metal_mixture_dust')
		.itemInputs('3x gtceu:calcium_chloride_dust')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
		.itemOutputs('1x gtceu:nether_star_dust')
		.duration(200)
		.EUt(EV)

	// elytra

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/elytra')
		.itemInputs('8x #forge:bolts/stainless_steel')
		.itemInputs('4x #forge:rods/long/stainless_steel')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1296))
		.inputFluids(Fluid.of('gtceu:polyvinyl_chloride', 576))
		.itemOutputs('1x minecraft:elytra')
		.duration(200)
		.EUt(HV)

	// uncommon_material

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/uncommon_material')
		.itemInputs('4x gtceu:carbon_fibers')
		.itemInputs('4x #forge:dusts/green_sapphire')
		.inputFluids(Fluid.of('gtceu:beryllium', 144))
		.itemOutputs('2x apotheosis:uncommon_material')
		.duration(200)
		.EUt(MV)

	// rare_material

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/rare_material')
		.itemInputs('1x #forge:ingots/blue_steel')
		.itemInputs('1x #forge:exquisite_gems')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 144))
		.itemOutputs('1x apotheosis:rare_material')
		.duration(200)
		.EUt(HV)

	// epic_material

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/epic_material')
		.itemInputs('3x #forge:dusts/amethyst')
		.itemInputs('3x #forge:dusts/ender_eye')
		.inputFluids(Fluid.of('gtceu:ruby_slurry', 144))
		.inputFluids(Fluid.of('gtceu:sapphire_slurry', 144))
		.inputFluids(Fluid.of('gtceu:green_sapphire_slurry', 144))
		.itemOutputs('3x apotheosis:epic_material')
		.duration(200)
		.EUt(EV)

	// heart_of_the_sea

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/heart_of_the_sea')
		.itemInputs('1x minecraft:nautilus_shell')
		.itemInputs('1x gtceu:quantum_eye')
		.inputFluids(Fluid.of('gtceu:radon', 1000))
		.inputFluids(Fluid.of('gtceu:distilled_water', 1000))
		.itemOutputs('1x minecraft:heart_of_the_sea')
		.duration(200)
		.EUt(HV)

	// nautilus_shell

	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/nautilus_shell')
		.itemInputs('3x #forge:gems/quartzite')
		.inputFluids(Fluid.of('gtceu:acetic_acid', 500))
		.inputFluids(Fluid.of('gtceu:salt_water', 500))
		.inputFluids(Fluid.of('gtceu:distilled_water', 500))
		.itemOutputs('1x minecraft:nautilus_shell')
		.duration(200)
		.EUt(MV)

	// advanced_pressure_valve

	event.remove({ output: 'advgenerators:advanced_pressure_valve' })
	event.recipes.gtceu
		.chemical_reactor('kubejs:chemical_reactor/advanced_pressure_valve')
		.itemInputs('1x advgenerators:pressure_valve')
		.itemInputs('4x #forge:dusts/lithium_chloride')
		.inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
		.itemOutputs('1x advgenerators:advanced_pressure_valve')
		.duration(200)
		.EUt(IV)
}) //End Of File
