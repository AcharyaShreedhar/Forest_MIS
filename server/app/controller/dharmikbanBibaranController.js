const pool = require("../db");
//Controller for Listing all DharmikbanBibaran
async function getAllDharmikbanBibaran(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "d.office_id like ?"
  if(office_length > 1){
    office_cond = "d.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "d.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "d.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from dharmikban_bibarans as d where d.handover_date BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllDharmikbanBibaranQuery =
    `SELECT d.*,n.renewal_date,n.renewed_date,n.nabikaran_abadhi FROM dharmikban_bibarans as d left JOIN nabikaran_karyayojanas as n on d.darta_no=n.darta_id HAVING d.handover_date BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?,?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllDharmikbanBibaranQuery,
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

//Controller for Listing a DharmikbanBibaran
async function getDharmikbanBibaran(req, res) {
  const getDharmikbanBibaranQuery =
    "SELECT dharmikban_bibarans.*,nabikaran_karyayojanas.renewal_date,nabikaran_karyayojanas.renewed_date,nabikaran_karyayojanas.nabikaran_abadhi FROM `dharmikban_bibarans` left JOIN nabikaran_karyayojanas on dharmikban_bibarans.darta_no=nabikaran_karyayojanas.darta_id where dharmikban_bibarans.dharmikban_id=1=?";
  pool.query(
    getDharmikbanBibaranQuery,
    [req.params.dharmikbanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a DharmikbanBibaran
async function addDharmikbanBibaran(req, res, next) {
  const addDharmikbanBibaranQuery = `INSERT INTO dharmikban_bibarans (dist_id, office_id, darta_no,dharmikban_name, community_name, area, main_species,dalit_ghardhuri,janjati_ghardhuri,anya_ghardhuri,female,male, forest_type, handover_date, forest_maujdat, renewaldate, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addDharmikbanBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.darta_no,
      req.body.dharmikban_name,
      req.body.community_name,
      req.body.area,
      req.body.main_species,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
      req.body.forest_type,
      req.body.handover_date,
      req.body.forest_maujdat,
      req.body.renewaldate,
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

//Controller for updating a DharmikbanBibaran
async function updateDharmikbanBibaran(req, res, next) {
  const updateDharmikbanBibaranQuery = `UPDATE dharmikban_bibarans SET dist_id=?, office_id=?, darta_no=?,dharmikban_name=?, community_name=?, area=?, main_species=?,dalit_ghardhuri=?,janjati_ghardhuri=?,anya_ghardhuri=?,female=?,male=?, forest_type=?, handover_date=?, forest_maujdat=?, renewaldate=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateDharmikbanBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.darta_no,
      req.body.dharmikban_name,
      req.body.community_name,
      req.body.area,
      req.body.main_species,
      req.body.dalit_ghardhuri,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
      req.body.forest_type,
      req.body.handover_date,
      req.body.forest_maujdat,
      req.body.renewaldate,
      req.body.created_by,
      req.body.updated_by,
      req.params.dharmikbanBibaranId,
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

//Controller for deleting a DharmikbanBibaran
async function deleteDharmikbanBibaran(req, res, next) {
  const deleteDharmikbanBibaranQuery = `DELETE  FROM dharmikban_bibarans where darta_no=?`;
  pool.query(
    deleteDharmikbanBibaranQuery,
    [req.params.dharmikbanBibaranId],
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
  getAllDharmikbanBibaran,
  getDharmikbanBibaran,
  addDharmikbanBibaran,
  updateDharmikbanBibaran,
  deleteDharmikbanBibaran,
};
//** */
