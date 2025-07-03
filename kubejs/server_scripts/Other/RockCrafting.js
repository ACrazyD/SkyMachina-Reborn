ServerEvents.recipes(e => { 

    e.shapeless('notreepunching:flint_shard', [
        '2x #notreepunching:loose_rocks'
    ])

    e.shapeless('minecraft:flint', [
        '3x notreepunching:flint_shard'
    ])

    e.shapeless('3x notreepunching:flint_shard', [
        'minecraft:flint'
    ])

})

ServerEvents.tags('item', e => {
    e.add('notreepunching:loose_rocks', ['projectvibrantjourneys:rocks', 'projectvibrantjourneys:mossy_rocks', 'projectvibrantjourneys:red_sandstone_rocks', 'projectvibrantjourneys:sandstone_rocks'])
})//EF

/* ServerEvents.rightClickBlock((event) => {
    let { player, item, block, world } = event;
    let offhandItem = player.offhandItem;

    // Function to handle right-click recipe
    function rightClickRecipe(inputItems, targetBlockTag, outputs, tool, sound, durabilityDamage) {
        let validItems = Ingredient.of(inputItems);
        let validBlocks = Ingredient.of(`#${targetBlockTag}`);
        let validTool = tool !== "na" ? Ingredient.of(tool) : null;

        // Check if the player is holding a valid item and clicking a valid block
        if (validItems.test(item) && validBlocks.test(block)) {
            // Check tool requirement
            if (validTool && !validTool.test(offhandItem)) {
                return; // Player does not have the required tool
            }

            let roll = world.random.nextInt(100) + 1; // Roll from 1-100
            let chosenOutput = outputs.find((output) => roll <= output.chance);

            if (chosenOutput) {
                world.spawnItem(chosenOutput.item, block.pos.above());
            }

            // Damage the tool if not "na"
            if (validTool && tool !== "na" && !player.isCreative()) {
                offhandItem.damageValue += durabilityDamage; // Apply custom durability damage
                if (offhandItem.damageValue >= offhandItem.maxDamage) {
                    player.offhandItem = Item.empty(); // Breaks the tool
                }
            }

            // Play a custom sound (optional)
            if (sound !== "na") {
                world.playSound(sound, block.pos, 1.0, 1.0);
            }

            // Consume one item unless in Creative mode
            if (!player.isCreative()) {
                item.count--;
            }
        }
    }

    // Register recipes with customizable tool damage and sound
    rightClickRecipe(
        "#forge:cobblestone",   // Input item (tag or single item)
        "minecraft:stone",       // Target block tag
        [
            { item: "minecraft:flint", chance: 75 },
            { item: "minecraft:gravel", chance: 25 }
        ],
        "na",  // Tool requirement (can be "na")
        "minecraft:item.flintandsteel.use",  // Custom sound (can be "na")
        2 // Durability damage per craft
    );

    rightClickRecipe(
        "minecraft:iron_ingot",  // Input item
        "forge:blast_furnaces",  // Target block tag
        [
            { item: "minecraft:gold_ingot", chance: 50 },
            { item: "minecraft:diamond", chance: 5 }
        ],
        "minecraft:diamond_pickaxe",  // Tool requirement (can be "na")
        "minecraft:item.armor.equip_chainmail",  // Custom sound
        5 // Durability damage per craft
    );

    rightClickRecipe(
        "minecraft:stick",  // Input item
        "minecraft:crafting_table",  // Target block tag
        [
            { item: "minecraft:torch", chance: 100 }
        ],
        "na",  // No tool required
        "na",  // No sound
        0 // No durability damage
    );
});
 */