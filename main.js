const db = require('./libs/db')
db.test((err) => {
    if (err) {
        process.exit(1);
    } else {
        process.exit(0);
    }
});