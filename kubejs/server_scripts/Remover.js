//priority: 1000
console.log('Removing the World...')

ServerEvents.recipes((e) => {
	//GREG - DONT LEAVE THIS DISABLED
	//e.remove({ mod: 'gtceu' })

	//AE2 + Addons
	e.remove({ mod: 'ae2_mega_things' })
	e.remove({ mod: 'ae2wtlib' })
	e.remove({ mod: 'ae2' })
	e.remove({ mod: 'megacells' })
    e.remove({ mod: 'expatternprovider'})

	//Create + Addons
	e.remove({ mod: 'create' })
	e.remove({ mod: 'create_hc' })
	e.remove({ mod: 'create_optical' })
	e.remove({ mod: 'create_connected' })
	e.remove({ mod: 'railways' })
	e.remove({ mod: 'tfmg' })
	e.remove({ mod: 'vintageimprovements' })
	e.remove({ mod: 'moreburners' })
	e.remove({ mod: 'petrolsparts' })
    e.remove({ mod: 'createoreexcavation'})
    e.remove({ mod: 'create_ore_excavation_plus'})
    e.remove({ mod: 'createmetallurgy'})

	//Immersive Engineering + Addons
	e.remove({ mod: 'immersiveengineering' })
	e.remove({ mod: 'immersivepetroleum' })
	e.remove({ mod: 'more_immersive_wires' })
	e.remove({ mod: 'immersivegeology' })
	e.remove({ mod: 'immersive_aircraft' }) //Yes i know this isnt really an addon.. Bugger off

	//Random Stuff
	e.remove({ mod: 'apotheosis' })
	e.remove({ mod: 'functionalstorage' })
	e.remove({ mod: 'sophisticatedbackpacks' })
	e.remove({ mod: 'sophisticatedstorage' })
	e.remove({ mod: 'tconstruct' })
    e.remove({ mod: 'tinkers_things'})
    e.remove({ mod: 'capsule'})
    e.remove({ mod: 'comforts'})
    e.remove({ mod: 'adchimneys'})
    e.remove({ mod: 'compactmachines'})
    e.remove({ mod: 'enderio'})
    e.remove({ mod: 'extendedcrafting'})
    e.remove({ mod: 'ironfurnaces'})
    e.remove({ mod: 'laserio'})
    e.remove({ mod: "mekanism"})
    e.remove({ mod: 'mekanismgenerators'})
    e.remove({ mod: 'mekanismtools'})
    e.remove({ mod: 'mekaweapons'})
    e.remove({ mod: "adpother"})
    e.remove({ mod: 'tempad'})
    e.remove({ mod: 'exdorum'})
    e.remove({ mod: 'exmachinis'})
    e.remove({ mod: 'excompressum'})
    e.remove({ mod: 'adfinders'})

}) //EF
