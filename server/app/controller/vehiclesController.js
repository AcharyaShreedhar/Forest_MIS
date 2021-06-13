const pool = require("../db");

//Controller for Listing all Vehicles
async function getAllVehicles(req, res) {
  const getAllVehiclesQuery = `select * from vehicles`;
  pool.query(getAllVehiclesQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a Vehicle
async function getVehicles(req, res) {
  const getVehiclesQuery = `select * from vehicles where vehicle_id=?`;
  pool.query(getVehiclesQuery, [req.params.vehicleId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Vehicled
async function addVehicles(req, res) {
  const addVehiclesQuery = `INSERT INTO vehicles (vehicle_type,vehicle_no,engine_no,chasis_no,acquired_source,acquired_date,acquired_price,manufacturer_country,manufacturer_comp,model_name,manufactured_date,remarks,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addVehiclesQuery,
    [

        req.body.vehicle_type,
        req.body.vehicle_no,
        req.body.engine_no,
        req.body.chasis_no,
        req.body.acquired_source,
        req.body.acquired_date,
        req.body.acquired_price,
        req.body.manufacturer_country,
        req.body.manufacturer_comp,
        req.body.model_name,
        req.body.manufactured_date,
        req.body.remarks,
        req.body.created_by,
        req.body.updated_by,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a Vehicle
async function updateVehicles(req, res) {
  const updateVehiclesQuery = `UPDATE vehicles SET vehicle_type=?, vehicle_no=?, engine_no=?, chasis_no=?, acquired_source=?, acquired_date=?, acquired_price=?, manufacturer_country=?, manufacturer_comp=?, model_name=?, manufactured_date=?, remarks=?, created_by=?,updated_by=? WHERE vehicle_id=?`;
  pool.query(
    updateVehiclesQuery,
    [
        req.body.vehicle_type,
        req.body.vehicle_no,
        req.body.engine_no,
        req.body.chasis_no,
        req.body.acquired_source,
        req.body.acquired_date,
        req.body.acquired_price,
        req.body.manufacturer_country,
        req.body.manufacturer_comp,
        req.body.model_name,
        req.body.manufactured_date,
        req.body.remarks,
        req.body.created_by,
        req.body.updated_by,
        req.params.vehicleId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Vehicle
async function deleteVehicles(req, res) {
  const deleteVehiclesQuery = `DELETE  FROM vehicles where vehicle_id=?`;
  pool.query(
    deleteVehiclesQuery,
    [req.params.vehicleId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllVehicles,
  getVehicles,
  addVehicles,
  updateVehicles,
  deleteVehicles,
};