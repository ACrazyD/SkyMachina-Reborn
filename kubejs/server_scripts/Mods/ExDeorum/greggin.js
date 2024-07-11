console.info('Greggin: The Sieves...')
ServerEvents.recipes((e) => {
	
	var hammer = '#forge:tools/hammers'
	var saw = '#forge:tools/saws'
	var screwdriver = '#forge:tools/screwdrivers'
	var wrench = '#forge:tools/wrenches'
	var file = '#forge:tools/files'
	var wirecutter = '#forge:tools/wirecutters'

	function sieve(input, output) {
		e.remove({ id: output })
		e.shaped(output, ['pHp', 'psp', 'rSr'], {
			p: `${input}_planks`,
			H: hammer,
			s: `${input}_slab`,
			S: saw,
			r: 'minecraft:stick',
		})
	}

	function barrel(input, output) {
		e.remove({ id: output })
		e.shaped(output, ['pHp', 'pSp', 'psp'], {
			p: `${input}_planks`,
			H: hammer,
			s: `${input}_slab`,
			S: saw,
		})
	}

	barrel('minecraft:oak', 'exdeorum:oak_barrel')
	barrel('minecraft:spruce', 'exdeorum:spruce_barrel')
	barrel('minecraft:birch', 'exdeorum:birch_barrel')
	barrel('minecraft:jungle', 'exdeorum:jungle_barrel')
	barrel('minecraft:acacia', 'exdeorum:acacia_barrel')
	barrel('minecraft:dark_oak', 'exdeorum:dark_oak_barrel')
	barrel('minecraft:mangrove', 'exdeorum:mangrove_barrel')
	barrel('minecraft:cherry', 'exdeorum:cherry_barrel')
	barrel('minecraft:bamboo', 'exdeorum:bamboo_barrel')
	barrel('minecraft:warped', 'exdeorum:warped_barrel')
	barrel('minecraft:crimson', 'exdeorum:crimson_barrel')
	barrel('biomesoplenty:fir', 'exdeorum:fir_barrel')
	barrel('biomesoplenty:redwood', 'exdeorum:redwood_barrel')
	barrel('biomesoplenty:mahogany', 'exdeorum:mahogany_barrel')
	barrel('biomesoplenty:jacaranda', 'exdeorum:jacaranda_barrel')
	barrel('biomesoplenty:palm', 'exdeorum:palm_barrel')
	barrel('biomesoplenty:willow', 'exdeorum:willow_barrel')
	barrel('biomesoplenty:dead', 'exdeorum:dead_barrel')
	barrel('biomesoplenty:magic', 'exdeorum:magic_barrel')
	barrel('biomesoplenty:umbran', 'exdeorum:umbran_barrel')

	sieve('minecraft:oak', 'exdeorum:oak_sieve')
	sieve('minecraft:spruce', 'exdeorum:spruce_sieve')
	sieve('minecraft:birch', 'exdeorum:birch_sieve')
	sieve('minecraft:jungle', 'exdeorum:jungle_sieve')
	sieve('minecraft:acacia', 'exdeorum:acacia_sieve')
	sieve('minecraft:dark_oak', 'exdeorum:dark_oak_sieve')
	sieve('minecraft:mangrove', 'exdeorum:mangrove_sieve')
	sieve('minecraft:cherry', 'exdeorum:cherry_sieve')
	sieve('minecraft:bamboo', 'exdeorum:bamboo_sieve')
	sieve('minecraft:warped', 'exdeorum:warped_sieve')
	sieve('minecraft:crimson', 'exdeorum:crimson_sieve')
	sieve('biomesoplenty:fir', 'exdeorum:fir_sieve')
	sieve('biomesoplenty:redwood', 'exdeorum:redwood_sieve')
	sieve('biomesoplenty:mahogany', 'exdeorum:mahogany_sieve')
	sieve('biomesoplenty:jacaranda', 'exdeorum:jacaranda_sieve')
	sieve('biomesoplenty:palm', 'exdeorum:palm_sieve')
	sieve('biomesoplenty:willow', 'exdeorum:willow_sieve')
	sieve('biomesoplenty:dead', 'exdeorum:dead_sieve')
	sieve('biomesoplenty:magic', 'exdeorum:magic_sieve')
	sieve('biomesoplenty:umbran', 'exdeorum:umbran_sieve')
}) //End Of File
