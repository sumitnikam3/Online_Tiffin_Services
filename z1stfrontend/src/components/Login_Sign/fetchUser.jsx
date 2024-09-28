const { MongoClient } = require('mongodb');


// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'Online-Tiffin-Services';

// Collection Name
const collectionName = 'users';


async function getUserData() {
    const client = new MongoClient(uri);

    try {

        await client.connect();

        const database = client.db(dbName);

        // Access the collection
        const collection = database.collection(collectionName);


        const userData = await collection.findOne({ name: 'pratik' });
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

getUserData()
    .then((userData) => {
        console.log('User Data:', userData);

    })
    .catch((error) => {
        console.error('Error:', error);

});
