console.info('Mob Grinding Utils: Registering recipes...')
ServerEvents.recipes((e) => {
	// golden_egg
	e.shaped('mob_grinding_utils:golden_egg', [' A ', 'ABA', ' A '], {
		A: '#forge:rings/gold',
		B: '#forge:storage_blocks/gold',
	})

	// rotten_egg
	e.shaped('mob_grinding_utils:rotten_egg', [' A ', 'ABA', ' A '], {
		A: '#forge:rings/steel',
		B: '#forge:storage_blocks/steel',
	})

	// saw

	e.remove({ output: 'mob_grinding_utils:saw' })
	e.shaped('mob_grinding_utils:saw', ['CBC', 'BDB', 'FEF'], {
		B: 'gtceu:diamond_buzz_saw_blade',
		C: 'mob_grinding_utils:spikes',
		D: '#forge:storage_blocks/red_alloy',
		E: 'gtceu:steel_gearbox',
		F: '#gtceu:circuits/lv',
	})

	// fan
	e.remove({ output: 'mob_grinding_utils:fan' })
	e.shaped('mob_grinding_utils:fan', ['CEC', 'DBD', 'CAC'], {
		A: 'gtceu:steel_gearbox',
		B: '#forge:rotors/steel',
		C: '#forge:plates/thorium',
		D: '#forge:plates/rubber',
		E: '#gtceu:circuits/lv',
	})

	// spikes
	e.remove({ output: 'mob_grinding_utils:spikes' })
	e.shaped('mob_grinding_utils:spikes', [' D ', 'DCD', 'CBC'], {
		B: '#forge:storage_blocks/thorium',
		C: '#forge:plates/rubber',
		D: 'gtceu:steel_drill_head',
	})
}) //End Of File
