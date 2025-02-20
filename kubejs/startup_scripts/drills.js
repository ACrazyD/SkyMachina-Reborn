StartupEvents.registry('item', e => {
    e.create('test_drill').maxStackSize(1).texture('kubejs:normal_drill').maxDamage(1000)
    e.create('test_drill2').maxStackSize(1).texture('kubejs:diamond_drill').maxDamage(10)

})//EF