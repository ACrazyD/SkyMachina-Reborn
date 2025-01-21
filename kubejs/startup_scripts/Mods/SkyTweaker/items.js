StartupEvents.registry('item', e => {

    // Custom Stuff for ExDeorum
    e.create('kubejs:flint_weave').maxStackSize(16).displayName('Flint Weave')
    e.create('kubejs:iron_weave').maxStackSize(16).displayName('Iron Weave')
    e.create('kubejs:gold_weave').maxStackSize(16).displayName('Gold Weave')
    e.create('kubejs:diamond_weave').maxStackSize(16).displayName('Diamond Weave')
    e.create('kubejs:netherite_weave').maxStackSize(16).displayName('Netherite Weave')
    
    e.create('kubejs:copper_flake').maxStackSize(16).displayName('Copper Flakes')
    e.create('kubejs:iron_flake').maxStackSize(16).displayName('Iron Flakes')
    e.create('kubejs:gold_flake').maxStackSize(16).displayName('Gold Flakes')
    e.create('kubejs:coal_shavings').maxStackSize(16).displayName('Coal Shavings')
    e.create('kubejs:bas_emitter').displayName('Emitter').texture('kubejs:item/emitter')
    e.create('kubejs:bas_sensor').displayName('Sensor').texture('kubejs:item/sensor')
    e.create('kubejs:adv_emitter').displayName('Advanced Emitter').texture('kubejs:item/adv_emitter')
    e.create('kubejs:adv_sensor').displayName('Advanced Sensor').texture('kubejs:item/adv_sensor')

})// End Of File