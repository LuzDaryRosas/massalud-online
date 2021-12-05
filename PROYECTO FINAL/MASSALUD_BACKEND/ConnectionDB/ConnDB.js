const { Pool } = require('pg');

const connDB = new Pool({
   // connectionString: "postgres://yqwsipgsefzhwf:c8e6c437ed5e21655da9e1b9a8d7be755a70699f960bfc76af3bf05fdfaa0816@ec2-44-193-150-214.compute-1.amazonaws.com:5432/db3t4c0ipt369a",
    connectionString: "postgres://utqqthivavtcrd:e81b633a56f11ee51ebb714bd3c30d7dd971b4f7d67ffe1cb43a176569ef468e@ec2-3-225-30-189.compute-1.amazonaws.com:5432/da0oht8b7l4j5e",
    ssl: {rejectUnauthorized: false
    }
  });


  module.exports = connDB;
