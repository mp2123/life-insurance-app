const { Client } = require('pg');
require('dotenv').config();

async function testConnection() {
  const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
  console.log("Testing connection to:", connectionString.replace(/:[^:]+@/, ":****@"));
  
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log("✅ Successfully connected to Supabase!");
    const res = await client.query('SELECT NOW()');
    console.log("Database time:", res.rows[0].now);
    await client.end();
  } catch (err) {
    console.error("❌ Connection failed!");
    console.error(err);
    process.exit(1);
  }
}

testConnection();
