# TracBox 8 Flash Utility

Update your TracBox with ease!

<img src="https://raw.githubusercontent.com/84ace/tracbox8-flash-tool/master/src/assets/flash-demo.gif" alt="flasher" style="width:350px;"/>

A cross platform app built with [Electron](https://www.electronjs.org/)

## System requirements
- [Python](https://www.python.org/downloads/) with [pyserial](https://pyserial.readthedocs.io/en/latest/pyserial.html#installation)
- If your Serial/COM port isn't listed you may need [CP210x drivers](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers) installed.

## Instructions

* Plug in your TracBox
* Click the `Scan Ports` button and select a `COM port`
* Click `Browse` to select a custom firmware.bin file
* Click `Browse` to select a custom littlefs.bin file
* Click `Flash` and wait

## Electron Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run electron:serve
```
### Compiles and creates package(s) for prod
```
npm run electron:build
```
### big ol' pile of shot to fix later
```
--chip esp32 --port "/dev/tty.usbserial-10" --baud 460800 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_freq 40m --flash_size detect 0x10000 .pio/build/esp32dev/firmware.bin 0x1000 /Users/acea/.platformio/packages/framework-arduinoespressif32/tools/sdk/esp32/bin/bootloader_dio_40m.bin 0x8000 /Users/acea/Documents/FTP/hardware/esp-tracbox/software/esp-tracbox/.pio/build/esp32dev/partitions.bin 0xe000 /Users/acea/.platformio/packages/framework-arduinoespressif32/tools/partitions/boot_app0.bin 0x290000 .pio/build/esp32dev/littlefs.bin
```
```
--chip esp32 --port "/dev/tty.usbserial-10" --baud 460800 --before default_reset --after hard_reset write_flash -z --flash_mode dio --flash_size detect 0x290000 .pio/build/esp32dev/littlefs.bin
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Reference
### Electron inter process communication tutorial
https://www.tutorialspoint.com/electron/electron_inter_process_communication.htm
### run Python script from nodejs
https://ourcodeworld.com/articles/read/286/how-to-execute-a-python-script-and-retrieve-output-data-and-errors-in-node-js
### readline module for parsing stdout stream line by line
https://html.developreference.com/article/21696559/NodeJS+spawn+stdout+string+format
https://www.w3schools.com/nodejs/ref_readline.asp
