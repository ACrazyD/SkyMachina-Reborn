const $AbstractFurnaceBlock = Java.loadClass("net.minecraft.world.level.block.AbstractFurnaceBlock");

CreateHeatJS.registerHeatEvent((event) => {
    event.registerHeat("BLAZE", 3, 0xed9c33)
        .addHeatSource("minecraft:furnace","minecraft:furnace[lit=true]",(level,pos,blockStack) => {
            if (blockStack.hasProperty($AbstractFurnaceBlock.LIT)) {
                return blockStack.getValue($AbstractFurnaceBlock.LIT).booleanValue();
            }
            return false
        })
        .register()

    event.registerHeat("CRYOTHEUM", -1, 0x8BAAFF)
        .addHeatSource("minecraft:blue_ice", (level, pos, blockStack) => {
            return level.getBiome(pos).is(new ResourceLocation("minecraft:ice_spikes"));
        })
        .jeiTip()
        .register()
})