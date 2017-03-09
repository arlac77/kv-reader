/* jslint node: true, esnext: true */

/**
 * Transforms a input stream of kv data into a object
 * with key value pairs assigned
 * @param {Stream} stream
 * @return {Promise} resolving to object
 */
export function reader(stream) {
  return new Promise((fullfill, reject) => {
    const values = {};
    let data = '';
    let key, value;

    stream.on('data', chunk => {
      data += chunk;
      while (data.length > 5) {
        const m = data.match(/^(K|V)\s+(\d+)\n/);
        if (m) {
          const from = m[0].length,
            to = m[0].length + parseInt(m[2]);
          const v = data.slice(from, to);
          if (m[1] === 'K') {
            key = v;
          } else {
            values[key] = v;
          }
          //console.log(v);
          data = data.slice(to + 1);
          //console.log(`${data.length} ${data}`);
        } else {
          reject(new Error(`invalid entry at ${data.length}`));
          break;
        }
      }
    });

    stream.on('end', () => fullfill(values));
  });
}
