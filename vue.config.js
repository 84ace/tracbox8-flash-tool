  module.exports = {
    pluginOptions: {
      electronBuilder: {
        externals: ['serialport'],
        builderOptions: {
          // options placed here will be merged with default configuration and passed to electron-builder
            "productName": "TracBox 8 Firmware Flash Utility",
            "appId": "com.ftptechnologies.tracbox8-fw-utility",
            "extraResources": [
              {
                "from": "./src/firmware/",
                "to": "firmware",
                "filter": [
                  "**/*"
                ]
              }
            ],
            "win": {
              "target": ["portable"],
              "icon": "build/flash.ico"
            },
            "portable": {
              "artifactName": "tracbox8_flash_utility_${version}.exe"
            },
            "linux": {
              "target": ["appImage"],
              "icon": "build/flash.png"
            },
            "appImage": {
              "artifactName": "tracbox8_flash_utility_${version}.AppImage"
            }
            // "directories": {
            //     "output": "electron/output",
            //     "app": "electron/app",
            //     "buildResources": "electron/buildResources"
            // }
        }
      }
    }
}