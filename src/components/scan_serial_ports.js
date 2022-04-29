const SerialPort = require('serialport')

export default async function scanSerialPorts (mainWindow) {
  var portList = await SerialPort.list().catch((err) => {
    console.log('SerialPort.list(): error: ')
    console.log(err)
    mainWindow.webContents.send('validComPorts', []);
  })
  if (portList != undefined) {
    console.log(portList)

    let validPorts = portList.filter((port) => {
      return port.vendorId === '1a86' || port.productId === '7523' //duuuurty hack for OSX only
    })
    console.log(validPorts)

    let result = [];
    for (var i=0; i < validPorts.length; ++i) {
      result.push({port:validPorts[i].path});
    }
    console.log(result)

    mainWindow.webContents.send('validComPorts', result);
  }
}
