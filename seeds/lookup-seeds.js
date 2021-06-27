const { Z_NO_FLUSH } = require('zlib');
const { Lookups } = require('../models');

const lookupData = [
    {
        type: "category",
        label: "HTML",
        value: "HTML",
    },
    {
        type: "category",
        label: "CSS",
        value: "CSS",
    },
    {
        type: "category",
        label: "NODE",
        value: "NODE",
    },
    {
        type: "category",
        label: "REACT",
        value: "REACT",
    },

];

const seedLookups = () => Lookups.bulkCreate(lookupData);

module.exports = seedLookups;