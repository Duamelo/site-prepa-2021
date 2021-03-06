import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config/database';

const basename = path.basename(__filename);

const db = {};
const sequelize = new Sequelize(config);

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && 
           (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/*const { applyExtraAssociation } = require('./association');


const modelDefiners = [
  require('./user'),
  require('./role'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyExtraAssociation(sequelize);
*/
export default db;