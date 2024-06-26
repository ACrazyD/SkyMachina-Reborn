console.info('Greg Assembly Line: Registering recipes...')
ServerEvents.recipes((event) => {
	let ULV = 8
	let LV = 30
	let MV = 120
	let HV = 480
	let EV = 1920
	let IV = 7680

	// wither_skeleton_skull
	event.recipes.gtceu
		.assembler('kubejs:assembler/wither_skeleton_skull')
		.itemInputs('4x wstweaks:fragment')
		.itemInputs('#forge:storage_blocks/bone')
		.inputFluids(Fluid.of('gtceu:sulfuric_acid', 250))
		.itemOutputs('minecraft:wither_skeleton_skull')
		.duration(200)
		.EUt(HV)

	// entity_conveyor
	event.remove({ output: 'mob_grinding_utils:entity_conveyor' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/entity_conveyor')
		.itemInputs('4x #forge:plates/thorium')
		.itemInputs('4x #forge:rods/thorium')
		.itemInputs('2x #forge:fine_wires/red_alloy')
		.itemInputs('2x gtceu:sticky_resin')
		.inputFluids(Fluid.of('gtceu:rubber', 1296))
		.itemOutputs('4x mob_grinding_utils:entity_conveyor')
		.duration(200)
		.EUt(LV)

	// tank
	event.remove({ output: 'mob_grinding_utils:tank' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/tank')
		.itemInputs('4x #forge:plates/rubber')
		.itemInputs('4x #forge:plates/thorium')
		.inputFluids(Fluid.of('gtceu:glass', 576))
		.itemOutputs('mob_grinding_utils:tank')
		.duration(200)
		.EUt(LV)

	// jumbo_tank
	event.remove({ output: 'mob_grinding_utils:jumbo_tank' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/jumbo_tank')
		.itemInputs('4x mob_grinding_utils:tank')
		.itemInputs('2x #gtceu:circuits/mv')
		.itemInputs('2x #forge:gears/aluminium')
		.itemInputs('4x #forge:plates/stainless_steel')
		.inputFluids(Fluid.of('gtceu:thorium', 2592))
		.itemOutputs('mob_grinding_utils:jumbo_tank')
		.duration(200)
		.EUt(MV)

	// absorption_hopper
	event.remove({ output: 'mob_grinding_utils:absorption_hopper' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/absorption_hopper')
		.itemInputs('minecraft:hopper')
		.itemInputs('gtceu:mv_field_generator')
		.itemInputs('2x #forge:small_gears/aluminium')
		.itemInputs('4x #forge:plates/thorium')
		.inputFluids(Fluid.of('gtceu:thorium', 1296))
		.itemOutputs('mob_grinding_utils:absorption_hopper')
		.duration(200)
		.EUt(MV)

	// ender_inhibitor_on
	event.remove({ output: 'mob_grinding_utils:ender_inhibitor_on' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/ender_inhibitor_on')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('#forge:gems/ender_eye')
		.itemInputs('2x #forge:plates/thorium')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:ender_inhibitor_on')
		.duration(200)
		.EUt(LV)

	// tinted_glass
	event.remove({ output: 'mob_grinding_utils:tinted_glass' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/tinted_glass')
		.itemInputs('#forge:glass/colorless')
		.itemInputs('2x gtceu:obsidian_dust')
		.inputFluids(Fluid.of('gtceu:thorium', 288))
		.itemOutputs('mob_grinding_utils:tinted_glass')
		.duration(60)
		.EUt(LV)

	// fan_upgrade_width
	event.remove({ output: 'mob_grinding_utils:fan_upgrade_width' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/fan_upgrade_width')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:springs/gold')
		.itemInputs('#forge:rotors/steel')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:fan_upgrade_width')
		.duration(200)
		.EUt(LV)

	// fan_upgrade_speed
	event.remove({ output: 'mob_grinding_utils:fan_upgrade_speed' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/fan_upgrade_speed')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:gears/bronze')
		.itemInputs('#forge:rotors/steel')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:fan_upgrade_speed')
		.duration(200)
		.EUt(LV)

	// fan_upgrade_height
	event.remove({ output: 'mob_grinding_utils:fan_upgrade_height' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/fan_upgrade_height')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/bronze')
		.itemInputs('#forge:rotors/steel')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:fan_upgrade_height')
		.duration(200)
		.EUt(LV)

	// absorption_upgrade
	event.remove({ output: 'mob_grinding_utils:absorption_upgrade' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/absorption_upgrade')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:ender_pearls')
		.itemInputs('minecraft:hopper')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:absorption_upgrade')
		.duration(200)
		.EUt(LV)

	// saw_upgrade_arthropod
	event.remove({ output: 'mob_grinding_utils:saw_upgrade_arthropod' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/saw_upgrade_arthropod')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/gold')
		.itemInputs('4x minecraft:spider_eye')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:saw_upgrade_arthropod')
		.duration(200)
		.EUt(LV)

	// saw_upgrade_beheading
	event.remove({ output: 'mob_grinding_utils:saw_upgrade_beheading' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/saw_upgrade_beheading')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/gold')
		.itemInputs('4x gtceu:bronze_buzz_saw_blade')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:saw_upgrade_beheading')
		.duration(200)
		.EUt(LV)

	// saw_upgrade_fire
	event.remove({ output: 'mob_grinding_utils:saw_upgrade_fire' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/saw_upgrade_fire')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/gold')
		.itemInputs('4x gtceu:firebrick')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:saw_upgrade_fire')
		.duration(200)
		.EUt(LV)

	// saw_upgrade_looting
	event.remove({ output: 'mob_grinding_utils:saw_upgrade_looting' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/saw_upgrade_looting')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/gold')
		.itemInputs('4x #forge:flawless_gems/lapis')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:saw_upgrade_looting')
		.duration(200)
		.EUt(LV)

	// saw_upgrade_sharpness
	event.remove({ output: 'mob_grinding_utils:saw_upgrade_sharpness' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/saw_upgrade_sharpness')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/gold')
		.itemInputs('4x gtceu:bronze_turbine_blade')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:saw_upgrade_sharpness')
		.duration(200)
		.EUt(LV)

	// saw_upgrade_smite
	event.remove({ output: 'mob_grinding_utils:saw_upgrade_smite' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/saw_upgrade_smite')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/gold')
		.itemInputs('4x #forge:rods/long/silver')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:saw_upgrade_smite')
		.duration(200)
		.EUt(LV)

	// xp_solidifier_upgrade
	event.remove({ output: 'mob_grinding_utils:xp_solidifier_upgrade' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/xp_solidifier_upgrade')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/gold')
		.itemInputs('4x mob_grinding_utils:solid_xp_baby')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:xp_solidifier_upgrade')
		.duration(200)
		.EUt(LV)

	// spawner_upgrade_width
	event.remove({ output: 'mob_grinding_utils:spawner_upgrade_width' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/spawner_upgrade_width')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:springs/gold')
		.itemInputs('4x #forge:dusts/blaze')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:spawner_upgrade_width')
		.duration(200)
		.EUt(LV)

	// spawner_upgrade_height
	event.remove({ output: 'mob_grinding_utils:spawner_upgrade_height' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/spawner_upgrade_height')
		.itemInputs('#forge:plates/red_alloy')
		.itemInputs('2x #forge:foils/gold')
		.itemInputs('4x #forge:dusts/blaze')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('mob_grinding_utils:spawner_upgrade_height')
		.duration(200)
		.EUt(LV)

	// spawner
	event.remove({ output: 'minecraft:spawner' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/spawner')
		.itemInputs('mob_grinding_utils:entity_spawner')
		.itemInputs('8x #forge:rods/steel')
		.itemInputs('mob_grinding_utils:solid_xp_block')
		.itemInputs('gtceu:hv_field_generator')
		.inputFluids(Fluid.of('gtceu:rubber', 1296))
		.itemOutputs('minecraft:spawner')
		.duration(100)
		.EUt(HV)

	// calculation_processor_press
	event.remove({ output: 'ae2:calculation_processor_press' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/calculation_processor_press')
		.itemInputs('gtceu:empty_mold')
		.itemInputs('#forge:gems/certus_quartz')
		.inputFluids(Fluid.of('gtceu:iron', 288))
		.itemOutputs('ae2:calculation_processor_press')
		.duration(100)
		.EUt(LV)

	// logic_processor_press
	event.remove({ output: 'ae2:logic_processor_press' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/logic_processor_press')
		.itemInputs('gtceu:empty_mold')
		.itemInputs('minecraft:gold_ingot')
		.inputFluids(Fluid.of('gtceu:iron', 288))
		.itemOutputs('ae2:logic_processor_press')
		.duration(100)
		.EUt(LV)

	// engineering_processor_press
	event.remove({ output: 'ae2:engineering_processor_press' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/engineering_processor_press')
		.itemInputs('gtceu:empty_mold')
		.itemInputs('minecraft:diamond')
		.inputFluids(Fluid.of('gtceu:iron', 288))
		.itemOutputs('ae2:engineering_processor_press')
		.duration(100)
		.EUt(LV)

	// silicon_processor_press
	event.remove({ output: 'ae2:silicon_processor_press' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/silicon_processor_press')
		.itemInputs('gtceu:empty_mold')
		.itemInputs('ae2:silicon')
		.inputFluids(Fluid.of('gtceu:iron', 288))
		.itemOutputs('ae2:silicon_press')
		.duration(100)
		.EUt(LV)

	// travel_anchor
	event.recipes.gtceu
		.assembler('kubejs:assembler/travel_anchor')
		.itemInputs('gtceu:lv_machine_hull')
		.itemInputs('minecraft:ender_pearl')
		.itemInputs('4x gtceu:invar_plate')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('travelanchors:travel_anchor')
		.duration(100)
		.EUt(LV)

	// fluid_tank
	event.recipes.gtceu
		.assembler('kubejs:assembler/fluid_tank')
		.itemInputs('gtceu:steel_drum')
		.itemInputs('#gtceu:circuits/lv')
		.itemInputs('gtceu:lv_electric_pump')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('enderio:fluid_tank')
		.duration(200)
		.EUt(LV)

	// pressurized_fluid_tank
	event.recipes.gtceu
		.assembler('kubejs:assembler/pressurized_fluid_tank')
		.itemInputs('gtceu:aluminium_drum')
		.itemInputs('#gtceu:circuits/mv')
		.itemInputs('gtceu:mv_electric_pump')
		.inputFluids(Fluid.of('gtceu:polyethylene', 288))
		.itemOutputs('enderio:pressurized_fluid_tank')
		.duration(200)
		.EUt(MV)

	// fluid_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/fluid_conduit')
		.itemInputs('2x #forge:plates/iron')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('3x enderio:fluid_conduit')
		.duration(100)
		.EUt(ULV)

	// pressurized_fluid_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/pressurized_fluid_conduit')
		.itemInputs('2x #forge:plates/steel')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('3x enderio:pressurized_fluid_conduit')
		.duration(100)
		.EUt(ULV)

	// ender_fluid_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/ender_fluid_conduit')
		.itemInputs('2x #forge:plates/aluminium')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('3x enderio:ender_fluid_conduit')
		.duration(100)
		.EUt(LV)

	// item_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/item_conduit')
		.itemInputs('2x #forge:plates/electrum')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('3x enderio:item_conduit')
		.duration(100)
		.EUt(LV)

	// redstone_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/redstone_conduit')
		.itemInputs('2x #forge:plates/red_alloy')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('3x enderio:redstone_conduit')
		.duration(100)
		.EUt(LV)

	// fluid_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/fluid_conduit_2')
		.itemInputs('2x #forge:plates/iron')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('6x enderio:fluid_conduit')
		.duration(100)
		.EUt(ULV)

	// pressurized_fluid_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/pressurized_fluid_conduit_2')
		.itemInputs('2x #forge:plates/steel')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('6x enderio:pressurized_fluid_conduit')
		.duration(100)
		.EUt(ULV)

	// ender_fluid_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/ender_fluid_conduit_2')
		.itemInputs('2x #forge:plates/aluminium')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('6x enderio:ender_fluid_conduit')
		.duration(100)
		.EUt(LV)

	// item_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/item_conduit_2')
		.itemInputs('2x #forge:plates/electrum')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('6x enderio:item_conduit')
		.duration(100)
		.EUt(LV)

	// redstone_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/redstone_conduit_2')
		.itemInputs('2x #forge:plates/red_alloy')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('6x enderio:redstone_conduit')
		.duration(100)
		.EUt(LV)

	// me_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/me_conduit')
		.itemInputs('2x #forge:gems/fluix')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('3x enderio:me_conduit')
		.duration(100)
		.EUt(LV)

	// me_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/me_conduit_2')
		.itemInputs('2x #forge:gems/fluix')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('6x enderio:me_conduit')
		.duration(100)
		.EUt(LV)

	// dense_me_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/dense_me_conduit')
		.itemInputs('2x ae2:fluix_block')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('3x enderio:dense_me_conduit')
		.duration(100)
		.EUt(LV)

	// dense_me_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/dense_me_conduit_2')
		.itemInputs('2x ae2:fluix_block')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('6x enderio:dense_me_conduit')
		.duration(100)
		.EUt(LV)

	// energy_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/energy_conduit')
		.itemInputs('2x #forge:plates/bronze')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:rubber', 144))
		.itemOutputs('3x enderio:energy_conduit')
		.duration(100)
		.EUt(LV)

	// energy_conduit
	event.recipes.gtceu
		.assembler('kubejs:assembler/energy_conduit_2')
		.itemInputs('2x #forge:plates/bronze')
		.itemInputs('#forge:glass')
		.itemInputs('2x enderio:conduit_binder')
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs('6x enderio:energy_conduit')
		.duration(100)
		.EUt(LV)

	// netherite_upgrade_smithing_template
	event.recipes.gtceu
		.assembler('kubejs:assembler/netherite_upgrade_smithing_template')
		.itemInputs('1x gtceu:netherrack_dust')
		.itemInputs('8x minecraft:diamond')
		.notConsumable('gtceu:plate_casting_mold')
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 288))
		.itemOutputs('minecraft:netherite_upgrade_smithing_template')
		.duration(200)
		.EUt(LV)

	// enchanter
	event.recipes.gtceu
		.assembler('kubejs:assembler/enchanter')
		.itemInputs('1x minecraft:enchanting_table')
		.itemInputs('2x #gtceu:circuits/mv')
		.itemInputs('4x #forge:double_plates/black_steel')
		.itemInputs('1x gtceu:black_steel_frame')
		.inputFluids(Fluid.of('gtceu:polyethylene', 1296))
		.itemOutputs('enderio:enchanter')
		.duration(200)
		.EUt(MV)

	// vacuum_chest
	event.recipes.gtceu
		.assembler('kubejs:assembler/vacuum_chest')
		.itemInputs('1x minecraft:chest')
		.itemInputs('1x gtceu:mv_sensor')
		.itemInputs('4x #forge:double_plates/black_steel')
		.itemInputs('1x gtceu:black_steel_frame')
		.inputFluids(Fluid.of('gtceu:polyethylene', 1296))
		.itemOutputs('enderio:vacuum_chest')
		.duration(200)
		.EUt(MV)

	// xp_vacuum
	event.recipes.gtceu
		.assembler('kubejs:assembler/xp_vacuum')
		.itemInputs('1x minecraft:chest')
		.itemInputs('1x gtceu:mv_emitter')
		.itemInputs('4x #forge:double_plates/black_steel')
		.itemInputs('1x gtceu:black_steel_frame')
		.inputFluids(Fluid.of('gtceu:polyethylene', 1296))
		.itemOutputs('enderio:xp_vacuum')
		.duration(200)
		.EUt(MV)

	// xp_obelisk
	event.recipes.gtceu
		.assembler('kubejs:assembler/xp_obelisk')
		.itemInputs('1x enderio:xp_vacuum')
		.itemInputs('1x enderio:experience_rod')
		.itemInputs('1x gtceu:mv_sensor')
		.itemInputs('4x #forge:plates/polyethylene')
		.inputFluids(Fluid.of('gtceu:black_steel', 1296))
		.itemOutputs('enderio:xp_obelisk')
		.duration(200)
		.EUt(MV)

	// experience_rod
	event.recipes.gtceu
		.assembler('kubejs:assembler/experience_rod')
		.itemInputs('1x travelanchors:travel_staff')
		.itemInputs('1x gtceu:mv_sensor')
		.itemInputs('1x gtceu:mv_emitter')
		.itemInputs('4x #forge:rods/aluminium')
		.inputFluids(Fluid.of('gtceu:polyethylene', 576))
		.itemOutputs('enderio:experience_rod')
		.duration(200)
		.EUt(MV)

	// basic_capacitor
	event.recipes.gtceu
		.assembler('kubejs:assembler/basic_capacitor')
		.itemInputs('1x #forge:foils/tin')
		.itemInputs('2x #forge:bolts/tin')
		.itemInputs('2x #forge:dusts/carbon')
		.inputFluids(Fluid.of('gtceu:polyethylene', 576))
		.itemOutputs('2x enderio:basic_capacitor')
		.duration(200)
		.EUt(LV)

	// shrinking_device
	event.remove({ output: 'shrink:shrinking_device' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/shrinking_device')
		.itemInputs('2x #forge:plates/steel')
		.itemInputs('2x #forge:foils/steel')
		.itemInputs('2x #forge:screws/steel')
		.itemInputs('4x #forge:fine_wires/copper')
		.itemInputs('1x gtceu:lv_emitter')
		.itemInputs('1x #minecraft:stone_buttons')
		.inputFluids(Fluid.of('gtceu:rubber', 576))
		.itemOutputs('1x shrink:shrinking_device')
		.duration(200)
		.EUt(LV)

	// block
	event.remove({ output: 'entangled:block' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/block')
		.itemInputs('1x #forge:storage_blocks/ender_pearl')
		.itemInputs('1x gtceu:lv_emitter')
		.itemInputs('1x gtceu:lv_sensor')
		.itemInputs('1x gtceu:steel_frame')
		.inputFluids(Fluid.of('gtceu:polyethylene', 1296))
		.itemOutputs('1x entangled:block')
		.duration(200)
		.EUt(LV)

	// basic_collector
	event.remove({ output: 'itemcollectors:basic_collector' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/basic_collector')
		.itemInputs('1x #forge:ender_pearls')
		.itemInputs('1x gtceu:lv_sensor')
		.itemInputs('1x #forge:rods/steel')
		.itemInputs('1x #forge:plates/obsidian')
		.inputFluids(Fluid.of('gtceu:thorium', 576))
		.itemOutputs('1x itemcollectors:basic_collector')
		.duration(100)
		.EUt(LV)
		.circuit(1)

	// advanced_collector
	event.remove({ output: 'itemcollectors:advanced_collector' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/advanced_collector')
		.itemInputs('1x #forge:gems/ender_eye')
		.itemInputs('1x gtceu:mv_sensor')
		.itemInputs('1x itemcollectors:basic_collector')
		.inputFluids(Fluid.of('gtceu:thorium', 576))
		.itemOutputs('1x itemcollectors:advanced_collector')
		.duration(100)
		.EUt(LV)
		.circuit(1)

	// iron_frame
	event.remove({ output: 'advgenerators:iron_frame' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/iron_frame')
		.itemInputs('4x #forge:rods/long/iron')
		.itemOutputs('1x advgenerators:iron_frame')
		.duration(50)
		.EUt(IV)

	// power_io
	event.remove({ output: 'advgenerators:power_io' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/power_io')
		.itemInputs('1x gtceu:iv_voltage_coil')
		.itemInputs('1x #forge:foils/red_alloy')
		.itemInputs('2x #forge:plates/polytetrafluoroethylene')
		.inputFluids(Fluid.of('gtceu:rubber', 288))
		.itemOutputs('1x advgenerators:power_io')
		.duration(100)
		.EUt(IV)

	// iron_tubing
	event.remove({ output: 'advgenerators:iron_tubing' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/iron_tubing')
		.itemInputs('1x #forge:rods/long/black_bronze')
		.itemInputs('4x #forge:springs/iron')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
		.itemOutputs('1x advgenerators:iron_tubing')
		.duration(50)
		.EUt(IV)

	// iron_wiring
	event.remove({ output: 'advgenerators:iron_wiring' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/iron_wiring')
		.itemInputs('1x #forge:rods/long/black_bronze')
		.itemInputs('16x #forge:fine_wires/red_alloy')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
		.itemOutputs('1x advgenerators:iron_wiring')
		.duration(50)
		.EUt(IV)

	// controller
	event.remove({ output: 'advgenerators:controller' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/controller')
		.itemInputs('1x #gtceu:circuits/iv')
		.itemInputs('8x #forge:fine_wires/silver')
		.itemInputs('8x #forge:bolts/sterling_silver')
		.itemInputs('1x gtceu:epoxy_circuit_board')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
		.itemOutputs('1x advgenerators:controller')
		.duration(100)
		.EUt(IV)

	// turbine_rotor_tier1
	event.remove({ output: 'advgenerators:turbine_rotor_tier1' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_rotor_tier1')
		.itemInputs('8x gtceu:stainless_steel_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemOutputs('1x advgenerators:turbine_rotor_tier1')
		.duration(100)
		.EUt(IV)

	// turbine_rotor_tier2
	event.remove({ output: 'advgenerators:turbine_rotor_tier2' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_rotor_tier2')
		.itemInputs('8x gtceu:titanium_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemOutputs('1x advgenerators:turbine_rotor_tier2')
		.duration(100)
		.EUt(IV)

	// turbine_rotor_tier3
	event.remove({ output: 'advgenerators:turbine_rotor_tier3' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_rotor_tier3')
		.itemInputs('8x gtceu:tungsten_steel_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemOutputs('1x advgenerators:turbine_rotor_tier3')
		.duration(100)
		.EUt(IV)

	// turbine_rotor_tier4
	event.remove({ output: 'advgenerators:turbine_rotor_tier4' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_rotor_tier4')
		.itemInputs('8x gtceu:rhodium_plated_palladium_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemOutputs('1x advgenerators:turbine_rotor_tier4')
		.duration(100)
		.EUt(IV)

	// turbine_rotor_tier5
	event.remove({ output: 'advgenerators:turbine_rotor_tier5' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_rotor_tier5')
		.itemInputs('8x gtceu:naquadah_alloy_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemOutputs('1x advgenerators:turbine_rotor_tier5')
		.duration(100)
		.EUt(IV)

	// turbine_kit_tier2
	event.remove({ output: 'advgenerators:turbine_kit_tier2' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_kit_tier2')
		.itemInputs('8x gtceu:titanium_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('1x advgenerators:upgrade_kit')
		.itemOutputs('1x advgenerators:turbine_kit_tier2')
		.duration(100)
		.EUt(IV)
		.circuit(1)

	// turbine_kit_tier3
	event.remove({ output: 'advgenerators:turbine_kit_tier3' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_kit_tier3')
		.itemInputs('8x gtceu:tungsten_steel_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('1x advgenerators:upgrade_kit')
		.itemOutputs('1x advgenerators:turbine_kit_tier3')
		.duration(100)
		.EUt(IV)
		.circuit(1)

	// turbine_kit_tier4
	event.remove({ output: 'advgenerators:turbine_kit_tier4' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_kit_tier4')
		.itemInputs('8x gtceu:rhodium_plated_palladium_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('1x advgenerators:upgrade_kit')
		.itemOutputs('1x advgenerators:turbine_kit_tier4')
		.duration(100)
		.EUt(IV)
		.circuit(1)

	// turbine_kit_tier5
	event.remove({ output: 'advgenerators:turbine_kit_tier5' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/turbine_kit_tier5')
		.itemInputs('8x gtceu:naquadah_alloy_turbine_blade')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('1x advgenerators:upgrade_kit')
		.itemOutputs('1x advgenerators:turbine_kit_tier5')
		.duration(100)
		.EUt(IV)
		.circuit(1)

	// capacitor_kit_tier2
	event.remove({ output: 'advgenerators:capacitor_kit_tier2' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/capacitor_kit_tier2')
		.itemInputs('1x gtceu:iv_lapotronic_battery')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('1x advgenerators:upgrade_kit')
		.itemOutputs('1x advgenerators:capacitor_kit_tier2')
		.duration(100)
		.EUt(IV)

	// capacitor_kit_tier3
	event.remove({ output: 'advgenerators:capacitor_kit_tier3' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/capacitor_kit_tier3')
		.itemInputs('1x gtceu:luv_lapotronic_battery')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('1x advgenerators:upgrade_kit')
		.itemOutputs('1x advgenerators:capacitor_kit_tier3')
		.duration(100)
		.EUt(IV)

	// fuel_turbine_controller
	event.remove({ output: 'advgenerators:fuel_turbine_controller' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/fuel_turbine_controller')
		.itemInputs('1x gtceu:iv_machine_hull')
		.itemInputs('1x advgenerators:controller')
		.itemInputs('4x advgenerators:iron_tubing')
		.itemInputs('4x advgenerators:iron_wiring')
		.itemInputs('4x advgenerators:iron_frame')
		.inputFluids(Fluid.of('gtceu:vanadium_gallium', 1296))
		.itemOutputs('1x advgenerators:fuel_turbine_controller')
		.duration(100)
		.EUt(IV)

	// steam_turbine_controller
	event.remove({ output: 'advgenerators:steam_turbine_controller' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/steam_turbine_controller')
		.itemInputs('1x gtceu:iv_machine_hull')
		.itemInputs('1x advgenerators:controller')
		.itemInputs('4x advgenerators:iron_tubing')
		.itemInputs('4x advgenerators:iron_wiring')
		.itemInputs('4x advgenerators:iron_frame')
		.inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 1296))
		.itemOutputs('1x advgenerators:steam_turbine_controller')
		.duration(100)
		.EUt(IV)

	// syngas_controller
	event.remove({ output: 'advgenerators:syngas_controller' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/syngas_controller')
		.itemInputs('1x gtceu:iv_machine_hull')
		.itemInputs('1x advgenerators:controller')
		.itemInputs('1x advgenerators:pressure_valve')
		.itemInputs('4x advgenerators:iron_tubing')
		.itemInputs('4x advgenerators:iron_wiring')
		.itemInputs('4x advgenerators:iron_frame')
		.inputFluids(Fluid.of('gtceu:polyvinyl_butyral', 1296))
		.itemOutputs('1x advgenerators:syngas_controller')
		.duration(100)
		.EUt(IV)

	// exchanger_controller
	event.remove({ output: 'advgenerators:exchanger_controller' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/exchanger_controller')
		.itemInputs('1x gtceu:iv_machine_hull')
		.itemInputs('1x advgenerators:controller')
		.itemInputs('4x advgenerators:iron_tubing')
		.itemInputs('4x advgenerators:iron_wiring')
		.itemInputs('4x advgenerators:iron_frame')
		.inputFluids(Fluid.of('gtceu:cerium', 1296))
		.itemOutputs('1x advgenerators:exchanger_controller')
		.duration(100)
		.EUt(IV)

	// power_capacitor_tier1
	event.remove({ output: 'advgenerators:power_capacitor_tier1' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/power_capacitor_tier1')
		.itemInputs('1x gtceu:ev_lapotronic_battery')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('4x advgenerators:iron_wiring')
		.itemInputs('4x advgenerators:iron_frame')
		.itemOutputs('1x advgenerators:power_capacitor_tier1')
		.duration(100)
		.EUt(IV)

	// power_capacitor_tier2
	event.remove({ output: 'advgenerators:power_capacitor_tier2' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/power_capacitor_tier2')
		.itemInputs('1x gtceu:iv_lapotronic_battery')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('4x advgenerators:iron_wiring')
		.itemInputs('4x advgenerators:iron_frame')
		.itemOutputs('1x advgenerators:power_capacitor_tier2')
		.duration(100)
		.EUt(IV)

	// power_capacitor_tier3
	event.remove({ output: 'advgenerators:power_capacitor_tier3' })
	event.recipes.gtceu
		.assembler('kubejs:assembler/power_capacitor_tier3')
		.itemInputs('1x gtceu:luv_lapotronic_battery')
		.itemInputs('8x #forge:bolts/tungsten_steel')
		.itemInputs('4x advgenerators:iron_wiring')
		.itemInputs('4x advgenerators:iron_frame')
		.itemOutputs('1x advgenerators:power_capacitor_tier3')
		.duration(100)
		.EUt(IV)

	// steel_machine_casing
	event.recipes.gtceu
		.assembler('kubejs:assembler/steel_machine_casing')
		.itemInputs('8x #forge:plates/steel')
		.itemOutputs('1x gtceu:steel_machine_casing')
		.duration(25)
		.EUt(16)
		.circuit(4)

	// bronze_machine_casing
	event.recipes.gtceu
		.assembler('kubejs:assembler/bronze_machine_casing')
		.itemInputs('8x #forge:plates/bronze')
		.itemOutputs('1x gtceu:bronze_machine_casing')
		.duration(25)
		.EUt(16)
		.circuit(4)
}) //End Of File
