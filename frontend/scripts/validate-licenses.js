var nlv = require('node-license-validator');
const fs = require('fs');
const path = require('path');

const whitelist = [
    {
        'license' : 'Apache License 2.0',
        'short_identifier': ['Apache-2.0','Apache2'] 
    },
    {
        'license' : 'The 3-Clause BSD License',
        'short_identifier': ['BSD-3-Clause']
    },
    {
        'license' : 'The 2-Clause BSD License',
        'short_identifier': ['BSD-2-Clause']
    },
    {
        'license' : 'GNU General Public License v2.0',
        'short_identifier': ['GPL-2.0']
    },
    {
        'license' : 'GNU General Public License v3.0',
        'short_identifier': ['GPL-3.0']
    },
    {
        'license' : 'GNU LGPL v2.0',
        'short_identifier': ['LGPL-2.0']
    },
    {
        'license' : 'GNU LGPL v2.1',
        'short_identifier': ['LGPL-2.1']
    },
    {
        'license' : 'GNU LGPL v3.0',
        'short_identifier': ['LGPL-3.0']
    },
    {
        'license' : 'The MIT License',
        'short_identifier': ['MIT']
    },
    {
        'license' : 'Mozilla Public License 2.0',
        'short_identifier': ['MPL-2.0']
    },
    {
        'license' : 'Common Development and Distribution License 1.0',
        'short_identifier': ['CDDL-1.0']
    },
    {
        'license' : 'Eclipse Public License version 2.0',
        'short_identifier': ['EPL-2.0']
    }
];


const whitelistPackages = [
    '@avl-',
    '@polymer-elements',
    'yargs-parser@5.0.0',
    'i18next-conv@9.2.0',
    'caniuse'
]

const licenses = whitelist.map(license => license.short_identifier).flat();

nlv(path.resolve(__dirname, '../'), {
    licenses: licenses,
    packages: []
}, function (err, data) {
    if (err) {
        console.log(err);
        return;
    }

    if (!data.invalids.length) {
        return;
    }

  const blacklist = data.invalids.filter(el => !isPackageWhitelisted(el)).map(el => ({ "module" : el, "license" : data.packages[el] }));

    fs.writeFile(path.resolve(__dirname, '../scripts/licenses-validation.json'), JSON.stringify(blacklist), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
});


function isPackageWhitelisted(pckg) {
    for (const whiteListedPackage of whitelistPackages) {
        if (pckg.startsWith(whiteListedPackage)) {
             return true;
         }
    }
    return false;
}