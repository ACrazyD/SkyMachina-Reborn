console.info('ExDeorum: Registering Sieves Recipes...')
ServerEvents.recipes((event) => {
    // Removes every sieve recipe added by default in Ex Deorum
    //exdeorum.removeDefaultSieveRecipes(event);
    event.remove({type: "exdeorum:sieve"})
    event.remove({type: "exdeorum:compressed_sieve"})

    const dirt = 'minecraft:dirt';
    const gravel = '#forge:gravel';
    const cdirt = 'minecraft:coarse_dirt';
    const sand = '#minecraft:sand';
    const dust = 'exdeorum:dust';
    const black = 'exdeorum:crushed_blackstone'
    const netherrack = 'exdeorum:crushed_netherrack'
    const endstone = 'exdeorum:crushed_end_stone'

    function sieve(mesh, chance, input, output){
    event.custom({
        "type": "exdeorum:sieve",
        "ingredient": {
          "item": input
        },
        "mesh": mesh,
        "result": output,
        "result_amount": {
          "type": "minecraft:binomial",
          "n": chance,
          "p": 0.7
        }
      }
      );
    }

    sieve('exdeorum:string_mesh', 0.05, dirt, 'minecraft:cactus');
    sieve('exdeorum:string_mesh', 0.05, dirt, 'minecraft:sunflower');
    sieve('exdeorum:string_mesh', 0.05, dirt, 'minecraft:sugar_cane');
    sieve('exdeorum:string_mesh', 0.03, dirt, 'minecraft:cocoa_beans');
    sieve('exdeorum:string_mesh', 0.05, sand, 'minecraft:sea_pickle');
    sieve('exdeorum:string_mesh', 0.05, sand, 'minecraft:kelp');
    sieve('exdeorum:string_mesh', 0.05, sand, 'minecraft:seagrass');

    // gravel and blackstone
    sieve('exdeorum:string_mesh', 0.45, gravel, 'gtceu:crushed_iron_ore');
    sieve('exdeorum:string_mesh', 0.25, gravel, 'gtceu:crushed_magnetite_ore');
    sieve('exdeorum:string_mesh', 0.35, gravel, 'gtceu:crushed_copper_ore');
    sieve('exdeorum:string_mesh', 0.3, gravel, 'gtceu:crushed_tin_ore');
    sieve('exdeorum:string_mesh', 0.25, gravel, 'gtceu:crushed_sphalerite_ore');
    sieve('exdeorum:string_mesh', 0.4, black, 'gtceu:crushed_galena_ore');
    sieve('exdeorum:string_mesh', 0.3, black, 'gtceu:crushed_stibnite_ore');  

    sieve('exdeorum:flint_mesh', 0.1, gravel, 'gtceu:crushed_silver_ore');
    sieve('exdeorum:flint_mesh', 0.05, gravel, 'gtceu:crushed_gold_ore');
    sieve('exdeorum:flint_mesh', 0.2, black, 'gtceu:crushed_pentlandite_ore');
    sieve('exdeorum:flint_mesh', 0.25, gravel, 'gtceu:crushed_chalcopyrite_ore');
    sieve('exdeorum:flint_mesh', 0.25, black, 'gtceu:crushed_bornite_ore');
    sieve('exdeorum:flint_mesh', 0.25, gravel, 'gtceu:crushed_cassiterite_ore');
    
    sieve('exdeorum:iron_mesh', 0.12, gravel, 'gtceu:crushed_pyrolusite_ore');
    sieve('exdeorum:iron_mesh', 0.05, gravel, 'gtceu:crushed_lepidolite_ore');
    sieve('exdeorum:iron_mesh', 0.1, black, 'gtceu:crushed_cobaltite_ore');
    sieve('exdeorum:iron_mesh', 0.16, black, 'gtceu:crushed_beryllium_ore');
    sieve('exdeorum:iron_mesh', 0.21, black, 'gtceu:crushed_chromite_ore');
    sieve('exdeorum:iron_mesh', 0.05, gravel, 'gtceu:crushed_pyrochlore_ore');
    sieve('exdeorum:iron_mesh', 0.05, gravel, 'gtceu:crushed_vanadium_magnetite_ore');

    sieve('exdeorum:diamond_mesh', 0.12, black, 'gtceu:crushed_molybdenite_ore');
    sieve('exdeorum:diamond_mesh', 0.02, black, 'gtceu:crushed_pitchblende_ore');
    sieve('exdeorum:diamond_mesh', 0.05, gravel, 'gtceu:crushed_tantalite_ore');
    sieve('exdeorum:diamond_mesh', 0.075, black, 'gtceu:crushed_ilmenite_ore');
    sieve('exdeorum:diamond_mesh', 0.18, gravel, 'gtceu:crushed_bauxite_ore');
    sieve('exdeorum:diamond_mesh', 0.02, gravel, 'gtceu:crushed_pollucite_ore');

    sieve('emerald', 0.15, gravel, 'gtceu:crushed_tungstate_ore');
    sieve('emerald', 0.125, gravel, 'gtceu:crushed_scheelite_ore');
    sieve('emerald', 0.35, black, 'gtceu:crushed_bastnasite_ore');
    sieve('emerald', 0.25, black, 'gtceu:crushed_cooperite_ore');
    sieve('emerald', 0.12, black, 'gtceu:crushed_barite_ore');

    sieve('exdeorum:netherite_mesh', 0.01, black, 'gtceu:crushed_naquadah_ore');

    // sand
    sieve('exdeorum:string_mesh', 0.075, sand, 'minecraft:diamond');
    sieve('exdeorum:string_mesh', 0.08, sand, 'minecraft:lapis_lazuli');
    sieve('exdeorum:string_mesh', 0.1, sand, 'minecraft:amethyst_shard');
    sieve('exdeorum:string_mesh', 0.05, sand, 'minecraft:emerald');
    sieve('exdeorum:string_mesh', 0.2, sand, 'minecraft:quartz');

    sieve('exdeorum:flint_mesh', 0.075, sand, 'gtceu:crushed_diamond_ore');
    sieve('exdeorum:flint_mesh', 0.05, sand, 'gtceu:crushed_emerald_ore');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_green_sapphire_ore');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_sapphire_ore');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_ruby_ore');
    // sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:raw_opal');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'minecraft:coal');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_quartzite_ore');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_certus_quartz_ore');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_salt_ore');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_rock_salt_ore');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_saltpeter_ore');
    sieve('exdeorum:flint_mesh', 0.1, sand, 'gtceu:crushed_realgar_ore');

    sieve('exdeorum:iron_mesh', 0.14, sand, 'gtceu:crushed_blue_topaz_ore');
    sieve('exdeorum:iron_mesh', 0.14, sand, 'gtceu:crushed_topaz_ore');
    sieve('exdeorum:iron_mesh', 0.08, sand, 'gtceu:crushed_yellow_garnet_ore');
    sieve('exdeorum:iron_mesh', 0.08, sand, 'gtceu:crushed_red_garnet_ore');
    sieve('exdeorum:iron_mesh', 0.1, sand, 'gtceu:crushed_garnet_sand_ore');
    sieve('exdeorum:iron_mesh', 0.2, sand, 'gtceu:crushed_apatite_ore');
    sieve('exdeorum:iron_mesh', 0.15, sand, 'gtceu:crushed_monazite_ore');

    // dust
    sieve('exdeorum:string_mesh', 0.4, dust, 'minecraft:redstone');
    sieve('exdeorum:string_mesh', 0.4, dust, 'minecraft:glowstone_dust');
    sieve('exdeorum:string_mesh', 0.3, dust, 'gtceu:tiny_sulfur_dust');
    sieve('exdeorum:string_mesh', 0.05, dust, 'minecraft:ender_pearl');
    sieve('exdeorum:netherite_mesh', 0.01, dust, 'minecraft:echo_shard');

    sieve('exdeorum:flint_mesh', 0.25, dust, 'ae2:sky_dust');
    
    // xycraft gems
    sieve('exdeorum:string_mesh', 0.75, dust, 'xycraft_world:xychorium_gem_blue');
    sieve('exdeorum:string_mesh', 0.75, dust, 'xycraft_world:xychorium_gem_red');
    sieve('exdeorum:string_mesh', 0.75, dust, 'xycraft_world:xychorium_gem_green');
    sieve('exdeorum:string_mesh', 0.75, dust, 'xycraft_world:xychorium_gem_light');
    sieve('exdeorum:string_mesh', 0.75, dust, 'xycraft_world:xychorium_gem_dark');


});