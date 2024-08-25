console.info('Create Compressor: Registering recipes...')
ServerEvents.recipes((e) => {
	//Testing (Failed ATM)
	//e.recipes.vintageimprovements.vacuumizing('minecraft:powder_snow_bucket', ['minecraft:bucket', 'minecraft:snow_block']).processingTime(500).heatLevel("CRYOTHEUM")

	//Refactor
	//e.recipes.vintageimprovements.pressurizing(Fluid.of('vintageimprovements:sulfuric_acid', 1000), [Fluid.of('vintageimprovements:sulfur_trioxide', 1000), Fluid.of('minecraft:water', 1000)]).secondaryFluidInput(1)
	//e.recipes.vintageimprovements.pressurizing([Fluid.of('integrateddynamics:menril_resin', 250), Item.of('integrateddynamics:crystalized_menril_chunk', 1)],('integrateddynamics:menril_planks', 1)).processingTime(200)
	e.recipes.vintageimprovements
		.pressurizing(
			[
				Fluid.of('integrateddynamics:menril_resin', 250), // Fluid output
				'integrateddynamics:crystalized_menril_chunk', // Item output
			],
			[
				'integrateddynamics:menril_planks', // Item input
			]
		)
		.heated()
		.secondaryFluidOutput(0)
		.processingTime(200)

	e.recipes.vintageimprovements
		.pressurizing(
			[
				Fluid.of('integrateddynamics:menril_resin', 500), // Fluid output
				'integrateddynamics:crystalized_menril_chunk', // Item output
			],
			[
				'integrateddynamics:menril_log', // Item input
			]
		)
		.heated()
		.secondaryFluidOutput(0)
		.processingTime(300)

	e.recipes.vintageimprovements
		.vacuumizing(
			'gtceu:wood_plate', // Output
			[
				'gtceu:wood_dust', // Item input
			]
		)
		.processingTime(900)

	e.recipes.vintageimprovements
		.vacuumizing(
			'gtceu:treated_wood_plate', // Output
			[
				'gtceu:treated_wood_dust', // Item input
			]
		)
		.processingTime(900)

	//IntegratedDynamics Sqeezer Crap
	/* e.custom({
		'type': 'vintageimprovements:pressurizing',
		'secondaryFluidResults': 0,
		'heatRequirement': 'heated',
		'ingredients': [
			{
				'item': 'integrateddynamics:menril_planks',
				'count': 1,
			},
		],
		'results': [
			{
				'fluid': 'integrateddynamics:menril_resin',
				'amount': 250,
			},
			{
				'item': 'integrateddynamics:crystalized_menril_chunk',
				'count': 1,
			},
		],
		'processingTime': 200,
	}) */

	/* e.custom({
		'type': 'vintageimprovements:pressurizing',
		'secondaryFluidResults': 0,
		'heatRequirement': 'heated',
		'ingredients': [
			{
				'item': 'integrateddynamics:menril_log',
				'count': 1,
			},
		],
		'results': [
			{
				'fluid': 'integrateddynamics:menril_resin',
				'amount': 500,
			},
			{
				'item': 'integrateddynamics:crystalized_menril_chunk',
				'count': 2,
			},
		],
		'processingTime': 300,
	})

	e.custom({
		"type":"vintageimprovements:vacuumizing",
		"ingredients": [ 
			{
				"item": "gtceu:wood_dust",
				"count": 4
			},
			
		],
		"results": [
			{
				"item": "gtceu:wood_plate",
				"count": 1
			}
		],
		"processingTime": 900
	})

	e.custom({
		"type":"vintageimprovements:vacuumizing",
		"ingredients": [ 
			{
				"item": "gtceu:treated_wood_dust",
				"count": 4
			},
			
		],
		"results": [
			{
				"item": "gtceu:treated_wood_plate",
				"count": 1
			}
		],
		"processingTime": 900
	}) */
}) //End Of File
