exports.config = {

    // Test Scripts
    specs: [
        "src/Application.js"
    ],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',

    //Server Info
    hostname: 'localhost',
    port: 9515,
    path: '//',
    
    baseUrl: "https://codechallenge.odoo.com",

    //Test Framework
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000,
    },

    //Reporter config
    reporters: [
        ['junit', {
            outputDir: './reports'
        }]
    ]
}