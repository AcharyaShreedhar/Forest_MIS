const pool = require("../db");
//Controller for Listing all SamudayikbanBibaran
async function getAllSamudayikbanBibaran(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "s.office_id like ?"
  if(office_length > 1){
    office_cond = "s.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "s.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "s.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from samudayikban_bibarans as s where s.handover_date BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllSamudayikbanBibaranQuery =
    `SELECT s.*,n.renewal_date,n.renewed_date,n.nabikaran_abadhi FROM samudayikban_bibarans as s left JOIN nabikaran_karyayojanas as n on s.darta_no=n.darta_id HAVING s.handover_date BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?,?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllSamudayikbanBibaranQuery,
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

//Controller for Listing a SamudayikbanBibaran
async function getSamudayikbanBibaran(req, res) {
  const getSamudayikbanBibaranQuery =
    "SELECT samudayikban_bibarans.*,nabikaran_karyayojanas.renewal_date,nabikaran_karyayojanas.renewed_date,nabikaran_karyayojanas.nabikaran_abadhi FROM `samudayikban_bibarans` left JOIN nabikaran_karyayojanas on samudayikban_bibarans.darta_no=nabikaran_karyayojanas.darta_id where samudayikban_bibarans.samudayikban_id=?";
  pool.query(
    getSamudayikbanBibaranQuery,
    [req.params.samudayikbanBibaranId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a SamudayikbanBibaran
async function addSamudayikbanBibaran(req, res, next) {
  const addSamudayikbanBibaranQuery = `INSERT INTO samudayikban_bibarans (dist_id, office_id, darta_no,  samudayikban_name, area, main_species,dalit_ghardhuri,janjati_ghardhuri,anya_ghardhuri,female,male, forest_type, handover_date, forest_maujdat, timber, wood, baiganik_ban, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addSamudayikbanBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.darta_no,
      req.body.samudayikban_name,
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
      req.body.timber,
      req.body.wood,
      req.body.baiganik_ban,
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

//Controller for updating a SamudayikbanBibaran
async function updateSamudayikbanBibaran(req, res, next) {
  const updateSamudayikbanBibaranQuery = `UPDATE samudayikban_bibarans SET dist_id=?,office_id=?, darta_no=?,samudayikban_name=?, area=?, main_species=?,dalit_ghardhuri=?,janjati_ghardhuri=?,anya_ghardhuri=?,female=?,male=?, forest_type=?, handover_date=?, forest_maujdat=?, timber=?, wood=?, baiganik_ban=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateSamudayikbanBibaranQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.darta_no,
      req.body.samudayikban_name,
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
      req.body.timber,
      req.body.wood,
      req.body.baiganik_ban,
      req.body.created_by,
      req.body.updated_by,
      req.params.samudayikbanBibaranId,
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

//Controller for deleting a SamudayikbanBibaran
async function deleteSamudayikbanBibaran(req, res, next) {
  const deleteSamudayikbanBibaranQuery = `DELETE  FROM samudayikban_bibarans where darta_no=?`;
  pool.query(
    deleteSamudayikbanBibaranQuery,
    [req.params.samudayikbanBibaranId],
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
  getAllSamudayikbanBibaran,
  getSamudayikbanBibaran,
  addSamudayikbanBibaran,
  updateSamudayikbanBibaran,
  deleteSamudayikbanBibaran,
};

//** */
