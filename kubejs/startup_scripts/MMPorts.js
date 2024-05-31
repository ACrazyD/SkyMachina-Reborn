console.info('MM: Registering Non-Greg Multiblocks Prt2...')
MMEvents.registerPorts((e) => {
	e.create('basic_fluid_port')
		.name('Basic Fluid Port')
		.controllerId('mm:void_well')
		.config('mm:fluid', (c) => {
			c.slotCapacity(1000).rows(1).columns(1)
		})

	e.create('internal_rot_port')
		.name('Interal Rotational Port')
		.controllerId('mm:void_well')
		.config('mm:create/kinetic', (c) => {
			c.stress(4)
		})

	e.create('basic_rot_port')
		.name('Basic Rotational Port')
		.controllerId('mm:void_well')
		.config('mm:create/kinetic', (c) => {
			c.stress(32)
		})

	e.create('basic_item_port')
		.name('Basic Cataylst Port')
		.controllerId('mm:void_well')
		.config('mm:item', (c) => {
			c.rows(1).columns(1)
		})
}) //End Of File
