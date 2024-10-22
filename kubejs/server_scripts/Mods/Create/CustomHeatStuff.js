ServerEvents.recipes((event) => {
    event.recipes.create.mixing("minecraft:diamond", "minecraft:coal_block").heatLevel("BLAZE");
    event.recipes.create.compacting("minecraft:ice", "minecraft:blue_ice").heatLevel("CRYOTHEUM");
  });