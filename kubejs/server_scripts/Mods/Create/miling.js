console.info('Template: ChangeMe')
ServerEvents.recipes(e => {

    e.remove({id: 'create:milling/gravel'})
    e.remove({id: 'create:milling/calcite'})
    
    e.recipes.create.milling('minecraft:sand', 'minecraft:gravel')
    e.recipes.create.milling('exdeorum:dust', 'minecraft:sand')

    e.recipes.create.milling('gtceu:calcite_dust', 'minecraft:calcite')


})//End Of File