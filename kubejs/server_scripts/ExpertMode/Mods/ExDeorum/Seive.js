//priority: 10
//packmode: expert

ServerEvents.recipes((event) => {
    // Removes every sieve recipe added by default in Ex Deorum
    exdeorum.removeDefaultSieveRecipes(event);
    exdeorum.removeDefaultHeatSources();

    //Inputs
        let Dirt = 'minecraft:dirt'
        let SoulSand = 'minecraft:soul_sand'
        let RedSand = 'minecraft:red_sand'
        let Gravel = 'minecraft:gravel'
        let Sand = 'minecraft:sand'
        let Dust = 'exdeorum:dust'
        let Netherrack = 'exdeorum:crushed_netherrack'
        let EndStone = 'exdeorum:crushed_end_stone'
        let Deepslate = 'exdeorum:crushed_deepslate'
        let Blackstone = 'exdeorum:crushed_blackstone'
        let Moss = 'minecraft:moss_block'

        let StringMesh = 'exdeorum:string_mesh'
        let FlintMesh = 'exdeorum:flint_mesh'
        let IronMesh = 'exdeorum:iron_mesh'
        let GoldMesh = 'exdeorum:golden_mesh'
        let DiamondMesh = 'exdeorum:diamond_mesh'
        let NetheriteMesh = 'exdeorum:netherite_mesh'

        let addSifting = (input, mesh, output, amount, chance) => {
            event.custom(
                {
                    type: 'exdeorum:sieve',
                    ingredient: {
                        item: input
                    },
                    mesh: mesh,
                    result: output,
                    result_amount: {
                        type: 'minecraft:binomial',
                        n: amount,
                        p: chance
                    }
                }
            )
        }
    
        let addHammer = (input, output) => {
            event.custom(
                {
                    type: 'exdeorum:hammer',
                    ingredient: [
                        {
                            item: input
                        }
                    ],
                    result: output,
                    result_amount: 1.0
                }
            )
        }
    
        let addBarrelMixing = (fluid, input, output) => {
            event.custom(
                {
                    type: 'exdeorum:barrel_mixing',
                    fluid: fluid,
                    fluid_amount: 1000,
                    ingredient: {
                        item: input
                    },
                    result: output
                }
            )
        }
    
        let addBarrelFluidMixing = (base, input, consume, output) => {
            event.custom(
                {
                    type: 'exdeorum:barrel_fluid_mixing',
                    additive_fluid: input,
                    base_fluid: base,
                    base_fluid_amount: 1000,
                    consumes_additive: consume,
                    result: output
                }
            )
        }
        
        let addHeatSource = (block, heat) => {
            event.custom(
                {
                    type: 'exdeorum:crucible_heat_source',
                    block_predicate: {
                        block: block
                    },
                    heat_value: heat
                }
            )
        }
    
        let addHeatedCrucible = (input, fluid, amount) => {
            event.custom(
                {
                    type: 'exdeorum:lava_crucible',
                    fluid: {
                        Amount: amount,
                        FluidName: fluid
                    },
                    ingredient: {
                        item: input
                    }
                }
            )
        }

});