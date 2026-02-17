const { Client } = require('pg');

async function testDirect() {
  const connectionString = "postgresql://postgres:2123Footballsjs%231@db.tozhwycrkpwvrmveykbm.supabase.co:5432/postgres";
  console.log("Testing DIRECT connection with escaped password...");
  
  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log("✅ Successfully connected DIRECTLY!");
    await client.end();
  } catch (err) {
    console.error("❌ DIRECT Connection failed!");
    console.error(err);
  }
}

testDirect();
