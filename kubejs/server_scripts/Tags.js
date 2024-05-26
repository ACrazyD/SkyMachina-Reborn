console.info('Tags: Registering Tags...')
ServerEvents.tags('block', (event) => {
	event.add('forge:ores/sphalerite', 'create:zinc_ore')
	event.add('srg:conversion_ores', 'create:zinc_ore')
})

ServerEvents.tags('item', (event) => {
	event.add('forge:raw_materials/sphalerite', 'create:raw_zinc')
	event.add('forge:ores/sphalerite', 'create:zinc_ore')
	event.add('srg:conversion_ores', 'create:zinc_ore')
	event.add('srg:conversion_ores', 'create:raw_zinc')
}) //End Of File
