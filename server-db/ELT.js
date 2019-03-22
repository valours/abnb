const mongoose = require('mongoose');
const faker = require('faker');
mongoose.connect('mongodb://localhost/abnb', { useNewUrlParser: true });

// Connection
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("Let's go guy");

  /**
   * House injection
   */
  const HouseSchema = mongoose.Schema({
    id: String,
    piecesNumber: Number,
    area: Number,
    ownerId: String
  });

  const HouseModel = mongoose.model('Houses', HouseSchema);

  const houses = []; 
  for (i = 0; i < faker.random.number({ min: 5, max: 10, precision: 1 });) {
    houses.push({
      id: faker.random.uuid(),
      ownerId: faker.random.boolean() ? '42' : '47',
      area: faker.random.number({ min: 30, max: 50, precision: 1}),
      piecesNumber: faker.random.arrayElement([1,2,3,4]),
    })
    i++;
  }

  HouseModel.collection.insertMany(houses, (err, docs) => {
    if(err) console.error(err);
    console.log("houses insertion: DONE");
  })

  /**
   * User injection
   */
  const UserSchema = mongoose.Schema({
    id: String,
    email: String,
    name: String,
  })
  
  const UserModel = mongoose.model('Users', UserSchema);
  
  const users = [
    { id: 42, email: 'geoffrey@sedomicilier.fr', name: 'Geoffrey' },
    { id: 47, email: 'valentin@fizix.fr', name: 'Valentin' },
  ];

  UserModel.collection.insertMany(users, (err, docs) => {
    if (err) console.error(err);
    console.log("users insertion: DONE");
  });

  mongoose.connection.close()
});