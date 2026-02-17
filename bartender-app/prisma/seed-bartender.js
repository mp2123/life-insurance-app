const { Client } = require('pg');
require('dotenv').config();

async function main() {
  const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
  console.log("Connecting to Bartender Supabase DB...");
  
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log("✅ Connected!");

    // 1. Clear existing data (optional, but good for a fresh start)
    // await client.query('TRUNCATE TABLE "Recipe", "AffiliateLink" RESTART IDENTITY CASCADE');

    // 2. Insert Recipes
    const recipes = [
      {
        name: "Old Fashioned",
        ingredients: ["2 oz Bourbon", "2 dashes Angostura bitters", "1 tsp Sugar", "Orange peel"],
        instructions: "Muddle sugar and bitters. Add bourbon and ice. Stir until chilled. Strain into rocks glass over fresh ice. Garnish with orange peel.",
        glassware: "Rocks Glass",
        category: "Classic"
      },
      {
        name: "Margarita",
        ingredients: ["2 oz Tequila", "1 oz Lime juice", "0.75 oz Agave nectar", "Salt rim"],
        instructions: "Shake all ingredients with ice. Strain into a salt-rimmed glass over fresh ice.",
        glassware: "Rocks Glass",
        category: "Classic"
      },
      {
        name: "Negroni",
        ingredients: ["1 oz Gin", "1 oz Campari", "1 oz Sweet Vermouth"],
        instructions: "Stir all ingredients with ice. Strain into a rocks glass over fresh ice. Garnish with an orange twist.",
        glassware: "Rocks Glass",
        category: "Classic"
      }
    ];

    for (const r of recipes) {
      await client.query(
        'INSERT INTO "Recipe" (name, ingredients, instructions, glassware, category) VALUES ($1, $2, $3, $4, $5)',
        [r.name, r.ingredients, r.instructions, r.glassware, r.category]
      );
    }

    // 3. Insert Affiliate Links
    const links = [
      {
        title: "Boston Shaker Set",
        description: "Professional grade stainless steel shaker.",
        url: "https://amazon.com/example-shaker",
        category: "Tools"
      },
      {
        title: "Crystal Rocks Glasses",
        description: "Set of 4 heavy-base rocks glasses.",
        url: "https://amazon.com/example-glasses",
        category: "Glassware"
      }
    ];

    for (const l of links) {
      await client.query(
        'INSERT INTO "AffiliateLink" (title, description, url, category) VALUES ($1, $2, $3, $4)',
        [l.title, l.description, l.url, l.category]
      );
    }

    console.log(`
🎉 SUCCESS! Bartender database seeded with ${recipes.length} recipes and ${links.length} affiliate links.`);
  } catch (err) {
    console.error("❌ Seeding failed!");
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
