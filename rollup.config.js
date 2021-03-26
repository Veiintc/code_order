const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json =require("@rollup/plugin-json")
module.exports = () => {
  return {
    input: {
      main:path.join(__dirname, 'index.js'), // 入口文件
    },
    output: {
      dir: path.join(__dirname, './dist/'), // 输出目标
      format: 'cjs', // CommonJs 格式
      sourcemap: false,
      externalLiveBindings: false,
      freeze: false,
    },
    treeshake: false,
    plugins: [
      nodeResolve({
        preferBuiltins:true,
      }), 
      commonjs({
        ignoreTryCatch:"remove"
      }),
      json(),
    ],
    external: [
      "assert",
      "async_hooks",
      "Buffer",
      "child_process",
      "cluster",
      "console",
      "crypto",
      "debugger",
      "dgram",
      "dns",
      "domain",
      "Error",
      "events",
      "fs",
      "global",
      "http",
      "http2",
      "https",
      "inspector",
      "module",
      "net",
      "os",
      "path",
      "perf_hooks",
      "process",
      "punycode",
      "querystring",
      "readline",
      "repl",
      "stream",
      "string_decoder",
      "timer",
      "tls",
      "trace_events",
      "tty",
      "url",
      "util",
      "v8",
      "vm",
      "wasi",
      "worker_threads",
      "zlib",
      'electron'
    ],
  }
};
