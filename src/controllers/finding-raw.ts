import client from '../db/conn';
import express from 'express';

export const findingRaw = async (req: express.Request, res: express.Response) => {
    // Name of the database you want to use
    const dbName = "silk-home";

    // Name of the collections you want to interact with
    const collectionName2 = "raw-findings";

    try {
        const db = client.db(dbName);
        const collection2 = db.collection(collectionName2);
        const query = {}; // You can specify a query to filter the results if needed
        const cursor = await collection2.find(query);
        let array:any=[]
        await cursor.forEach((document: any) => {
            array.push(document)
        });

        return res.status(200).json(array).end();
    } catch {
        console.log('error');
    }

};

