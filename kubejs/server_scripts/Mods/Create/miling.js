console.info('Template: ChangeMe')
ServerEvents.recipes(e => {

    e.remove({id: 'create:milling/gravel'})
    
    e.recipes.create.milling('minecraft:sand', 'minecraft:gravel')
    e.recipes.create.milling('exdeorum:dust', 'minecraft:sand')


})//End Of File