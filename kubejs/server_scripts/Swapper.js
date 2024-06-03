console.info('Recipe AutoSwapper: Swapping Random Stuff...')
ServerEvents.recipes((e) => {

	e.replaceInput({ input: 'tfmg:screw' }, 'tfmg:screw', 'gtceu:steel_screw')
    e.replaceInput({ input: 'vintageimprovements:iron_spring'}, 'vintageimprovements:iron_spring', 'gtceu:iron_spring')

}) //End Of File
