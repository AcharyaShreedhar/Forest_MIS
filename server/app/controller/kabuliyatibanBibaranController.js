const pool = require("../db");
//Controller for Listing all KabuliyatibanBibaran
async function getAllKabuliyatibanBibaran(req, res) {

  let office_cond = "k.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "k.office_id in (?)"
  }

  let dist_cond = "k.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "k.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from kabuliyatiban_bibarans as k where k.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} `;
  const getAllKabuliyatibanBibaranQuery = `select * from kabuliyatiban_bibarans as k where k.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllKabuliyatibanBibaranQuery,
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

//Controller for Listing a KabuliyatibanBibaran
async function getKabuliyatibanBibaran(req, res) {
  const getKabuliyatibanBibaranQuery = `select * from kabuliyatiban_bibarans where kabuliyatiban_bibaran_id=?`;
  pool.query(
    getKabuliyatibanBibaranQuery,
    [req.params.kabuliyatibanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a KabuliyatibanBibaran
async function addKabuliyatibanBibaran(req, res, next) {
  const addKabuliyatibanBibaranQuery = `INSERT INTO kabuliyatiban_bibarans (dist_id,office_id,darta_no,darta_miti,area, dalit_ghardhuri, perm_addr, curr_addr, janjati_ghardhuri, anya_ghardhuri, female, male, kabuliyati_ban_samiti_name, sampanna, madhyam, bipanna, dalit_rep, janjati_rep, anya_rep, adhyakshya, adhyakshya_gender, sachib, sachib_gender, created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addKabuliyatibanBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.area,
      req.body.dalit_ghardhuri,
      req.body.perm_addr,
      req.body.curr_addr,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
      req.body.kabuliyati_ban_samiti_name,
      req.body.sampanna,
      req.body.madhyam,
      req.body.bipanna,
      req.body.dalit_rep,
      req.body.janjati_rep,
      req.body.anya_rep,
      req.body.adhyakshya,
      req.body.adhyakshya_gender,
      req.body.sachib,
      req.body.sachib_gender,
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

//Controller for updating a KabuliyatibanBibaran
async function updateKabuliyatibanBibaran(req, res, next) {
  const updateKabuliyatibanBibaranQuery = `UPDATE kabuliyatiban_bibarans SET dist_id=?, office_id=?, darta_no=?, darta_miti=?,area=?, dalit_ghardhuri=?, perm_addr=?, curr_addr=?, janjati_ghardhuri=?, anya_ghardhuri=?, female=?, male=?, kabuliyati_ban_samiti_name=?, sampanna=?, madhyam=?, bipanna=?, dalit_rep=?, janjati_rep=?, anya_rep=?, adhyakshya=?, adhyakshya_gender=?, sachib=?, sachib_gender=?, created_by=?,updated_by=? WHERE darta_no=?`;
  pool.query(
    updateKabuliyatibanBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.darta_no,
      req.body.darta_miti,
      req.body.area,
      req.body.dalit_ghardhuri,
      req.body.perm_addr,
      req.body.curr_addr,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
      req.body.kabuliyati_ban_samiti_name,
      req.body.sampanna,
      req.body.madhyam,
      req.body.bipanna,
      req.body.dalit_rep,
      req.body.janjati_rep,
      req.body.anya_rep,
      req.body.adhyakshya,
      req.body.adhyakshya_gender,
      req.body.sachib,
      req.body.sachib_gender,
      req.body.created_by,
      req.body.updated_by,
      req.params.kabuliyatibanBibaranId,
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

//Controller for deleting a KabuliyatibanBibaran
async function deleteKabuliyatibanBibaran(req, res, next) {
  const deleteKabuliyatibanBibaranQuery = `DELETE  FROM kabuliyatiban_bibarans where darta_no=?`;
  pool.query(
    deleteKabuliyatibanBibaranQuery,
    [req.params.kabuliyatibanBibaranId],
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
  getAllKabuliyatibanBibaran,
  getKabuliyatibanBibaran,
  addKabuliyatibanBibaran,
  updateKabuliyatibanBibaran,
  deleteKabuliyatibanBibaran,
};
