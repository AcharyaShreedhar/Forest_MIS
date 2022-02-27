const pool = require("../db");
//Controller for Listing all Brixyaropan
async function getAllBrixyaropan(req, res) {

  let office_cond = "b.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "b.office_id in (?)"
  }

  let dist_cond = "b.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "b.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from brixyaropans as b where b.brixyaropan_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllBrixyaropanQuery = `select * from brixyaropans as b where b.brixyaropan_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBrixyaropanQuery,
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

//Controller for Listing a Brixyaropan
async function getBrixyaropan(req, res) {
  const getBrixyaropanQuery = `select * from brixyaropans where brixyaropan_id=?`;
  pool.query(
    getBrixyaropanQuery,
    [req.params.brixyaropanId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Brixyaropan
async function addBrixyaropan(req, res, next) {
  const addBrixyaropanQuery = `INSERT INTO brixyaropans (dist_id,office_id,brixyaropan_miti,xetra,area,brixyaropan_thegana,brixyaropan_kisim,brixyaropan_laxya,brixyaropan_prajati,brixyaropan_pragati,brixyaropan_sankhya,created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBrixyaropanQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.brixyaropan_miti,
      req.body.xetra,
      req.body.area,
      req.body.brixyaropan_thegana,
      req.body.brixyaropan_kisim,
      req.body.brixyaropan_laxya,
      req.body.brixyaropan_prajati,
      req.body.brixyaropan_pragati,
      req.body.brixyaropan_sankhya,
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

//Controller for updating a Brixyaropan
async function updateBrixyaropan(req, res, next) {
  const updateBrixyaropanQuery = `UPDATE brixyaropans SET dist_id=?,office_id=?,brixyaropan_miti=?,xetra=?,area=?,brixyaropan_thegana=?,brixyaropan_kisim=?,brixyaropan_laxya=?,brixyaropan_prajati=?,brixyaropan_pragati=?,brixyaropan_sankhya=?, created_by=?, updated_by=? WHERE brixyaropan_id=?`;
  pool.query(
    updateBrixyaropanQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.brixyaropan_miti,
      req.body.xetra,
      req.body.area,
      req.body.brixyaropan_thegana,
      req.body.brixyaropan_kisim,
      req.body.brixyaropan_laxya,
      req.body.brixyaropan_prajati,
      req.body.brixyaropan_pragati,
      req.body.brixyaropan_sankhya,
      req.body.created_by,
      req.body.updated_by,
      req.params.brixyaropanId,
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

//Controller for deleting a Brixyaropan
async function deleteBrixyaropan(req, res, next) {
  const deleteBrixyaropanQuery = `DELETE  FROM brixyaropans where brixyaropan_id=?`;
  pool.query(
    deleteBrixyaropanQuery,
    [req.params.brixyaropanId],
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
  getAllBrixyaropan,
  getBrixyaropan,
  addBrixyaropan,
  updateBrixyaropan,
  deleteBrixyaropan,
};
