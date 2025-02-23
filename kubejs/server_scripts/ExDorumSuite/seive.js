ServerEvents.recipes(e => {
  // Function to add a custom sieve recipe
  exdeorum.removeDefaultSieveRecipes(e);
  function addSieveRecipe(input, mesh, output, trials, probability) {
      e.custom({
          type: 'exdeorum:sieve',
          ingredient: {
              item: input
          },
          mesh: mesh,
          result: output,
          result_amount: {
              type: 'minecraft:binomial',
              n: trials,
              p: probability
          }
      });
  }

  // Example: Adding a custom sieve recipe
  addSieveRecipe(
      'minecraft:dirt',
      'exdeorum:diamond_mesh', 
      'exdeorum:deepslate_pebble',
      3,
      0.6 
  );
});
