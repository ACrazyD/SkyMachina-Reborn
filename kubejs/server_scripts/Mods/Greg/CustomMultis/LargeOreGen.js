ServerEvents.recipes((event) => {
	let oreGen = (input, ore, amount) => {
		let output = `${amount}x ${ore}`

		event.recipes.gtceu
			.large_resource_generator(ore)
			.notConsumable(input)
			.inputFluids(Fluid.of('gtceu:drilling_fluid', 5000))
			.itemOutputs(output)
			.duration(15)
			.EUt(3072)
	}

	oreGen('#forge:ores/copper', 'gtceu:endstone_copper_ore', 64)
	oreGen('#forge:ores/gold', 'gtceu:endstone_gold_ore', 64)
	oreGen('#forge:ores/iron', 'gtceu:endstone_iron_ore', 64)
	oreGen('#forge:ores/pyrochlore', 'gtceu:endstone_pyrochlore_ore', 64)
	oreGen('#forge:ores/aluminium', 'gtceu:endstone_aluminium_ore', 64)
	oreGen('#forge:ores/scheelite', 'gtceu:endstone_scheelite_ore', 64)
	oreGen('#forge:ores/grossular', 'gtceu:endstone_grossular_ore', 64)
	oreGen('#forge:ores/green_sapphire', 'gtceu:endstone_green_sapphire_ore', 64)
	oreGen(
		'#forge:ores/glauconite_sand',
		'gtceu:endstone_glauconite_sand_ore',
		64
	)
	oreGen('#forge:ores/chalcocite', 'gtceu:endstone_chalcocite_ore', 64)
	oreGen('#forge:ores/wulfenite', 'gtceu:endstone_wulfenite_ore', 64)
	oreGen(
		'#forge:ores/cassiterite_sand',
		'gtceu:endstone_cassiterite_sand_ore',
		64
	)
	oreGen('#forge:ores/tetrahedrite', 'gtceu:endstone_tetrahedrite_ore', 64)
	oreGen('#forge:ores/uraninite', 'gtceu:endstone_uraninite_ore', 64)
	oreGen('#forge:ores/pentlandite', 'gtceu:endstone_pentlandite_ore', 64)
	oreGen('#forge:ores/stibnite', 'gtceu:endstone_stibnite_ore', 64)
	oreGen('#forge:ores/spodumene', 'gtceu:endstone_spodumene_ore', 64)
	oreGen('#forge:ores/bastnasite', 'gtceu:endstone_bastnasite_ore', 64)
	oreGen('#forge:ores/tungstate', 'gtceu:endstone_tungstate_ore', 64)
	oreGen('#forge:ores/almandine', 'gtceu:endstone_almandine_ore', 64)
	oreGen('#forge:ores/lead', 'gtceu:endstone_lead_ore', 64)
	oreGen('#forge:ores/pitchblende', 'gtceu:endstone_pitchblende_ore', 64)
	oreGen('#forge:ores/lapis', 'gtceu:endstone_lapis_ore', 64)
	oreGen('#forge:ores/powellite', 'gtceu:endstone_powellite_ore', 64)
	oreGen('#forge:ores/talc', 'gtceu:endstone_talc_ore', 64)
	oreGen('#forge:ores/naquadah', 'gtceu:endstone_naquadah_ore', 64)
	oreGen('#forge:ores/bentonite', 'gtceu:endstone_bentonite_ore', 64)
	oreGen('#forge:ores/palladium', 'gtceu:endstone_palladium_ore', 64)
	oreGen('#forge:ores/electrotine', 'gtceu:endstone_electrotine_ore', 64)
	oreGen('#forge:ores/neodymium', 'gtceu:endstone_neodymium_ore', 64)
	oreGen('#forge:ores/redstone', 'gtceu:endstone_redstone_ore', 64)
	oreGen('#forge:ores/molybdenite', 'gtceu:endstone_molybdenite_ore', 64)
	oreGen('#forge:ores/galena', 'gtceu:endstone_galena_ore', 64)
	oreGen('#forge:ores/olivine', 'gtceu:endstone_olivine_ore', 64)
	oreGen('#forge:ores/nickel', 'gtceu:endstone_nickel_ore', 64)
	oreGen('#forge:ores/red_garnet', 'gtceu:endstone_red_garnet_ore', 64)
	oreGen('#forge:ores/cooperite', 'gtceu:endstone_cooperite_ore', 64)
	oreGen('#forge:ores/alunite', 'gtceu:endstone_alunite_ore', 64)
	oreGen('#forge:ores/asbestos', 'gtceu:endstone_asbestos_ore', 64)
	oreGen('#forge:ores/sphalerite', 'gtceu:endstone_sphalerite_ore', 64)
	oreGen('#forge:ores/bornite', 'gtceu:endstone_bornite_ore', 64)
	oreGen('#forge:ores/ruby', 'gtceu:endstone_ruby_ore', 64)
	oreGen('#forge:ores/pyrope', 'gtceu:endstone_pyrope_ore', 64)
	oreGen('#forge:ores/diatomite', 'gtceu:endstone_diatomite_ore', 64)
	oreGen(
		'#forge:ores/tricalcium_phosphate',
		'gtceu:endstone_tricalcium_phosphate_ore',
		64
	)
	oreGen('#forge:ores/sapphire', 'gtceu:endstone_sapphire_ore', 64)
	oreGen('#forge:ores/silver', 'gtceu:endstone_silver_ore', 64)
	oreGen('#forge:ores/sulfur', 'gtceu:endstone_sulfur_ore', 64)
	oreGen('#forge:ores/cobaltite', 'gtceu:endstone_cobaltite_ore', 64)
	oreGen('#forge:ores/lepidolite', 'gtceu:endstone_lepidolite_ore', 64)
	oreGen('#forge:ores/soapstone', 'gtceu:endstone_soapstone_ore', 64)
	oreGen('#forge:ores/goethite', 'gtceu:endstone_goethite_ore', 64)
	oreGen('#forge:ores/rock_salt', 'gtceu:endstone_rock_salt_ore', 64)
	oreGen('#forge:ores/cassiterite', 'gtceu:endstone_cassiterite_ore', 64)
	oreGen('#forge:ores/kyanite', 'gtceu:endstone_kyanite_ore', 64)
	oreGen('#forge:ores/sodalite', 'gtceu:endstone_sodalite_ore', 64)
	oreGen('#forge:ores/beryllium', 'gtceu:endstone_beryllium_ore', 64)
	oreGen('#forge:ores/realgar', 'gtceu:endstone_realgar_ore', 64)
	oreGen('#forge:ores/nether_quartz', 'gtceu:endstone_nether_quartz_ore', 64)
	oreGen('#forge:ores/cobalt', 'gtceu:endstone_cobalt_ore', 64)
	oreGen('#forge:ores/hematite', 'gtceu:endstone_hematite_ore', 64)
	oreGen('#forge:ores/spessartine', 'gtceu:endstone_spessartine_ore', 64)
	oreGen('#forge:ores/tin', 'gtceu:endstone_tin_ore', 64)
	oreGen('#forge:ores/yellow_garnet', 'gtceu:endstone_yellow_garnet_ore', 64)
	oreGen('#forge:ores/plutonium', 'gtceu:endstone_plutonium_ore', 64)
	oreGen(
		'#forge:ores/basaltic_mineral_sand',
		'gtceu:endstone_basaltic_mineral_sand_ore',
		64
	)
	oreGen('#forge:ores/tantalite', 'gtceu:endstone_tantalite_ore', 64)
	oreGen('#forge:ores/oilsands', 'gtceu:endstone_oilsands_ore', 64)
	oreGen(
		'#forge:ores/yellow_limonite',
		'gtceu:endstone_yellow_limonite_ore',
		64
	)
	oreGen('#forge:ores/barite', 'gtceu:endstone_barite_ore', 64)
	oreGen('#forge:ores/mica', 'gtceu:endstone_mica_ore', 64)
	oreGen('#forge:ores/pyrite', 'gtceu:endstone_pyrite_ore', 64)
	oreGen('#forge:ores/magnesite', 'gtceu:endstone_magnesite_ore', 64)
	oreGen('#forge:ores/diamond', 'gtceu:endstone_diamond_ore', 64)
	oreGen('#forge:ores/garnet_sand', 'gtceu:endstone_garnet_sand_ore', 64)
	oreGen('#forge:ores/opal', 'gtceu:endstone_opal_ore', 64)
	oreGen('#forge:ores/fullers_earth', 'gtceu:endstone_fullers_earth_ore', 64)
	oreGen('#forge:ores/zeolite', 'gtceu:endstone_zeolite_ore', 64)
	oreGen('#forge:ores/blue_topaz', 'gtceu:endstone_blue_topaz_ore', 64)
	oreGen('#forge:ores/monazite', 'gtceu:endstone_monazite_ore', 64)
	oreGen('#forge:ores/malachite', 'gtceu:endstone_malachite_ore', 64)
	oreGen('#forge:ores/emerald', 'gtceu:endstone_emerald_ore', 64)
	oreGen('#forge:ores/molybdenum', 'gtceu:endstone_molybdenum_ore', 64)
	oreGen('#forge:ores/coal', 'gtceu:endstone_coal_ore', 64)
	oreGen('#forge:ores/chromite', 'gtceu:endstone_chromite_ore', 64)
	oreGen('#forge:ores/salt', 'gtceu:endstone_salt_ore', 64)
	oreGen('#forge:ores/saltpeter', 'gtceu:endstone_saltpeter_ore', 64)
	oreGen(
		'#forge:ores/granitic_mineral_sand',
		'gtceu:endstone_granitic_mineral_sand_ore',
		64
	)
	oreGen('#forge:ores/quartzite', 'gtceu:endstone_quartzite_ore', 64)
	oreGen('#forge:ores/trona', 'gtceu:endstone_trona_ore', 64)
	oreGen('#forge:ores/apatite', 'gtceu:endstone_apatite_ore', 64)
	oreGen(
		'#forge:ores/vanadium_magnetite',
		'gtceu:endstone_vanadium_magnetite_ore',
		64
	)
	oreGen('#forge:ores/certus_quartz', 'gtceu:endstone_certus_quartz_ore', 64)
	oreGen('#forge:ores/calcite', 'gtceu:endstone_calcite_ore', 64)
	oreGen('#forge:ores/thorium', 'gtceu:endstone_thorium_ore', 64)
	oreGen('#forge:ores/pollucite', 'gtceu:endstone_pollucite_ore', 64)
	oreGen('#forge:ores/gypsum', 'gtceu:endstone_gypsum_ore', 64)
	oreGen('#forge:ores/bauxite', 'gtceu:endstone_bauxite_ore', 64)
	oreGen('#forge:ores/platinum', 'gtceu:endstone_platinum_ore', 64)
	oreGen('#forge:ores/pyrolusite', 'gtceu:endstone_pyrolusite_ore', 64)
	oreGen('#forge:ores/magnetite', 'gtceu:endstone_magnetite_ore', 64)
	oreGen('#forge:ores/graphite', 'gtceu:endstone_graphite_ore', 64)
	oreGen('#forge:ores/topaz', 'gtceu:endstone_topaz_ore', 64)
	oreGen('#forge:ores/lithium', 'gtceu:endstone_lithium_ore', 64)
	oreGen('#forge:ores/cinnabar', 'gtceu:endstone_cinnabar_ore', 64)
	oreGen('#forge:ores/lazurite', 'gtceu:endstone_lazurite_ore', 64)
	oreGen('#forge:ores/garnierite', 'gtceu:endstone_garnierite_ore', 64)
	oreGen('#forge:ores/ilmenite', 'gtceu:endstone_ilmenite_ore', 64)
	oreGen('#forge:ores/chalcopyrite', 'gtceu:endstone_chalcopyrite_ore', 64)
	oreGen('#forge:ores/amethyst', 'gtceu:endstone_amethyst_ore', 64)
}) //End Of File
