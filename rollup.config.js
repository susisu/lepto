export default {
  entry  : "./src/lepto.js",
  targets: [
    {
      dest  : "./lib/lepto.cjs.js",
      format: "cjs"
    },
    {
      dest  : "./lib/lepto.es.js",
      format: "es"
    }
  ]
};
