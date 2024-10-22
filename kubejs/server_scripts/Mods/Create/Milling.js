console.info('Template: ChangeMe')
ServerEvents.recipes(e => {

    e.remove({id: 'create:milling/gravel'})
    e.remove({id: 'create:milling/calcite'})
    
    e.recipes.createMilling('minecraft:sand', 'minecraft:gravel')
    e.recipes.createMilling('minecraft:gravel', 'minecraft:cobblestone')
    e.recipes.createMilling('kubejs:dust', 'minecraft:sand')


})//End Of File