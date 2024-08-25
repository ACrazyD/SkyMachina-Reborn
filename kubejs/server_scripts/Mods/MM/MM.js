console.info('MM: Registering recipes...')
MMEvents.createProcesses((event) => {
	event
		.create('mm:void_well_oil')
		.structureId('skymachina:void_well')
		.ticks(1000)
		.input({
			type: 'mm:input/consume',
			chance: 0,
			ingredient: {
				type: 'mm:item',
				item: 'kubejs:oil_catalyst',
				count: 1,
			},
		})
		.input({
			type: 'mm:input/consume',
			ingredient: {
				type: 'mm:create/kinetic',
				speed: 16,
			},
		})
		.output({
			type: 'mm:output/simple',
			ingredient: {
				type: 'mm:fluid',
				fluid: 'tfmg:crude_oil',
				amount: 1000,
			},
		})

	event
		.create('mm:void_well_lava')
		.structureId('skymachina:void_well')
		.ticks(1000)
		.input({
			type: 'mm:input/consume',
			chance: 0,
			ingredient: {
				type: 'mm:item',
				item: 'kubejs:lava_catalyst',
				count: 1,
			},
		})
		.input({
			type: 'mm:input/consume',
			ingredient: {
				type: 'mm:create/kinetic',
				speed: 16,
			},
		})
		.output({
			type: 'mm:output/simple',
			ingredient: {
				type: 'mm:fluid',
				fluid: 'minecraft:lava',
				amount: 1000,
			},
		})
})
