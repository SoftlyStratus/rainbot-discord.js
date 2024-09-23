module.exports = {
    name: 'ready',
    once: true, // true indicates that this only runs once.
    execute(client) {
        console.log(`💻Bot online as ${client.user.username}`);
    }
};