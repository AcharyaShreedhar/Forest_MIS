const pool = require("../db");

//Controller for Listing all Offices
async function getAllOffices(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from offices where dist_id like ?";
  const getAllOfficesQuery = `select * from offices where dist_id like ? ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllOfficesQuery,
        [req.body.distId, req.body.name, req.body.page, req.body.perPage],
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

//Controller for Listing a office
async function getOffices(req, res) {
  const getOfficesQuery = `select * from offices where office_id=?`;
  pool.query(getOfficesQuery, [req.params.officeId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//controller for listing office in Dropdowm.O-DDL
async function getOfficesDropdownList(req, res) {
  
  // multiselect
  const dist_length = await req.body.distId.length;
  let dist_cond = "dist_id like ?"
  if(dist_length > 1){
    dist_cond = "dist_id in (?)"
  }
  // console.log("length", dist_length);
  const getOfficesList = `SELECT '%' AS id, 'सबै' AS value, '' as office_location, '%' As dist_id, '%' As office_type UNION ALL select office_id as id, office_name as value, office_location, dist_id, office_type from offices where ${dist_cond}`;
  pool.query(getOfficesList,[req.body.distId, req.body.name], (error, results, fields) => {
    if (error) throw error;
    // console.log("getOfficeList", getOfficesList);
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a office
async function addOffices(req, res, next) {
  const addOfficesQuery = `INSERT INTO offices (dist_id,office_name,office_location,office_type,created_by,updated_by) values (?,?,?,?,?,?)`;
  pool.query(
    addOfficesQuery,
    [
      req.body.dist_id,
      req.body.office_name,
      req.body.office_location,
      req.body.office_type,
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

//Controller for updating a office
async function updateOffices(req, res, next) {
  const updateOfficesQuery = `UPDATE Offices SET dist_id=?, office_type=?, office_name=?, office_location=?,created_by=?,updated_by=? WHERE office_id=?`;
    pool.query(
    updateOfficesQuery,
    [
      req.body.dist_id,
      req.body.office_type,
      req.body.office_name,
      req.body.office_location,
      req.body.created_by,
      req.body.updated_by,
      req.params.officeId,
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

//Controller for deleting a Office
async function deleteOffices(req, res, next) {
  const deleteOfficesQuery = `DELETE  FROM Offices WHERE office_id=?`;
  pool.query(
    deleteOfficesQuery,
    [req.params.officeId],
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
  getAllOffices,
  getOffices,
  getOfficesDropdownList,  //O-DDL
  addOffices,
  updateOffices,
  deleteOffices,
};
