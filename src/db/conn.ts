const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.DB_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    // Create a new MongoDB client
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB");
    } catch {
        console.log('error');
    }
}
main().catch(console.error);

export default client;