const fs = require('fs');

module.exports.getJsonArray = filename => {
    try {
        const obj = JSON.parse(fs.readFileSync(filename), 'utf-8');
        return obj;
    } catch (error) {
        console.log(error);
        return [];
    }
}