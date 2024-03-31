import mongoose from "mongoose"



export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ycsgjha-shard-00-00.8fpvyr7.mongodb.net:27017,ac-ycsgjha-shard-00-01.8fpvyr7.mongodb.net:27017,ac-ycsgjha-shard-00-02.8fpvyr7.mongodb.net:27017/?ssl=true&replicaSet=atlas-kjscoa-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp`;
    try {
        
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log(`Database connected successfully`);
    } catch (error) {
        console.log(`Error while connecting with the database`, error);
    }
}

export default Connection;