console.info('Custom Items: Registering Additions...')
StartupEvents.registry('item', e => {
	e.create('menril_diode')
	e.create('crude_steel')



	//Custom Greg Stuff tell material Builders work again :/
	e.create('andesite_alloy_plate').texture('kubejs:item/plate').color(0x747878) //
	e.create('andesite_alloy_gear').texture('kubejs:item/gear').color(0x747878) //
	e.create('andesite_alloy_frame').texture('kubejs:block/frame_gt').color(0x747878) //
	e.create('andesite_alloy_rod').texture('kubejs:item/rod').color(0x747878) //
	e.create('andesite_alloy_long_rod').texture('kubejs:item/rod_long').color(0x747878) //
	e.create('double_andesite_alloy_plate').texture('kubejs:item/plate_double').color(0x747878) //
	e.create('andesite_alloy_small_gear').texture('kubejs:item/gear_small').color(0x747878) //

})//End Of File
