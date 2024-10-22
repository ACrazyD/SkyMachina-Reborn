//Melter Function
function addMeltingRecipe(
	inputItem,
	outputFluid,
	outputAmount,
	processingTime,
	heatRequirement
) {
	ServerEvents.recipes((e) => {
		e.custom({
			type: 'createmetallurgy:melting',
			ingredients: [
				{
					item: inputItem,
				},
			],
			processingTime: processingTime,
			results: [
				{
					fluid: outputFluid,
					amount: outputAmount,
				},
			],
			heatRequirement: heatRequirement,
		}).id(`kubejs:melting_${inputItem.replace(':', '_')}`)
	})
}

function addAlloyingRecipe(
	inputFluid1,
	inputFluid1V,
	inputFluid2,
	inputFluid2V,
	outputFluid,
	outputAmount,
	processingTime,
	heatRequirement
) {
	ServerEvents.recipes((e) => {
		e.custom({
			type: 'createmetallurgy:alloying',
			ingredients: [
				{
					fluid: inputFluid1,
					amount: inputFluid1V,
				},
				{
					fluid: inputFluid2,
					amount: inputFluid2V,
				},
			],
			processingTime: processingTime,
			results: [
				{
					fluid: outputFluid,
					amount: outputAmount,
				},
			],
			heatRequirement: heatRequirement,
		}).id(
			`kubejs:alloying_${inputFluid1.replace(':', '_')}_${inputFluid2.replace(
				':',
				'_'
			)}`
		)
	})
}

function addBasinCasting(
	inputFluid2,
	inputAmount2,
	outputItem2,
	moldconsume,
	processingTime2
) {
	ServerEvents.recipes((e) => {
		e.custom({
			'type': 'createmetallurgy:casting_in_basin',
			'ingredients': [
				{
					'fluid': inputFluid2,
					'amount': inputAmount2,
				},
			],
			'processingTime': processingTime2,
			'mold_consumed': moldconsume,
			'result': {
				'item': outputItem2,
			},
		})
	})
}

function addTableCasting(
	mold,
	inputFluid3,
	inputAmmount3,
	outputItem3,
	moldconsume2,
	processingTime3
) {
	ServerEvents.recipes((e) => {
		e.custom({
			'type': 'createmetallurgy:casting_in_table',
			'ingredients': [
				{
					'item': mold,
				},
				{
					'fluid': inputFluid3,
					'amount': inputAmmount3,
				},
			],
			'processingTime': processingTime3,
			'mold_consumed': moldconsume2,
			'result': {
				'item': outputItem3,
			},
		})
	})
}
