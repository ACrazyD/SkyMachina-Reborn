ServerEvents.recipes((e) => {
	// ender_tank
	e.remove({ output: 'endertanks:ender_tank' })
	e.shaped('endertanks:ender_tank', ['ABA', 'CDC', 'AEA'], {
		A: '#forge:rods/steel',
		B: '#minecraft:wool',
		C: '#forge:plates/rubber',
		D: 'gtceu:steel_drum',
		E: 'gtceu:ender_pearl_dust',
	})

	// ender_chest
	e.remove({ output: 'enderchests:ender_chest' })
	e.shaped('enderchests:ender_chest', ['ABA', 'CDC', 'AEA'], {
		A: '#forge:rods/steel',
		B: '#minecraft:wool',
		C: '#forge:plates/rubber',
		D: 'gtceu:steel_crate',
		E: '#forge:dusts/ender_pearl',
	})

	// ender_bucket
	e.remove({ output: 'endertanks:ender_bucket' })
	e.shaped('endertanks:ender_bucket', ['ABA', 'BCB', 'ADA'], {
		A: '#forge:rings/rubber',
		B: '#forge:plates/steel',
		C: '#forge:ender_pearls',
		D: '#minecraft:wool',
	})

	// ender_bag
	e.remove({ output: 'enderchests:ender_bag' })
	e.shaped('enderchests:ender_bag', ['ABA', 'ECE', 'ADA'], {
		A: '#forge:plates/rubber',
		B: '#forge:rings/steel',
		C: 'enderchests:ender_pouch',
		D: '#minecraft:wool',
		E: '#forge:string',
	})
}) //End Of File
