// Import ItemStack.EMPTY to set the hand to empty
const ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack');

// Define the function with the item ID for the main hand, the new item, cooldown, and a command to run at the end
function VeinTweaker(mainHandItemId, newMainHandItemId, cooldownDuration, VeinType) {
    ItemEvents.rightClicked(event => {
        const player = event.player;
        const mainHandItem = player.getMainHandItem();  // Main hand item

        // Check if the item is on cooldown
        if (player.getCooldowns().isOnCooldown(mainHandItem.getItem())) {
            //player.runCommand(`/say The item is still on cooldown!`);
            return;
        }

        // Check if the player is holding the correct item in the main hand
        if (mainHandItem.getId() === mainHandItemId) {

            // Get the current timestamp
            let timestamp = new Date().toISOString(); // Format timestamp

            // Get the chunk position (floor the x and z positions)
            let chunkX = Math.floor(player.blockPosition().x / 16);
            let chunkZ = Math.floor(player.blockPosition().z / 16);

            // Log the player's name, chunk, item, and timestamp
            console.info(`[${timestamp}] Player: ${player.getName()} changed chunk (${chunkX}, ${chunkZ}), replaced item in main hand: ${mainHandItem.getId()} with ${newMainHandItemId}.`);

            // Remove one item from the main hand (reduce stack by 1 or remove it if it's the last one)
            if (mainHandItem.getCount() > 1) {
                let newMainHandStack = mainHandItem.copy();
                newMainHandStack.setCount(mainHandItem.getCount() - 1);
                player.setHeldItem(event.hand, newMainHandStack);  // Update the main hand stack
            } else {
                // Remove the last item in the stack by setting the main hand to empty
                player.setHeldItem(event.hand, ItemStack.EMPTY);
            }

            // Give exactly **one** of the new item in the main hand
            player.give(Item.of(newMainHandItemId, 1));

            // Apply a cooldown to the item using Minecraft's cooldown system
            player.getCooldowns().addCooldown(mainHandItem.getItem(), cooldownDuration); // Cooldown in ticks (e.g., 100 ticks = 5 seconds)

            // Spawn 5 rings of particles around the player's chunk with gravity
            spawnEndRodParticles(player);

            // Command to be run last
            let commandResult = player.runCommand(`/coe setvein ~ ~ ~ ${VeinType}`);

            // Only log an error if the command fails
            if (!commandResult) {
                console.error(`Failed to run command '/coe setvein ~ ~ ~ ${VeinType}'.`);
            }

            // Send success message
            //player.runCommand(`/say One item in the main hand has been removed, and particles have been spawned.`);
        }
    });
}

// Function to spawn 5 rings of end rod particles around the player's chunk with gravity
function spawnEndRodParticles(player) {
    let chunkX = Math.floor(player.blockPosition().x / 16) * 16;
    let chunkZ = Math.floor(player.blockPosition().z / 16) * 16;
    let yLevel = player.blockPosition().y;
    let layers = [yLevel, yLevel + 3, yLevel + 6, yLevel + 9, yLevel + 12];  // 5 rings at different heights
    let particleDuration = 100; // Particle lifetime in ticks (3 seconds)

    try {
        layers.forEach(layerY => {
            // Spawn particles along the X and Z axes to create rings with gravity
            for (let z = chunkZ; z < chunkZ + 16; z++) {
                player.runCommandSilent(`/particle minecraft:end_rod ${chunkX} ${layerY} ${z} 0 0.6 0 0 ${particleDuration}`);
                player.runCommandSilent(`/particle minecraft:end_rod ${chunkX + 15} ${layerY} ${z} 0 0.6 0 0 ${particleDuration}`);
            }
            for (let x = chunkX; x < chunkX + 16; x++) {
                player.runCommandSilent(`/particle minecraft:end_rod ${x} ${layerY} ${chunkZ} 0 0.6 0 0 ${particleDuration}`);
                player.runCommandSilent(`/particle minecraft:end_rod ${x} ${layerY} ${chunkZ + 15} 0 0.6 0 0 ${particleDuration}`);
            }
        });
    } catch (error) {
        console.error(`Error running particle commands: ${error}`);
    }
}

// Example usage:
// VeinTweaker('Staring Item', 'Replaced Item', 100(Cooldown), 'Vein Type');
// Ores
VeinTweaker('kubejs:rct_token_lapiz', 'minecraft:lapis_lazuli', 100, 'create_ore_excavation_plus:ore_vein_type/raw_lapis_lazuli_vein');
VeinTweaker('kubejs:rct_token_cinnabar', 'thermal:cinnabar', 100, 'createoreexcavation:ore_vein_type/cinnabar');
VeinTweaker('kubejs:rct_token_apatite', 'thermal:apatite', 100, 'createoreexcavation:ore_vein_type/apatite');
VeinTweaker('kubejs:rct_token_silver', 'thermal:silver_ingot', 100, 'createoreexcavation:ore_vein_type/silver');
VeinTweaker('kubejs:rct_token_hard_diamond', 'minecraft:diamond', 100, 'createoreexcavation:ore_vein_type/hardened_diamond');
VeinTweaker('kubejs:rct_token_tin', 'thermal:tin_ingot', 100, 'createoreexcavation:ore_vein_type/tin');
VeinTweaker('kubejs:rct_token_iron', 'minecraft:iron_ingot', 100, 'createoreexcavation:ore_vein_type/iron');
VeinTweaker('kubejs:rct_token_niter', 'thermal:niter', 100, 'createoreexcavation:ore_vein_type/niter');
VeinTweaker('kubejs:rct_token_lead', 'thermal:lead_ingot', 100, 'createoreexcavation:ore_vein_type/lead');
VeinTweaker('kubejs:rct_token_redstone', 'minecraft:redstone', 100, 'createoreexcavation:ore_vein_type/redstone');
VeinTweaker('kubejs:rct_token_nickel', 'thermal:nickel_ingot', 100, 'createoreexcavation:ore_vein_type/nickel');
VeinTweaker('kubejs:rct_token_quartz', 'minecraft:quartz', 100, 'createoreexcavation:ore_vein_type/quartz');
VeinTweaker('kubejs:rct_token_glowstone', 'minecraft:glowstone', 100, 'createoreexcavation:ore_vein_type/glowstone');
VeinTweaker('kubejs:rct_token_coal', 'minecraft:coal', 100, 'createoreexcavation:ore_vein_type/coal');
VeinTweaker('kubejs:rct_token_osmium', 'mekanism:ingot_osmium', 100, 'createoreexcavation:ore_vein_type/osmium');
VeinTweaker('kubejs:rct_token_diamond', 'minecraft:diamond', 100, 'createoreexcavation:ore_vein_type/diamond');
VeinTweaker('kubejs:rct_token_uranium', 'mekanism:ingot_uranium', 100, 'createoreexcavation:ore_vein_type/uranium');
VeinTweaker('kubejs:rct_token_gold', 'minecraft:gold_ingot', 100, 'createoreexcavation:ore_vein_type/gold');
VeinTweaker('kubejs:rct_token_copper', 'minecraft:copper_ingot', 100, 'createoreexcavation:ore_vein_type/copper');
VeinTweaker('kubejs:rct_token_sulfur', 'thermal:sulfur', 100, 'createoreexcavation:ore_vein_type/sulfur');
VeinTweaker('kubejs:rct_token_zinc', 'create:zinc_ingot', 100, 'createoreexcavation:ore_vein_type/zinc');
VeinTweaker('kubejs:rct_token_emerald', 'minecraft:emerald', 100, 'createoreexcavation:ore_vein_type/emerald');
VeinTweaker('kubejs:rct_token_fluorite', 'mekanism:fluorite_gem', 100, 'createoreexcavation:ore_vein_type/fluorite');

//Oddities
//VeinTweaker('kubejs:rct_token_netherite', 'minecraft:netherite_block', 100, 'create_ore_excavation_plus:ore_vein_type/raw_netherite_scrap_vein'); (Needs a biome Check, which i havent made yet)


// Fluids
VeinTweaker('kubejs:rct_token_lava', 'minecraft:lava_bucket', 100, 'create_ore_excavation_plus:ore_vein_type/lava_overworld_vein');
VeinTweaker('kubejs:rct_token_oil', 'minecraft:air', 100, 'createoreexcavation:ore_vein_type/crude_oil');
VeinTweaker('kubejs:rct_token_water', 'minecraft:water_bucket', 100, 'createoreexcavation:ore_vein_type/water');