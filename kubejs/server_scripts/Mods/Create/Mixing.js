ServerEvents.recipes(e => {

    //brassRefactor
    e.recipes.createMixing(
            '2x create:brass_ingot',[
            'minecraft:copper_ingot',
            'create:zinc_ingot',
            'create:zinc_ingot',
            '#forge:dusts/lead'
        ]).superheated()

})//End Of File