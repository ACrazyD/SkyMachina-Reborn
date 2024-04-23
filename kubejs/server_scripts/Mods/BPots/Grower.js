ServerEvents.recipes((event) => {

    //Rubber Stuff
	event.recipes.botanypots.crop(
		'gtceu:rubber_sapling',
		['dirt'],
		{ block: 'gtceu:rubber_sapling' }, 
		[
			Item.of('gtceu:rubber_sapling')
				.withChance(.15)
				.withRolls(1),
            Item.of('gtceu:rubber_log')
                .withChance(1)
                .withRolls(1, 2),
            Item.of('gtceu:sticky_resin')
                .withChance(.30)
                .withRolls(1, 2)
		],
		10, 
		1
	)

})//End Of File
