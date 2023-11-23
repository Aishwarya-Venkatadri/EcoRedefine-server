import knex from "knex";
import knexFile from "../knexfile.js";

const db = knex(knexFile);

const index = async(_req, res)=>{
    try{
        const data = await db("categories");
        res.status(200).json(data);
    }catch{
        res.status(400).send(`Error retrieving categories: ${err}`);
    }
};