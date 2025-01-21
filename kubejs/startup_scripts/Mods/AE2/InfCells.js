StartupEvents.registry('item', allthemods => {

    //##### Fluids #####
    //Lava
    allthemods.create('lava_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .fluidType('minecraft:lava')
        .cellModel('kubejs:block/drive/inf_cell');

    // ##### Basic Stuff #####
    //Dirt
    allthemods.create('dirt_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:dirt')
        .cellModel('kubejs:block/drive/inf_cell');
    //Moss
    allthemods.create('moss_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:moss_block')
        .cellModel('kubejs:block/drive/inf_cell');
    //Andesite
    allthemods.create('andesite_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:andesite')
        .cellModel('kubejs:block/drive/inf_cell');
    //Diorite
    allthemods.create('diorite_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:diorite')
        .cellModel('kubejs:block/drive/inf_cell');
    //Granite
    allthemods.create('granite_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:granite')
        .cellModel('kubejs:block/drive/inf_cell');
    //Tuff
    allthemods.create('tuff_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:tuff')
        .cellModel('kubejs:block/drive/inf_cell');
    //sand
    allthemods.create('sand_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:sand')
        .cellModel('kubejs:block/drive/inf_cell');
    //Red Sand
    allthemods.create('red_sand_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:red_sand')
        .cellModel('kubejs:block/drive/inf_cell');
    //End Stone
    allthemods.create('end_stone_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:end_stone')
        .cellModel('kubejs:block/drive/inf_cell');
    //Netherrack
    allthemods.create('netherrack_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:netherrack')
        .cellModel('kubejs:block/drive/inf_cell');
    //Clay
    allthemods.create('clay_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:clay')
        .cellModel('kubejs:block/drive/inf_cell');
    //Blackstone
    allthemods.create('blackstone_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:blackstone')
        .cellModel('kubejs:block/drive/inf_cell');
    //Basalt
    allthemods.create('basalt_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:basalt')
        .cellModel('kubejs:block/drive/inf_cell');
    //Calcite
    allthemods.create('calcite_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:calcite')
        .cellModel('kubejs:block/drive/inf_cell');
    //Cobbled Deepslate
    allthemods.create('cobbled_deepslate_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:cobbled_deepslate')
        .cellModel('kubejs:block/drive/inf_cell');
    //Soul Sand
    allthemods.create('soul_sand_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('minecraft:soul_sand')
        .cellModel('kubejs:block/drive/inf_cell');
    //Sky stone
    allthemods.create('sky_stone_cell', 'custom_infinity_cell')
        .texture('kubejs:item/inf_cell')
        .itemType('ae2:sky_stone_block')
        .cellModel('kubejs:block/drive/inf_cell');

})