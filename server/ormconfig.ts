import { ConnectionOptions } from 'typeorm';
 
const config: ConnectionOptions = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'restaurasys' ,
  synchronize: true, 
  logging: false, 
  entities: [
   "src/entity/**/*.ts"
  ]
};
 
export = config;