console.info('Remover: Registering Removed Items...')
ServerEvents.recipes((e) => {

	//FullMods
	// AE2
	e.remove({ mod: 'ae2' })
	e.remove({ mod: 'ae2additions' })
	e.remove({ mod: 'megacells' })
	e.remove({ mod: 'ae2insertexportcard'})
	e.remove({ mod: 'appliede'})
	e.remove({ mod: 'appmek'})
	e.remove({ mod: 'ae2wtlib'})
	e.remove({ mod: 'mae2'})
	e.remove({ mod: 'ae2netanalyser'})

	// Create
	//e.remove({ mod: 'create' })
	//e.remove({ mod: 'createaddition' })
	//e.remove({ mod: 'createlowheated'})
	//e.remove({ mod: 'create_optical'})
	e.remove({ mod: 'create_new_age'})
	//e.remove({ mod: 'createoreexcavation'})
	//e.remove({ mod: 'create_ore_excavtion_plus'})
	//e.remove({ mod: 'numismatics'})
	e.remove({ mod: 'create_enchantment_industry'})
	e.remove({ mod: 'createappliedkinetics'})
	//e.remove({ mod: 'create_connected'})
	//e.remove({ mod: 'createsifter'})
	e.remove({ mod: 'tfmg'})
	//e.remove({ mod: 'vintageimprovements'})
	e.remove({ mod: 'createmetallurgy'})
	//e.remove({ mod: 'railways'})

	// Mekanism
	e.remove({ mod: 'mekanism' })
	e.remove({ mod: 'mekanismgenerators' })
	e.remove({ mod: 'mekanismtools' })
	e.remove({ mod: 'mekanismadditions' })
	e.remove({ mod: 'mekanism_turrents'})

	// Thermal
	e.remove({ mod: 'thermal'})

	// Other
	e.remove({ mod: 'apotheosis'})
	e.remove({ mod: 'apotheotic'})
	e.remove({ mod: 'torchmaster'})
	e.remove({ mod: 'functionalstorage'})
	e.remove({ mod: 'sophisticatedbackpacks'})
	e.remove({ mod: 'sophisticatedstorage'})

	// ProjectE
	e.remove({ mod: 'projecte' })

	//Stray Items Or OneOffs
	e.remove({ id: 'kubejs:dust' })


})//End Of File