console.info('Create Compressor: Registering recipes...')
ServerEvents.recipes((e) => {
	//IntegratedDynamics Sqeezer Crap
	e.custom({
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
	})

	e.custom({
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
	})

}) //End Of File
