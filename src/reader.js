/**
 * Transforms a input stream of kv data into a object
 * with key value pairs assigned
 * @param {Stream} stream
 * @param {ValueProvider} gotValue
 * @return {Promise} resolving to object
 */
export async function reader(stream, gotValue) {
  return new Promise((resolve, reject) => {
    let data = "";
    let key, value;

    stream.on("data", chunk => {
      data += chunk;
      while (data.length > 5) {
        const m = data.match(/^(K|V)\s+(\d+)\n/);
        if (m) {
          const from = m[0].length,
            to = m[0].length + parseInt(m[2], 10);
          const v = data.slice(from, to);
          if (m[1] === "K") {
            key = v;
          } else {
            gotValue(key, v);
          }
          data = data.slice(to + 1);
        } else {
          reject(new Error(`invalid entry at ${data.length}`));
          break;
        }
      }
    });

    stream.on("end", () => resolve());
  });
}

/**
 * call back function to provide key and value
 * @callback ValueProvider
 * @param {string} key
 * @param {string} value
 */
