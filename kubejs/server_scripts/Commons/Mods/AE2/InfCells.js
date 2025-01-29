//priority: 10
//packmode: normal

ServerEvents.recipes(e => {

    function cell(output, top, left, right, component){
        e.shaped(output, [
                'GIG',
                'XCY',
                'AVU'
            ], {
                G: 'ae2:quartz_glass',
                I: top,
                X: left,
                C: component,
                Y: right,
                A: 'mysticalagradditions:insanium_ingot',
                V: 'mysticalagradditions:insanium_ingot',
                U: 'mysticalagradditions:insanium_ingot'
            }
        )
    }

    cell('kubejs:lava_cell', 'allthecompressed:blazing_crystal_block_3x', 'minecraft:lava_bucket', 'minecraft:lava_bucket', 'megacells:cell_component_256m')
    cell('kubejs:dirt_cell', 'allthecompressed:dirt_6x', 'minecraft:water_bucket', 'minecraft:mud', 'megacells:cell_component_256m')
    cell('kubejs:moss_cell', 'allthecompressed:moss_block_5x', 'minecraft:bone_block', 'minecraft:bone_block', 'megacells:cell_component_256m')
    cell('kubejs:andesite_cell', 'allthecompressed:andesite_5x', 'minecraft:water_bucket', 'minecraft:lava_bucket', 'megacells:cell_component_256m')
    cell('kubejs:diorite_cell', 'allthecompressed:diorite_5x', 'minecraft:water_bucket', 'minecraft:lava_bucket', 'megacells:cell_component_256m')
    cell('kubejs:granite_cell', 'allthecompressed:granite_5x', 'minecraft:water_bucket', 'minecraft:lava_bucket', 'megacells:cell_component_256m')
    cell('kubejs:tuff_cell', 'allthecompressed:tuff_5x', 'minecraft:water_bucket', 'minecraft:lava_bucket', 'megacells:cell_component_256m')
    cell('kubejs:sand_cell', 'allthecompressed:sand_6x', 'mekanism:crusher', 'mekanism:crusher', 'extendedae:infinity_cobblestone_cell')
    cell('kubejs:red_sand_cell', 'allthecompressed:red_sand_5x', 'minecraft:lava_bucket', 'minecraft:lava_bucket', 'kubejs:sand_cell')
    cell('kubejs:end_stone_cell', 'allthecompressed:end_stone_6x', 'minecraft:purpur_block', 'minecraft:purpur_block', 'megacells:cell_component_256m')
    cell('kubejs:netherrack_cell', 'allthecompressed:netherrack_6x', 'minecraft:lava_bucket', 'minecraft:gravel', 'megacells:cell_component_256m')
    cell('kubejs:clay_cell', 'allthecompressed:clay_5x', 'minecraft:mud', 'minecraft:mud', 'megacells:cell_component_256m')
    cell('kubejs:blackstone_cell', 'allthecompressed:blackstone_6x', 'minecraft:lava_bucket', 'minecraft:blue_ice', 'megacells:cell_component_256m')
    cell('kubejs:basalt_cell', 'allthecompressed:basalt_6x', 'minecraft:lava_bucket', 'minecraft:blue_ice', 'megacells:cell_component_256m')
    cell('kubejs:calcite_cell', 'allthecompressed:calcite_5x', 'minecraft:water_bucket', 'minecraft:bone_block', 'megacells:cell_component_256m')
    cell('kubejs:cobbled_deepslate_cell', 'allthecompressed:cobbled_deepslate_6x', 'minecraft:lava_bucket', 'minecraft:packed_ice', 'megacells:cell_component_256m')
    cell('kubejs:soul_sand_cell', 'allthecompressed:soul_sand_6x', 'minecraft:lava_bucket', 'minecraft:sand', 'megacells:cell_component_256m')
    cell('kubejs:sky_stone_cell', 'allthecompressed:sky_stone_block_5x', 'minecraft:lava_bucket', 'ae2:sky_dust', 'megacells:cell_component_256m')
})