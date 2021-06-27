const Users = require('./users');
const Comments = require('./comments');
const Posts = require('./posts');
const Lookups = require('./lookups');


Posts.hasMany(Comments, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Users.hasMany(Posts, {
    foreignKey: 'user_id',
});

Users.hasMany(Comments, {
    foreignKey: 'user_id',
});

Comments.belongsTo(Posts, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
module.exports = { Users, Comments, Posts, Lookups };