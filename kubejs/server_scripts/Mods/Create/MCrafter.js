console.info('Create MCrafter: Registering recipes...')
ServerEvents.recipes(e => {

    e.recipes.create.mechanical_crafting('create:crushing_wheel', [
        ' sss ',
        'swaws',
        'sacas',
        'swaws',
        ' sss '
    ],{
        s: 'gtceu:stone_plate',
        w: 'gtceu:wood_plate',
        a: 'kubejs:andesite_alloy_frame',
        c: 'create:large_cogwheel'
    })

})//End Of File