const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const model = require("../utils/constants/modelsConstants");
const db = require("../config/databaseConfig");

const co2Service = {

    getAllCo2: async () => {
        try {

            const query = `SELECT * FROM ${table.co2_sensor}`;
            const result = await GlobalService.getAll(query, model.co2SensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getCo2ById: async (id) => {
        try {

            const query = `SELECT * FROM ${table.co2_sensor} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.co2SensorModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },
    
    getCo2BySensorId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
              const query = `SELECT * FROM ${table.co2_sensor} WHERE sensor_id = '${id}'`;
              db.query(query, (error, result) => {
                if (error || result.length === 0) {
                  reject(new Error("Capteur inexistante."));
                } else {
                  resolve(result);
                }
              });
            });
          } catch (error) {

            throw error;
        }
    },

};

module.exports = co2Service;