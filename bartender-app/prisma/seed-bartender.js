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

    // 1. Recipes (Professional Mixology Mix)
    const recipes = [
      {
        name: "Paper Plane",
        ingredients: ["0.75 oz Bourbon", "0.75 oz Amaro Nonino", "0.75 oz Aperol", "0.75 oz Fresh Lemon Juice"],
        instructions: "Shake all ingredients with ice and strain into a chilled coupe glass. Garnish with a small paper plane.",
        glassware: "Coupe Glass",
        category: "Modern Classic"
      },
      {
        name: "Gin Basil Smash",
        ingredients: ["2 oz Gin", "0.75 oz Lemon Juice", "0.5 oz Simple Syrup", "12 Fresh Basil Leaves"],
        instructions: "Muddle basil with lemon and syrup. Add gin and shake hard with ice. Double strain into a rocks glass over fresh ice.",
        glassware: "Rocks Glass",
        category: "Modern Classic"
      },
      {
        name: "Boulevardier",
        ingredients: ["1.5 oz Bourbon", "1 oz Campari", "1 oz Sweet Vermouth"],
        instructions: "Stir all ingredients with ice in a mixing glass. Strain into a rocks glass over a large clear ice cube.",
        glassware: "Rocks Glass",
        category: "Classic"
      },
      {
        name: "Last Word",
        ingredients: ["0.75 oz Gin", "0.75 oz Green Chartreuse", "0.75 oz Maraschino Liqueur", "0.75 oz Lime Juice"],
        instructions: "Shake all ingredients with ice and strain into a chilled coupe. Garnish with a brandied cherry.",
        glassware: "Coupe Glass",
        category: "Classic"
      }
    ];

    for (const r of recipes) {
      await client.query(
        'INSERT INTO "Recipe" (name, ingredients, instructions, glassware, category) VALUES ($1, $2, $3, $4, $5)',
        [r.name, r.ingredients, r.instructions, r.glassware, r.category]
      );
    }

    // 2. Pro Bar Tools (Affiliate Database)
    const tools = [
      {
        title: "Koriko Boston Shaker",
        description: "The gold standard for professional bartenders. Weighted tins for perfect balance.",
        url: "https://amazon.com/example-koriko",
        category: "Tools"
      },
      {
        title: "Japanese Style Jigger",
        description: "Stainless steel multi-measure jigger for precision mixology.",
        url: "https://amazon.com/example-jigger",
        category: "Tools"
      },
      {
        title: "Badass Muddler",
        description: "Extra long, food-grade plastic muddler for heavy duty herbs and fruit.",
        url: "https://amazon.com/example-muddler",
        category: "Tools"
      },
      {
        title: "Fine Mesh Strainer",
        description: "Ensures no ice shards or pulp make it into your final drink.",
        url: "https://amazon.com/example-strainer",
        category: "Tools"
      }
    ];

    for (const t of tools) {
      await client.query(
        'INSERT INTO "AffiliateLink" (title, description, url, category) VALUES ($1, $2, $3, $4)',
        [t.title, t.description, t.url, t.category]
      );
    }

    // 3. Spirits & Sour Beers (Featured Brands)
    // Note: Using the AffiliateLink table for these too as they can have referral links
    const products = [
      {
        title: "Hendrick's Gin",
        description: "Infused with rose and cucumber for a uniquely refreshing profile.",
        url: "#",
        category: "Spirits"
      },
      {
        title: "Buffalo Trace Bourbon",
        description: "Deep amber color with complex aromas of vanilla, mint, and molasses.",
        url: "#",
        category: "Spirits"
      },
      {
        title: "Vault City: 7 Years Sour",
        description: "Triple-fruited modern sour beer with peach and passion fruit.",
        url: "#",
        category: "Beer"
      },
      {
        title: "Dogfish Head SeaQuench",
        description: "A session sour mashup of Kolsch, Gose, and Berliner Weisse.",
        url: "#",
        category: "Beer"
      }
    ];

    for (const p of products) {
      await client.query(
        'INSERT INTO "AffiliateLink" (title, description, url, category) VALUES ($1, $2, $3, $4)',
        [p.title, p.description, p.url, p.category]
      );
    }

    console.log(`\n🎉 SUCCESS! Database seeded with ${recipes.length} recipes and ${tools.length + products.length} featured products.`);
  } catch (err) {
    console.error("❌ Seeding failed!");
    console.error(err);
  } finally {
    await client.end();
  }
}

main();
