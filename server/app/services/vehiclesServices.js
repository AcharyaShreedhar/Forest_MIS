const pool = require("../db");

//Service for Listing all Vehicles
module.exports = {
  getAllVehicles: (callBack) => {
    const getAllVehiclesQuery = `select * from vehicles`;
    pool.query(getAllVehiclesQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a Vehicle
module.exports = {
  getVehicles: (callBack) => {
    const getVehiclesQuery = `select * from vehicles where vehicle_id=$1`;
    pool.query(
      getVehiclesQuery,
      [req.params.vehicleId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a Vehicles
module.exports = {
  addVehicles: (callBack) => {
    const addVehiclesQuery = `INSERT INTO vehicles (vehicle_type, vehicle_no, engine_no, chasis_no, acquired_source, acquired_date, acquired_price, manufacturer_country, manufacturer_comp, model_name, manufacutred_date, remarks) values ($1,$2,$3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *`;
    pool.query(
      addVehiclesQuery,
      [req.body.vehicle_type, req.body.vehicle_no, req.body.engine_no, req.body.chasis_no, req.body.acquired_source, req.body.acquired_date, req.body.acquired_price, req.body.manufacturer_country, req.body.manufacturer_comp, req.body.model_name, req.body.manufacutred_date, req.body.remarks],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating a Vehicle
module.exports = {
  updateVehicles: (callBack) => {
    const updateVehiclesQuery = `UPDATE vehicles SET vehicle_type=$1, vehicle_no=$2, engine_no=$3, chasis_no=$4, acquired_source=$5, acquired_date=$6, acquired_price=$7, manufacturer_country=$8, manufacturer_comp=$9, model_name=$10, manufacutred_date=$11, remarks=$12 WHERE vehicle_id=$13 returning *`;
    pool.query(
      updateVehiclesQuery,
      [req.body.vehicle_type, 
        req.body.vehicle_no, 
        req.body.engine_no, 
        req.body.chasis_no, 
        req.body.acquired_source, 
        req.body.acquired_date, 
        req.body.acquired_price, 
        req.body.manufacturer_country, 
        req.body.manufacturer_comp, 
        req.body.model_name, 
        req.body.manufacutred_date, 
        req.body.remarks,
        req.params.vehiclesId
    ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting a Vehicle
module.exports = {
  deleteVehicles: (callBack) => {
    const deleteVehiclesQuery = `DELETE  FROM vehicles where vehicle_id=$1`;
    pool.query(
      deleteVehiclesQuery,
      [req.params.vehiclesId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
