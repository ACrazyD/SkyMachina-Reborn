ServerEvents.recipes((e) => {
	// yeta_wrench
	e.shaped('enderio:yeta_wrench', [' A ', 'CBA', 'AD '], {
		A: 'gtceu:invar_rod',
		B: 'gtceu:iron_ring',
		C: '#forge:tools/wrenches',
		D: '#forge:tools/hammers',
	})

	// painting_machine
	e.shaped('enderio:painting_machine', ['ABA', 'CDC', 'EFE'], {
		A: 'gtceu:lv_electric_piston',
		B: 'gtceu:empty_spray_can',
		C: '#forge:dyes/white',
		D: 'gtceu:lv_machine_hull',
		E: 'gtceu:lv_electric_motor',
		F: '#gtceu:circuits/lv',
	})
}) //End Of File
