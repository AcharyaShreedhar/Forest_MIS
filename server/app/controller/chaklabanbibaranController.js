const pool = require("../db");
//Controller for Listing all ChaklabanBibaran
async function getAllChaklabanBibaran(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "c.office_id like ?"
  if(office_length > 1){
    office_cond = "c.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "c.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "c.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from chaklaban_bibarans as c where c.darta_miti BETWEEN ? and ? and  ${dist_cond} and ${office_cond}`;
  const getAllChaklabanBibaranQuery = `select * from chaklaban_bibarans as c where c.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllChaklabanBibaranQuery,
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

//Controller for Listing a ChaklabanBibaran
async function getChaklabanBibaran(req, res) {
  const getChaklabanBibaranQuery = `select * from chaklaban_bibarans where darta_no=?`;
  pool.query(
    getChaklabanBibaranQuery,
    [req.params.chaklabanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a ChaklabanBibaran
async function addChaklabanBibaran(req, res) {
  const addChaklabanBibaranQuery = `INSERT INTO chaklaban_bibarans (chaklaban_naam, darta_no, darta_miti,  dist_id, office_id,  address, area, main_species, dalit_ghardhuri,janjati_ghardhuri,anya_ghardhuri,female,male, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addChaklabanBibaranQuery,
    [
      req.body.chaklaban_naam,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.dist_id,
      req.body.office_id,
      req.body.address,
      req.body.area,
      req.body.main_species,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
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

//Controller for updating a ChaklabanBibaran
async function updateChaklabanBibaran(req, res) {
  const updateChaklabanBibaranQuery = `UPDATE chaklaban_bibarans SET  chaklaban_naam=?, darta_no=?, darta_miti=?, dist_id=?,office_id=?, address=?, area=?, main_species=?, dalit_ghardhuri=?,janjati_ghardhuri=?,anya_ghardhuri=?,female=?,male=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateChaklabanBibaranQuery,
    [
      req.body.chaklaban_naam,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.dist_id,
      req.body.office_id,
      req.body.address,
      req.body.area,
      req.body.main_species,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
      req.body.created_by,
      req.body.updated_by,
      req.params.chaklabanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a ChaklabanBibaran
async function deleteChaklabanBibaran(req, res) {
  const deleteChaklabanBibaranQuery = `DELETE  FROM chaklaban_bibarans where darta_no=?`;
  pool.query(
    deleteChaklabanBibaranQuery,
    [req.params.chaklabanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllChaklabanBibaran,
  getChaklabanBibaran,
  addChaklabanBibaran,
  updateChaklabanBibaran,
  deleteChaklabanBibaran,
};
