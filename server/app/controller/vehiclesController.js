const pool = require("../db");

//Controller for Listing all Vehicles
async function getAllVehicles(req, res) {

  let office_cond = "v.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "v.office_id in (?)"
  }

  let dist_cond = "v.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "v.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from vehicles as v where v.acquired_date BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllVehiclesQuery = `select * from vehicles as v where v.acquired_date BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllVehiclesQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
          req.body.officeId,
          req.body.name,
          req.body.page,
          req.body.perPage,
        ],
        (error, results, fields) => {
          if (error) throw error;
          res.send(
            JSON.stringify({
              status: 200,
              error: null,
              data: {
                total: countresults[0].total,
                list: results,
              },
            })
          );
        }
      );
    }
  );
}

//Controller for Listing a Vehicle
async function getVehicles(req, res) {
  const getVehiclesQuery = `select * from vehicles where vehicle_id=?`;
  pool.query(
    getVehiclesQuery,
    [req.params.vehicleId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Vehicled
async function addVehicles(req, res, next) {
  const addVehiclesQuery = `INSERT INTO vehicles (dist_id, office_id,vehicle_type,vehicle_no,engine_no,chasis_no,acquired_source,acquired_date,acquired_price,manufacturer_country,manufacturer_comp,model_name,manufactured_date,remarks,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addVehiclesQuery,
    [
      req.body.dist_id,
      req.body.office_id,
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
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for updating a Vehicle
async function updateVehicles(req, res, next) {
  const updateVehiclesQuery = `UPDATE vehicles SET dist_id=?, office_id=?, vehicle_type=?, vehicle_no=?, engine_no=?, chasis_no=?, acquired_source=?, acquired_date=?, acquired_price=?, manufacturer_country=?, manufacturer_comp=?, model_name=?, manufactured_date=?, remarks=?, created_by=?,updated_by=? WHERE vehicle_id=?`;
  pool.query(
    updateVehiclesQuery,
    [
      req.body.dist_id,
      req.body.office_id,
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
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
    }
  );
}

//Controller for deleting a Vehicle
async function deleteVehicles(req, res, next) {
  const deleteVehiclesQuery = `DELETE  FROM vehicles where vehicle_id=?`;
  pool.query(
    deleteVehiclesQuery,
    [req.params.vehicleId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        next(error);
      }
      res.send(JSON.stringify({ status: 200, error: error, data: results }));
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
