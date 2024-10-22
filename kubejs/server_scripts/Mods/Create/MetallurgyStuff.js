// Functions are stored in /kubejs/server_scripts/Global/Functions.js

// Melting Recipes
//addMeltingRecipe(inputItem,outputFluid,outputAmount,processingTime,heatRequirement) 
addMeltingRecipe('createmetallurgy:dirty_copper_dust','createmetallurgy:molten_copper',90,35,'heated')

// Alloying Recipes
//addAlloyingRecipe(inputFluid1,inputFluid1V, inputFluid2,inputFluid2V,outputFluid,outputAmount,processingTime,heatRequirement)
addAlloyingRecipe('createmetallurgy:molten_copper',144,'createmetallurgy:molten_zinc',72,'createmetallurgy:molten_brass',216,50,'heated')

// Basin Casting
//addBasinCasting(inputFluid2,inputAmount2,outputItem2,moldconsume,processingTime2)
addBasinCasting('createmetallurgy:molten_brass',144,'create:brass_ingot',false,50)

// Table Casting
//addTableCasting(mold,inputFluid3,inputAmmount3,outputItem3,moldconsume2,processingTime3)
addTableCasting('createmetallurgy:graphite_ingot_mold','createmetallurgy:molten_copper',144,'minecraft:copper_ingot',false,50)