var checker = require('license-checker');
const path = require('path');
const fs = require('fs');
 
checker.init({
    summary: true,
    start: path.resolve(__dirname, '../')
}, function(err, packages) {
    if (err) {
        console.log(err);
    } else {
        const licenses = Object.keys(packages).map(key => packages[key].licenses);

        const counts = {};
        for (const license of licenses) {
            counts[license] = 1 + (counts[license] || 0);
        }

        // Saving data to a Text file

        text = 'Licenses Summary\r\n\r\n';
        for (var key in counts) {
            text += key.toString() + ' : ' + counts[key] + '\r\n';
        }

        var dir = path.resolve(__dirname, '../src/assets/licenses');

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }

        fs.writeFile(path.resolve(__dirname, '../src/assets/licenses/licenses-summary.txt'), text, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The text file was saved!");
        });
    }
});