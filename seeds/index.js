const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedLookups = require('./lookup-seeds');
console.log('\n----- HERE -----\n');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- Users  DATA SEEDED -----\n');

    await seedLookups();
    console.log('\n----- Lookups DATA SEEDED -----\n');

    await seedPosts();
    console.log('\n----- Posts DATA SEEDED -----\n');

    await seedComments();
    console.log('\n----- Comments DATA SEEDED -----\n');

    process.exit(0);
};

seedAll();