require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const users = require('./users.json');
const events = require('./events.json');
const tickets = require('./tickets.json');
const slides = require('./slides.json');

const DB = process.env.REACT_APP_MONGODB_NAME;

const dataToSeed = {
  users,
  events,
  tickets,
  slides,
};

const oidToObjectId = (jsonData, collectionName) => {
  return jsonData.map((item) => {
    let newItem = {};
    switch (collectionName) {
      case 'events':
        newItem = {
          ...item,
          _id: ObjectId(item._id['$oid']),
          idOwner: ObjectId(item.idOwner['$oid']),
          dates: item.dates.map((dateElem) => ({
            ...dateElem,
            _id: ObjectId(dateElem._id['$oid']),
            ticketCategories: dateElem.ticketCategories.map((ticketElem) => ({
              ...ticketElem,
              _id: ObjectId(ticketElem._id['$oid']),
              createdAt: new Date(
                parseInt(ticketElem.createdAt['$date']['$numberLong'])
              ),
              updatedAt: new Date(
                parseInt(ticketElem.updatedAt['$date']['$numberLong'])
              ),
            })),
            createdAt: new Date(
              parseInt(dateElem.createdAt['$date']['$numberLong'])
            ),
            updatedAt: new Date(
              parseInt(dateElem.updatedAt['$date']['$numberLong'])
            ),
          })),
          createdAt: new Date(parseInt(item.createdAt['$date']['$numberLong'])),
          updatedAt: new Date(parseInt(item.updatedAt['$date']['$numberLong'])),
        };
        break;

      case 'tickets':
        newItem = {
          ...item,
          _id: ObjectId(item._id['$oid']),
          idSale: ObjectId(item.idSale['$oid']),
          idUsuario: ObjectId(item.idUsuario['$oid']),
          idEvento: ObjectId(item.idEvento['$oid']),
          idDate: ObjectId(item.idEvento['$oid']),
          idCategory: ObjectId(item.idCategory['$oid']),
          createdAt: new Date(parseInt(item.createdAt['$date']['$numberLong'])),
          updatedAt: new Date(parseInt(item.updatedAt['$date']['$numberLong'])),
        };
        break;

      case 'slides':
        newItem = {
          ...item,
          _id: ObjectId(item._id['$oid']),
          eventId: ObjectId(item.eventId['$oid']),
          createdAt: new Date(parseInt(item.createdAt['$date']['$numberLong'])),
          updatedAt: new Date(parseInt(item.updatedAt['$date']['$numberLong'])),
        };
        break;

      default:
        newItem = {
          ...item,
          _id: ObjectId(item._id['$oid']),
          createdAt: new Date(parseInt(item.createdAt['$date']['$numberLong'])),
          updatedAt: new Date(parseInt(item.updatedAt['$date']['$numberLong'])),
        };
        break;
    }
    return newItem;
  });
};

async function dropAndSeed(mongoClient, collectionName, jsonData) {
  const collection = mongoClient.db(DB).collection(collectionName);

  await collection.drop().catch((e) => {
    console.log('error when dropping', e);
    if (e.code !== 26) {
      throw e;
    }
  });
  await collection.insertMany(oidToObjectId(jsonData, collectionName));
}

async function seedDB() {
  // Connection URL

  const uri = `mongodb+srv://${process.env.REACT_APP_MONGO_URI}`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    console.log('Connected correctly to server');

    for (const key of Object.keys(dataToSeed)) {
      await dropAndSeed(client, key, dataToSeed[key]);
    }

    console.log('Database seeded! :)');

    client.close();
  } catch (err) {
    console.log(err.stack);
    client.close();
  }
}

seedDB();
