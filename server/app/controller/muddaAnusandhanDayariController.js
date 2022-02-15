const pool = require("../db");
//Controller for Listing all Mudda Anusandhan Dayaris
async function getAllMuddaAnusandhanDayaris(req, res) {

  const office_length = await req.body.officeId.length;
  let office_cond = "m.office_id like ?"
  if(office_length > 1){
    office_cond = "m.office_id in (?)"
  }

  const dist_length = await req.body.distId.length;
  let dist_cond = "m.dist_id like ?"
  if(dist_length > 1){
    dist_cond = "m.dist_id in (?)"
  }

  const getTotalQuery =
    `SELECT count(*) as total from mudda_anusandhan_dayaris as m where m.jaheri_partibedan_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
    
  const getAllMuddaAnusandhanDayarisQuery = `select * from mudda_anusandhan_dayaris  as m where m.jaheri_partibedan_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ? ,?`;
  pool.query(getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllMuddaAnusandhanDayarisQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId,req.body.name, req.body.page, req.body.perPage],
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
  });
}

//Controller for Listing a Mudda Anusandhan Dayari
async function getMuddaAnusandhanDayaris(req, res) {
  const getMuddaAnusandhanDayarisQuery = `select * from mudda_anusandhan_dayaris where mudda_anusandhan_dayari_id=?`;
  pool.query(
    getMuddaAnusandhanDayarisQuery,
    [req.params.muddaAnusandhanDayariId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Mudda Anusandhan Dayari
async function addMuddaAnusandhanDayaris(req, res) {
  const addMuddaAnusandhanDayarisQuery = `INSERT INTO mudda_anusandhan_dayaris (dist_id,office_id,jaheri_partibedan_miti,kasurko_kisim,bigo_pariman,jaggako_area,jaggako_thegana,abhiyog_miti,abhiyog_nikaya,abhiyog_jariwana,kaid,bojbahak_jafat_maagdabi,pratibadi_sankhya,thunchek_dharauti,sadharan_tarekh,thuna_aadhes,faisala_miti,faisala_jariwana,faisala_kaid,faisala_status,bojbahak_jafat,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addMuddaAnusandhanDayarisQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.jaheri_partibedan_miti,
      req.body.kasurko_kisim,
      req.body.bigo_pariman,
      req.body.jaggako_area,
      req.body.jaggako_thegana,
      req.body.abhiyog_miti,
      req.body.abhiyog_nikaya,
      req.body.abhiyog_jariwana,
      req.body.kaid,
      req.body.bojbahak_jafat_maagdabi,
      req.body.pratibadi_sankhya,
      req.body.thunchek_dharauti,
      req.body.sadharan_tarekh,
      req.body.thuna_aadhes,
      req.body.faisala_miti,
      req.body.faisala_jariwana,
      req.body.faisala_kaid,
      req.body.faisala_status,
      req.body.bojbahak_jafat,
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

//Controller for updating a Mudda Anusandhan Dayari
async function updateMuddaAnusandhanDayaris(req, res) {
  const updateMuddaAnusandhanDayarisQuery = `UPDATE mudda_anusandhan_dayaris SET dist_id=?,office_id=?,jaheri_partibedan_miti=?,kasurko_kisim=?,bigo_pariman=?,jaggako_area=?,jaggako_thegana=?,abhiyog_miti=?,abhiyog_nikaya=?,abhiyog_jariwana=?,kaid=?,bojbahak_jafat_maagdabi=?,pratibadi_sankhya=?,thunchek_dharauti=?,sadharan_tarekh=?,thuna_aadhes=?,faisala_miti=?,faisala_jariwana=?,faisala_kaid=?,faisala_status=?, bojbahak_jafat=?,created_by=?,updated_by=? WHERE mudda_anusandhan_dayari_id=?`;
  pool.query(
    updateMuddaAnusandhanDayarisQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.jaheri_partibedan_miti,
      req.body.kasurko_kisim,
      req.body.bigo_pariman,
      req.body.jaggako_area,
      req.body.jaggako_thegana,
      req.body.abhiyog_miti,
      req.body.abhiyog_nikaya,
      req.body.abhiyog_jariwana,
      req.body.kaid,
      req.body.bojbahak_jafat_maagdabi,
      req.body.pratibadi_sankhya,
      req.body.thunchek_dharauti,
      req.body.sadharan_tarekh,
      req.body.thuna_aadhes,
      req.body.faisala_miti,
      req.body.faisala_jariwana,
      req.body.faisala_kaid,
      req.body.faisala_status,
      req.body.bojbahak_jafat,
      req.body.created_by,
      req.body.updated_by,
      req.params.muddaAnusandhanDayariId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Department
async function deleteMuddaAnusandhanDayaris(req, res) {
  const deleteMuddaAnusandhanDayarisQuery = `DELETE  FROM mudda_anusandhan_dayaris WHERE mudda_anusandhan_dayari_id=?`;
  pool.query(
    deleteMuddaAnusandhanDayarisQuery,
    [req.params.muddaAnusandhanDayariId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllMuddaAnusandhanDayaris,
  getMuddaAnusandhanDayaris,
  addMuddaAnusandhanDayaris,
  updateMuddaAnusandhanDayaris,
  deleteMuddaAnusandhanDayaris,
};
