console.info('Template: ChangeMe')
ServerEvents.recipes(e => {

    e.remove({id: 'create:milling/gravel'})
    e.remove({id: 'create:milling/calcite'})
    
    e.recipes.create.milling('minecraft:sand', 'minecraft:gravel')
    e.recipes.create.milling('kubejs:dust', 'minecraft:sand')


})//End Of File