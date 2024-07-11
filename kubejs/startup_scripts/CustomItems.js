console.info('Custom Items: Registering Additions...')
StartupEvents.registry('item', (e) => {
	e.create('menril_diode')
	e.create('crude_steel')
	e.create('oil_catalyst')
	e.create('lava_catalyst')

	//Custom Greg Stuff tell material Builders work again :/
	e.create('andesite_alloy_plate').texture('kubejs:item/plate').color(0x747878) //
	e.create('andesite_alloy_gear').texture('kubejs:item/gear').color(0x747878) //
	e.create('andesite_alloy_frame')
		.texture('kubejs:block/frame_gt')
		.color(0x747878) //
	e.create('andesite_alloy_rod').texture('kubejs:item/rod').color(0x747878) //
	e.create('andesite_alloy_long_rod')
		.texture('kubejs:item/rod_long')
		.color(0x747878) //
	e.create('double_andesite_alloy_plate')
		.texture('kubejs:item/plate_double')
		.color(0x747878) //
	e.create('andesite_alloy_small_gear')
		.texture('kubejs:item/gear_small')
		.color(0x747878) //
})

StartupEvents.registry('block', (event) => {
	// Custom Casings
	event
		.create('soul_infused_casing', 'gtceu:renderer')
		.hardness(10)
		.resistance(1)
		.lightLevel(0)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation(
				'kubejs',
				'block/casings/casing-soul-infused'
			),
		})

	event
		.create('signalum_casing', 'gtceu:renderer')
		.displayName(
			'Ultra High Pressure and Temperature Resistant Signalum Casing'
		)
		.hardness(10)
		.resistance(1)
		.lightLevel(2)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-signalum'),
		})

	event
		.create('lumium_casing', 'gtceu:renderer')
		.hardness(10)
		.resistance(1)
		.lightLevel(2)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-lumium'),
		})

	event
		.create('enderium_casing', 'gtceu:renderer')
		.displayName('Thermal Fluctuation Proof Enderium Casing')
		.hardness(10)
		.resistance(1)
		.lightLevel(0)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-enderium'),
		})

	event
		.create('shellite_casing', 'gtceu:renderer')
		.displayName('Ultra-Resistant Shellite Casing')
		.hardness(10)
		.resistance(1)
		.lightLevel(0)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-shellite'),
		})

	event
		.create('twinite_casing', 'gtceu:renderer')
		.displayName('Bend-Resistant Twinite Casing')
		.hardness(10)
		.resistance(1)
		.lightLevel(0)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-twinite'),
		})

	event
		.create('dragonsteel_casing', 'gtceu:renderer')
		.displayName('Unbendable Dragonsteel Casing')
		.hardness(10)
		.resistance(1)
		.lightLevel(0)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-dragonsteel'),
		})

	event
		.create('prismalium_casing', 'gtceu:renderer')
		.displayName('Transportation Prismalium Casing')
		.hardness(10)
		.resistance(1)
		.lightLevel(2)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-prismalium'),
		})

	event
		.create('melodium_casing', 'gtceu:renderer')
		.displayName('Reinforced Melodium Casing')
		.hardness(10)
		.resistance(1)
		.lightLevel(2)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-melodium'),
		})

	event
		.create('stellarium_casing', 'gtceu:renderer')
		.displayName('Structurally Integral Stellarium Casing')
		.hardness(10)
		.resistance(1)
		.lightLevel(2)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-stellarium'),
		})

	event
		.create('austenitic_stainless_steel_304_casing', 'gtceu:renderer')
		.displayName('Austenitic Stainless Steel 304 Nuclear Casing')
		.hardness(2)
		.resistance(3)
		.lightLevel(0)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation(
				'kubejs',
				'block/casings/casing-austenitic-stainless-steel-304'
			),
		})

	event
		.create('inconel_625_casing', 'gtceu:renderer')
		.displayName('Inconel 625 Thermal Fluctuation Resistant Casing')
		.hardness(2)
		.resistance(3)
		.lightLevel(0)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-inconel-625'),
		})

	event
		.create('wood_casing', 'gtceu:renderer')
		.displayName('Treatedwood Reinforced Casing')
		.hardness(5)
		.resistance(1)
		.material('wood')
		.requiresTool(true)
		.tagBlock('mineable/axe')
		.tagBlock('minecraft:needs_stone_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation('kubejs', 'block/casings/casing-wood'),
		})

	event
		.create('peek_casing', 'gtceu:renderer')
		.displayName('PEEK Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureOverrideRenderer('minecraft:block/cube_all', {
			'all': new ResourceLocation(
				'kubejs',
				'block/casings/machine_casing_peek'
			),
		})

	event
		.create('beryllium_aluminium_alloy_casing')
		.displayName('Beryllium-Aluminium Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/beryllium-aluminium_casing')

	event
		.create('birmabright_casing')
		.displayName('Birmabright Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/birmabright_casing')

	event
		.create('beryllium_bronze_casing')
		.displayName('Beryllium Bronze Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/bizmuth_bronze_casing')

	event
		.create('blue_steel_casing')
		.displayName('Blue Steel Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/blue_steel_casing')

	event
		.create('duralumin_casing')
		.displayName('Duralumin Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/duralumin_casing')

	event
		.create('elgiloy_casing')
		.displayName('Elgiloy Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/elgiloy_casing')

	event
		.create('hydronalium_casing')
		.displayName('Hydronalium Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/hydronallium_casing')

	event
		.create('kovar_casing')
		.displayName('Kovar Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/kovar_casing')

	event
		.create('red_steel_casing')
		.displayName('Red Steel Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/red_steel_casing')

	event
		.create('silicon_bronze_casing')
		.displayName('Silicon Bronze Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/silicon_bronze_casing')

	event
		.create('sterling_silver_casing')
		.displayName('Sterling Silver Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/sterling_silver_casing')

	event
		.create('zamak_casing')
		.displayName('Zamak Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/zamak_casing')

	event
		.create('tumbaga_casing')
		.displayName('Tumbaga Casing')
		.hardness(5)
		.resistance(1)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/tumbaga_casing')

	// Custom Coils
	event
		.create('zalloy_coil_block', 'gtceu:coil')
		.temperature(13499)
		.level(24)
		.energyDiscount(16)
		.tier(10)
		.coilMaterial(() => GTMaterials.get('zalloy'))
		.texture('kubejs:block/coils/machine_coil_zalloy')
		.hardness(5)
		.requiresTool(true)
		.material('metal')

	// Extras
	event
		.create('laser_casing')
		.displayName(
			'Schrubblaser Beam Concentrator & Emmiter Capable Stellarium Casing'
		)
		.hardness(5)
		.resistance(10)
		.lightLevel(10)
		.requiresTool(true)
		.tagBlock('mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.textureAll('kubejs:block/casings/laser_casing')

	// Meshblock for Kinetic Sieve

	event
		.create('meshblock')
		.displayName('Treatedwood Reinforced Mesh')
		.hardness(2)
		.resistance(2)
		.material('wood')
		.transparent(true)
		.defaultTranslucent()
		.requiresTool(false)
		.tagBlock('mineable/axe')
		.tagBlock('minecraft:needs_stone_tool')
		.textureAll('kubejs:block/multiblock/meshblock')
}) //End Of File
