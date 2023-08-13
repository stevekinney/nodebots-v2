const createWebSerial = async () => {
  if (!('serial' in navigator))
    return console.error('Web Serial not supported.');

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  try {
    const port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });

    const writer = port.writable?.getWriter();
    const reader = port.readable?.getReader();

    port.getSignals().then(console.log);
    console.log(port.getInfo());

    if (!writer || !reader) return console.log('No writer or reader.');

    const read = async (callback = console.log) => {
      const { value, done } = await reader.read();
      if (done) return;
      callback(decoder.decode(value));
      read(callback);
    };

    const write = async (data: string) => {
      const dataArrayBuffer = encoder.encode(data);
      await writer.write(dataArrayBuffer);
    };

    return {
      read,
      write,
      port,
      get signals() {
        return port.getSignals();
      },
    };
  } catch (error) {
    console.error('There was an error opening the serial port:', error);
  }
};

export default createWebSerial;
