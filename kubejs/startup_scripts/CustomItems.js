console.info('Custom Items: Registering Additions...')


StartupEvents.registry('item', e => {

	//Storage Module
	e.create('incomplete_storage_module').texture('kubejs:item/storage_module').color(0x5f5f5f)
	//RS Item Disks
	e.create('incomplete_rs_1k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/1k_storage_part').color(0x5f5f5f)//1chests
	e.create('incomplete_rs_4k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/4k_storage_part').color(0x5f5f5f)//2chests
	e.create('incomplete_rs_16k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/16k_storage_part').color(0x5f5f5f)//4chests
	e.create('incomplete_rs_64k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/64k_storage_part').color(0x5f5f5f)//8Chests
	//RS Extra Disks
	e.create('incomplete_rs_256k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/256k_storage_part').color(0x5f5f5f)//16Chests
	e.create('incomplete_rs_1024k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/1024k_storage_part').color(0x5f5f5f)//32Chests
	e.create('incomplete_rs_4096k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/4096k_storage_part').color(0x5f5f5f)//64Chests
	e.create('incomplete_rs_16384k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/16384k_storage_part').color(0x5f5f5f)//128Chests
	e.create('incomplete_rs_65536k_storage_part', 'create:sequenced_assembly').texture('kubejs:item/65536k_storage_part').color(0x5f5f5f)//256Chests
	e.create('incomplete_rs_264M_storage_part', 'create:sequenced_assembly').texture('kubejs:item/264m_storage_part').color(0x5f5f5f)//512Chests
	e.create('incomplete_rs_1048M_storage_part', 'create:sequenced_assembly').texture('kubejs:item/1048m_storage_part').color(0x5f5f5f)//1024Chests
	//RS Fluid Disks
	e.create('incomplete_rs_64k_fluid_storage_part', 'create:sequenced_assembly').texture('kubejs:item/64k_fluid_storage_part').color(0x5f5f5f)
	e.create('incomplete_rs_256k_fluid_storage_part', 'create:sequenced_assembly').texture('kubejs:item/256k_fluid_storage_part').color(0x5f5f5f)
	e.create('incomplete_rs_1024k_fluid_storage_part', 'create:sequenced_assembly').texture('kubejs:item/1024k_fluid_storage_part').color(0x5f5f5f)
	e.create('incomplete_rs_4096k_fluid_storage_part', 'create:sequenced_assembly').texture('kubejs:item/4096k_fluid_storage_part').color(0x5f5f5f)
	e.create('incomplete_rs_16384k_fluid_storage_part', 'create:sequenced_assembly').texture('kubejs:item/16384k_fluid_storage_part').color(0x5f5f5f)
	e.create('incomplete_rs_65536k_fluid_storage_part', 'create:sequenced_assembly').texture('kubejs:item/65536k_fluid_storage_part').color(0x5f5f5f)
	e.create('incomplete_rs_264M_fluid_storage_part', 'create:sequenced_assembly').texture('kubejs:item/264m_fluid_storage_part').color(0x5f5f5f)
	e.create('incomplete_rs_1048M_fluid_storage_part', 'create:sequenced_assembly').texture('kubejs:item/1048m_fluid_storage_part').color(0x5f5f5f)

})

StartupEvents.registry('item', (e) => {

	//Trade Medallions
	e.create('nature_trade_medallion').parentModel('kubejs:item/trade_medallion').texture('kubejs:item/trade_medallion').color(0x00ff00)
	e.create('tech_trade_medallion').parentModel('kubejs:item/trade_medallion').color(0x00ffff)
	e.create('magic_trade_medallion').parentModel('kubejs:item/trade_medallion').color(0xff00ff)
	e.create('trade_medallion').modelJson('kubejs:item/trade_medallion').color(0xffff00)
	e.create('bio_trade_medallion').parentModel('kubejs:item/trade_medallion').color(0xff0000)

	e.create('storage_module').texture('kubejs:item/storage_module')

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
