console.info('Custom Items: Registering Additions...')


StartupEvents.registry('item', e => {

	//Storage Module
	e.create('incomplete_storage_module').texture('kubejs:item/storage_module').color(0x5f5f5f)
	//AE Item components
	e.create('incomplete_ae_1k_storage_component', 'create:sequenced_assembly').texture('ae2:item/cell_component_1k').color(0x5f5f5f)
	e.create('incomplete_ae_4k_storage_component', 'create:sequenced_assembly').texture('ae2:item/cell_component_4k').color(0x5f5f5f)
	e.create('incomplete_ae_16k_storage_component', 'create:sequenced_assembly').texture('ae2:item/cell_component_16k').color(0x5f5f5f)
	e.create('incomplete_ae_64k_storage_component', 'create:sequenced_assembly').texture('ae2:item/cell_component_64k').color(0x5f5f5f)
	e.create('incomplete_ae_256k_storage_component', 'create:sequenced_assembly').texture('ae2:item/cell_component_256k').color(0x5f5f5f)
	//ae Extra components
    e.create('incomplete_ae_1024k_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/cell_component_1024').color(0x5f5f5f)
	e.create('incomplete_ae_4096k_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/cell_component_4096').color(0x5f5f5f)
	e.create('incomplete_ae_16384k_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/cell_component_16384').color(0x5f5f5f)
	e.create('incomplete_ae_65536k_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/cell_component_65536').color(0x5f5f5f)
    //AE SuperStorage components
    e.create('incomplete_ae_1k_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_1k').color(0x5f5f5f)
    e.create('incomplete_ae_4k_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_4k').color(0x5f5f5f)
    e.create('incomplete_ae_16k_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_16k').color(0x5f5f5f)
    e.create('incomplete_ae_64k_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_64k').color(0x5f5f5f)
    e.create('incomplete_ae_256k_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_256k').color(0x5f5f5f)
    e.create('incomplete_ae_1024k_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_1024k').color(0x5f5f5f)
    e.create('incomplete_ae_4096k_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_4096k').color(0x5f5f5f)
    
    e.create('incomplete_ae_16m_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_16m').color(0x5f5f5f)
    e.create('incomplete_ae_65m_super_storage_component', 'create:sequenced_assembly').texture('ae2additions:item/super_cell_component_45m').color(0x5f5f5f)
    //AE Special components
    e.create('incomplete_ae_bulk_storage_component', 'create:sequenced_assembly').texture('megacells:item/bulk_cell_component').color(0x5f5f5f)
    e.create('incomplete_ae_radioactive_storage_component', 'create:sequenced_assembly').texture('megacells:item/radioactive_cell_component').color(0x5f5f5f)

	//Pebbles
	e.create('andesite_pebble').texture('kubejs:item/pebble').color(0x747878)
	e.create('diorite_pebble').texture('kubejs:item/pebble').color(0x9a9a9a)
	e.create('granite_pebble').texture('kubejs:item/pebble').color(0x9a6e4b)
	e.create('limestone_pebble').texture('kubejs:item/pebble').color(0x9a9a9a)
	e.create('marble_pebble').texture('kubejs:item/pebble').color(0x9a9a9a)

	//Create Ore Excavation Thingys
	e.create('lapiz_vein').texture('kubejs:item/vein').color(0x0000ff)
	e.create('cinnabar_vein').texture('kubejs:item/vein').color(0xff0000)
	e.create('apatite_vein').texture('kubejs:item/vein').color(0x00ff00)
	e.create('silver_vein').texture('kubejs:item/vein').color(0xc0c0c0)
	e.create('hard_diamond_vein').texture('kubejs:item/vein').color(0x00ffff)
	e.create('tin_vein').texture('kubejs:item/vein').color(0x9a9a9a)
	e.create('iron_vein').texture('kubejs:item/vein').color(0xff0000)
	e.create('netherite_vein').texture('kubejs:item/vein').color(0x000000)
	e.create('niter_vein').texture('kubejs:item/vein').color(0x00ff00)
	e.create('lead_vein').texture('kubejs:item/vein').color(0x4c4c4c)
	e.create('redstone_vein').texture('kubejs:item/vein').color(0xff0000)
	e.create('nickel_vein').texture('kubejs:item/vein').color(0x9a9a9a)
	e.create('quartz_vein').texture('kubejs:item/vein').color(0xffffff)
	e.create('glowstone_vein').texture('kubejs:item/vein').color(0xffff00)
	e.create('coal_vein').texture('kubejs:item/vein').color(0x5f5f5f)
	e.create('osmium_vein').texture('kubejs:item/vein').color(0x5f5f5f)
	e.create('diamond_vein').texture('kubejs:item/vein').color(0x00ffff)
	e.create('uranium_vein').texture('kubejs:item/vein').color(0x00ff00)
	e.create('gold_vein').texture('kubejs:item/vein').color(0xffff00)
	e.create('copper_vein').texture('kubejs:item/vein').color(0xff0000)
	e.create('sulfur_vein').texture('kubejs:item/vein').color(0xffff00)
	e.create('zinc_vein').texture('kubejs:item/vein').color(0x9a9a9a)
	e.create('emerald_vein').texture('kubejs:item/vein').color(0x00ff00)
	e.create('fluorite_vein').texture('kubejs:item/vein').color(0x00ff00)
	// Fluid Veins
	e.create('oil_vein').texture('kubejs:item/vein').color(0x000000)
	e.create('lava_vein').texture('kubejs:item/vein').color(0xff0000)
	e.create('water_vein').texture('kubejs:item/vein').color(0x0000ff)
	

})

StartupEvents.registry('item', (e) => {

	//Trade Medallions
	e.create('nature_trade_medallion').parentModel('kubejs:item/trade_medallion').texture('kubejs:item/trade_medallion').color(0x00ff00)
	e.create('tech_trade_medallion').parentModel('kubejs:item/trade_medallion').color(0x00ffff)
	e.create('magic_trade_medallion').parentModel('kubejs:item/trade_medallion').color(0xff00ff)
	e.create('trade_medallion').modelJson('kubejs:item/trade_medallion').color(0xffff00)
	e.create('bio_trade_medallion').parentModel('kubejs:item/trade_medallion').color(0xff0000)

	e.create('storage_module').texture('kubejs:item/storage_module')

	/* e.create('menril_diode')
	e.create('crude_steel')
	e.create('oil_catalyst')
	e.create('lava_catalyst') */

	/* //Custom Greg Stuff tell material Builders work again :/
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
		.color(0x747878) // */
})

StartupEvents.registry('block', (event) => {
	
	// Meshblock for Kinetic Sieve
	/* event */
	/* 	.create('meshblock') */
	/* 	.displayName('Treatedwood Reinforced Mesh') */
	/* 	.hardness(2) */
	/* 	.resistance(2) */
	/* 	.material('wood') */
	/* 	.transparent(true) */
	/* 	.defaultTranslucent() */
	/* 	.requiresTool(false) */
	/* 	.tagBlock('mineable/axe') */
	/* 	.tagBlock('minecraft:needs_stone_tool') */
	/* 	.textureAll('kubejs:block/multiblock/meshblock') */
}) //End Of File
