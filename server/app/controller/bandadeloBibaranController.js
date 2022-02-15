const pool = require("../db");
//Controller for Listing all Banpaidawar
async function getAllBandadeloBibaran(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "b.office_id like ?"
  if(office_length > 1){
    office_cond = "b.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "b.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "b.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from bandadelo_bibarans as b where b.bandadelo_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;

  const getAllBandadeloBibaranQuery = `select * from bandadelo_bibarans as b where b.bandadelo_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBandadeloBibaranQuery,
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

//Controller for Listing a BandadeloBibaran
async function getBandadeloBibaran(req, res) {
  const getBandadeloBibaranQuery = `select * from bandadelo_bibarans where bandadelo_bibaran_id=?`;
  pool.query(
    getBandadeloBibaranQuery,
    [req.params.bandadeloBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a BandadeloBibaran
async function addBandadeloBibaran(req, res) {
  const addBandadeloBibaranQuery = `INSERT INTO bandadelo_bibarans (dist_id, office_id, bandadelo_address, ban_type, ban_prajati, xeti_area, niyantran_prayas, niyantran_karta, sahabhagi_mahila, sahabhagi_purus, bandadelo_miti,man_injured,man_dead, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBandadeloBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.bandadelo_address,
      req.body.ban_type,
      req.body.ban_prajati,
      req.body.xeti_area,
      req.body.niyantran_prayas,
      req.body.niyantran_karta,
      req.body.sahabhagi_mahila,
      req.body.sahabhagi_purus,
      req.body.bandadelo_miti,
      req.body.man_injured,
      req.body.man_dead,
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

//Controller for updating a BandadeloBibaran
async function updateBandadeloBibaran(req, res) {
  const updateBandadeloBibaranQuery = `UPDATE bandadelo_bibarans SET dist_id=?, office_id=?, bandadelo_address=?, ban_type=?, ban_prajati=?, xeti_area=?, niyantran_prayas=?, niyantran_karta=?, sahabhagi_mahila=?, sahabhagi_purus=?, bandadelo_miti=?,man_injured=?,man_dead=?, created_by=?, updated_by=? WHERE bandadelo_bibaran_id=?`;
  pool.query(
    updateBandadeloBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.bandadelo_address,
      req.body.ban_type,
      req.body.ban_prajati,
      req.body.xeti_area,
      req.body.niyantran_prayas,
      req.body.niyantran_karta,
      req.body.sahabhagi_mahila,
      req.body.sahabhagi_purus,
      req.body.bandadelo_miti,
      req.body.man_injured,
      req.body.man_dead,
      req.body.created_by,
      req.body.updated_by,
      req.params.bandadeloBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a BandadeloBibaran
async function deleteBandadeloBibaran(req, res) {
  const deleteBandadeloBibaranQuery = `DELETE  FROM bandadelo_bibarans where bandadelo_bibaran_id=?`;
  pool.query(
    deleteBandadeloBibaranQuery,
    [req.params.bandadeloBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBandadeloBibaran,
  getBandadeloBibaran,
  addBandadeloBibaran,
  updateBandadeloBibaran,
  deleteBandadeloBibaran,
};
