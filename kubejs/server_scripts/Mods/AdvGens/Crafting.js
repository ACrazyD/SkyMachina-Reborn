ServerEvents.recipes((e) => {
	// upgrade_kit
	e.remove({ output: 'advgenerators:upgrade_kit' })
	e.shaped('advgenerators:upgrade_kit', ['   ', 'AB ', '   '], {
		A: '#forge:tools/hammers',
		B: 'advgenerators:iron_frame',
	})
}) //End Of File
