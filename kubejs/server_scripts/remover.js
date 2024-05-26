console.info('Remover: Registering Removed Items...')
ServerEvents.recipes((e) => {

	//Whyyy do i need this???
	e.remove({ id: 'vintageimprovements/kjs/b2pweegni7ej'})

	//BadCokeNoCocaine
	e.remove({ output: 'gtceu:coke_oven'})
	e.remove({ output: 'gtceu:coke_oven_hatch'})
	e.remove({ output: 'gtceu:coke_oven_bricks'})
	e.remove({ output: 'gtceu:compressed_coke_clay'})
	e.remove({ output: 'gtceu:coke_oven_brick'})

	//Jukebox
	e.remove({ id: 'gtceu:shaped/jukebox' })
	e.remove({ id: 'gtceu:shaped/note_block' })
	e.remove({ id: 'gtceu:assembler/note_block' })

	//EnderIO
	e.remove({ output: 'enderio:void_chassis' })
	e.remove({ output: 'ensouled_chassis' })

	//HyperBox
	e.remove({ output: 'hyperbox:hyperbox' })

	//Bad, No Glass!
	e.remove({ id: 'immersive_weathering:glass_from_vitrified_sand_smelting' })

	//IntegratedDynamics Stuffs
	e.remove({ output: 'integrateddynamics:mechanical_squeezer' })
	e.remove({ output: 'integrateddynamics:squeezer' })
	e.remove({ output: 'integrateddynamics:mechanical_drying_basin' })
	//Shh Im Not Ment to be here
	e.replaceInput(
		{ input: 'integrateddynamics:crystalized_menril_chunk' },
		'integrateddynamics:crystalized_menril_chunk',
		'kubejs:menril_diode'
	)

	//ReWooding The BadWoods
	e.remove({ id: 'wizards_reborn:shapeless/arcane_wood_planks' })
	e.remove({ id: 'wizards_reborn:shapeless/innocent_wood_planks' })
	e.remove({ id: 'create_dd:crafting/rose_planks' })
	e.remove({ id: 'create_dd:crafting/smoked_planks' })
	e.remove({ id: 'create_dd:crafting/spirit_planks' })
	e.remove({ id: 'create_dd:crafting/rubber_planks' })
	e.remove({ id: 'integrateddynamics:crafting/menril_planks' })

	//Create Stuffs
	e.remove({ id: 'createaddition:mechanical_crafting/electric_motor' })
	e.remove({ id: 'createaddition:mechanical_crafting/alternator' })

	//CB Stuffs
	e.remove({ id: 'chiselandbits:chisel_stone' })
	e.remove({ id: 'chiselandbits:chisel_iron' })
	e.remove({ id: 'chiselandbits:chisel_gold' })
	e.remove({ id: 'chiselandbits:chisel_diamond' })
	e.remove({ id: 'chiselandbits:chisel_netherite' })

	//ReBronzing
	e.remove({ id: 'gtceu:shapeless/dust_bronze' })
	e.remove({ id: 'gtceu:alloy_smelter/annealed_copper_dust_and_tin_ingot_into_bronze' })
	e.remove({ id: 'gtceu:alloy_smelter/annealed_copper_ingot_and_tin_ingot_into_bronze' })
	e.remove({ id: 'gtceu:alloy_smelter/annealed_copper_ingot_and_tin_dust_into_bronze' })
	e.remove({ id: 'gtceu:alloy_smelter/annealed_copper_dust_and_tin_dust_into_bronze' })
	e.remove({ id: 'gtceu:alloy_smelter/copper_dust_and_tin_ingot_into_bronze' })
	e.remove({ id: 'gtceu:alloy_smelter/copper_ingot_and_tin_ingot_into_bronze' })
	e.remove({ id: 'gtceu:alloy_smelter/copper_ingot_and_tin_dust_into_bronze' })
	e.remove({ id: 'gtceu:alloy_smelter/copper_dust_and_tin_dust_into_bronze' })
	e.remove({ id: 'gtceu:smelting/dust_bronze__demagnetize_from_dust' })

	//RFD Stuffs
	e.remove({ output: 'rfd:clay_gen_tier_1' })
	e.remove({ output: 'rfd:clay_gen_tier_2' })
	e.remove({ output: 'rfd:clay_gen_tier_3' })
	e.remove({ output: 'rfd:clay_gen_tier_4' })
	e.remove({ output: 'rfd:clay_gen_tier_5' })
	e.remove({ output: 'rfd:clean_gen_tier_1' })
	e.remove({ output: 'rfd:clean_gen_tier_2' })
	e.remove({ output: 'rfd:clean_gen_tier_3' })
	e.remove({ output: 'rfd:clean_gen_tier_4' })
	e.remove({ output: 'rfd:clean_gen_tier_5' })
	e.remove({ output: 'rfd:fungus_gen_tier_1' })
	e.remove({ output: 'rfd:fungus_gen_tier_2' })
	e.remove({ output: 'rfd:fungus_gen_tier_3' })
	e.remove({ output: 'rfd:fungus_gen_tier_4' })
	e.remove({ output: 'rfd:fungus_gen_tier_5' })
	e.remove({ output: 'rfd:glowstone_gen_tier_1' })
	e.remove({ output: 'rfd:glowstone_gen_tier_2' })
	e.remove({ output: 'rfd:glowstone_gen_tier_3' })
	e.remove({ output: 'rfd:glowstone_gen_tier_4' })
	e.remove({ output: 'rfd:glowstone_gen_tier_5' })
	e.remove({ output: 'rfd:grass_gen_tier_1' })
	e.remove({ output: 'rfd:grass_gen_tier_2' })
	e.remove({ output: 'rfd:grass_gen_tier_3' })
	e.remove({ output: 'rfd:grass_gen_tier_4' })
	e.remove({ output: 'rfd:grass_gen_tier_5' })
	e.remove({ output: 'rfd:gravel_gen_tier_1' })
	e.remove({ output: 'rfd:gravel_gen_tier_2' })
	e.remove({ output: 'rfd:gravel_gen_tier_3' })
	e.remove({ output: 'rfd:gravel_gen_tier_4' })
	e.remove({ output: 'rfd:gravel_gen_tier_5' })
	e.remove({ output: 'rfd:ice_gen_tier_1' })
	e.remove({ output: 'rfd:ice_gen_tier_2' })
	e.remove({ output: 'rfd:ice_gen_tier_3' })
	e.remove({ output: 'rfd:ice_gen_tier_4' })
	e.remove({ output: 'rfd:ice_gen_tier_5' })
	e.remove({ output: 'rfd:obsidian_gen_tier_1' })
	e.remove({ output: 'rfd:obsidian_gen_tier_2' })
	e.remove({ output: 'rfd:obsidian_gen_tier_3' })
	e.remove({ output: 'rfd:obsidian_gen_tier_4' })
	e.remove({ output: 'rfd:obsidian_gen_tier_5' })
	e.remove({ output: 'rfd:quartz_gen_tier_1' })
	e.remove({ output: 'rfd:quartz_gen_tier_2' })
	e.remove({ output: 'rfd:quartz_gen_tier_3' })
	e.remove({ output: 'rfd:quartz_gen_tier_4' })
	e.remove({ output: 'rfd:quartz_gen_tier_5' })
	e.remove({ output: 'rfd:redstone_gen_tier_1' })
	e.remove({ output: 'rfd:redstone_gen_tier_2' })
	e.remove({ output: 'rfd:redstone_gen_tier_3' })
	e.remove({ output: 'rfd:redstone_gen_tier_4' })
	e.remove({ output: 'rfd:redstone_gen_tier_5' })
	e.remove({ output: 'rfd:snow_gen_tier_1' })
	e.remove({ output: 'rfd:snow_gen_tier_2' })
	e.remove({ output: 'rfd:snow_gen_tier_3' })
	e.remove({ output: 'rfd:snow_gen_tier_4' })
	e.remove({ output: 'rfd:snow_gen_tier_5' })
	e.remove({ output: 'rfd:sand_gen_tier_1' })
	e.remove({ output: 'rfd:sand_gen_tier_2' })
	e.remove({ output: 'rfd:sand_gen_tier_3' })
	e.remove({ output: 'rfd:sand_gen_tier_4' })
	e.remove({ output: 'rfd:sand_gen_tier_5' })
	e.remove({ output: 'rfd:soulsand_gen_tier_1' })
	e.remove({ output: 'rfd:soulsand_gen_tier_2' })
	e.remove({ output: 'rfd:soulsand_gen_tier_3' })
	e.remove({ output: 'rfd:soulsand_gen_tier_4' })
	e.remove({ output: 'rfd:soulsand_gen_tier_5' })
	e.remove({ output: 'rfd:ore_gen_tier_1' })
	e.remove({ output: 'rfd:ore_gen_tier_2' })
	e.remove({ output: 'rfd:ore_gen_tier_3' })
	e.remove({ output: 'rfd:ore_gen_tier_4' })
	e.remove({ output: 'rfd:ore_gen_tier_5' })
	e.remove({ output: 'rfd:dye_gen_tier_1' })
	e.remove({ output: 'rfd:dye_gen_tier_2' })
	e.remove({ output: 'rfd:dye_gen_tier_3' })
	e.remove({ output: 'rfd:dye_gen_tier_4' })
	e.remove({ output: 'rfd:dye_gen_tier_5' })
	e.remove({ output: 'rfd:crushed_netherrack_gen_tier_1' })
	e.remove({ output: 'rfd:crushed_netherrack_gen_tier_2' })
	e.remove({ output: 'rfd:crushed_netherrack_gen_tier_3' })
	e.remove({ output: 'rfd:crushed_netherrack_gen_tier_4' })
	e.remove({ output: 'rfd:crushed_netherrack_gen_tier_5' })
	e.remove({ output: 'rfd:crushed_endstone_gen_tier_1' })
	e.remove({ output: 'rfd:crushed_endstone_gen_tier_2' })
	e.remove({ output: 'rfd:crushed_endstone_gen_tier_3' })
	e.remove({ output: 'rfd:crushed_endstone_gen_tier_4' })
	e.remove({ output: 'rfd:crushed_endstone_gen_tier_5' })
	e.remove({ output: 'rfd:dust_gen_tier_1' })
	e.remove({ output: 'rfd:dust_gen_tier_2' })
	e.remove({ output: 'rfd:dust_gen_tier_3' })
	e.remove({ output: 'rfd:dust_gen_tier_4' })
	e.remove({ output: 'rfd:dust_gen_tier_5' })
	e.remove({ output: 'rfd:ore_gen_tier_1' })
	e.remove({ output: 'rfd:ore_gen_tier_2' })
	e.remove({ output: 'rfd:ore_gen_tier_3' })
	e.remove({ output: 'rfd:ore_gen_tier_4' })
	e.remove({ output: 'rfd:ore_gen_tier_5' })

	//Wireless Chargers
	e.remove({ output: 'wirelesschargers:basic_wireless_block_charger' })
	e.remove({ output: 'wirelesschargers:advanced_wireless_block_charger' })
	e.remove({ output: 'wirelesschargers:basic_wireless_player_charger' })
	e.remove({ output: 'wirelesschargers:advanced_wireless_player_charger' })

	//-= Whole Mods =-
	//Create
	/* e.remove({ mod: 'create_new_age'})
	e.remove({ mod: 'design_decor'})
	e.remove({ mod: 'vintageinprovements'})
	e.remove({ mod: 'railways'})
	e.remove({ mod: 'create'})
	e.remove({ mod: 'balancedflight'})
	e.remove({ mod: 'tfmg'})
	e.remove({ mod: 'create_dd'})
	e.remove({ mod: 'createaddition'}) */

}) //End Of File
