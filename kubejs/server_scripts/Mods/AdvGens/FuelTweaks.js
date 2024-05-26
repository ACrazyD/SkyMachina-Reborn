console.info('AdvGens: Registering Fluids...')
ServerEvents.recipes((event) => {
	let fuelMachine = (input, energy) =>
		event.custom({
			'type': 'advgenerators:liquid_fuel',
			'fuel': {
				'fluid': input,
			},
			'fePerMb': energy,
		})

	fuelMachine('gtceu:nitrobenzene', 5120)
	fuelMachine('gtceu:benzene', 1408)
	fuelMachine('gtceu:lpg', 1280)
	fuelMachine('gtceu:butane', 1184)
	fuelMachine('gtceu:phenol', 1152)
	fuelMachine('gtceu:butene', 1024)
	fuelMachine('gtceu:propane', 928)
	fuelMachine('gtceu:butadiene', 816)
	fuelMachine('gtceu:propene', 768)
	fuelMachine('gtceu:ethane', 672)
	fuelMachine('gtceu:refinery_gas', 640)
	fuelMachine('gtceu:ethylene', 512)
	fuelMachine('gtceu:methane', 448)
	fuelMachine('gtceu:coal_gas', 384)
	fuelMachine('gtceu:sulfuric_naphtha', 160)
	fuelMachine('gtceu:sulfuric_gas', 100)
	fuelMachine('gtceu:wood_gas', 96)
	fuelMachine('gtceu:natural_gas', 80)

	fuelMachine('gtceu:high_octane_gasoline', 12800)
	fuelMachine('gtceu:gasoline', 6400)
	fuelMachine('gtceu:cetane_boosted_diesel', 2880)
	fuelMachine('gtceu:diesel', 1920)
	fuelMachine('gtceu:toluene', 1280)
	fuelMachine('gtceu:naphtha', 1280)
	fuelMachine('gtceu:light_fuel', 1280)
	fuelMachine('gtceu:bio_diesel', 1024)
	fuelMachine('gtceu:rocket_fuel', 1000)
	fuelMachine('gtceu:ethanol', 768)
	fuelMachine('gtceu:octane', 320)
	fuelMachine('gtceu:methanol', 256)
	fuelMachine('gtceu:sulfuric_light_fuel', 160)
	fuelMachine('gtceu:oil', 30)
	fuelMachine('gtceu:oil_light', 20)
}) //End Of File
