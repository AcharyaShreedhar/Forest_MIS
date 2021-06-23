const pool = require("../db");

//Controller for Listing all Banyajantu Xeti Bibarans
async function getAllBanyajantuXetiBibarans(req, res) {
  const getTotalQuery = "SELECT count(*) as total from banyajantuxeti_bibarans";
  const getAllBanyajantuXetiBibaransQuery = `select * from banyajantuxeti_bibarans ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllBanyajantuXetiBibaransQuery,
      [req.body.name, req.body.page, req.body.perPage],
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
//Controller for Listing a Banyajantu Xeti Bibaran
async function getBabyajantuXetiBibarans(req, res) {
  const getBanyajantuXetiBibaransQuery = `select * from banyajantuxeti_bibarans where banyajantuxeti_bibaran_id=?`;
  pool.query(getBanyajantuXetiBibaransQuery, [req.params.banyajantuxetiBibaranId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Banyajantu Xeti Bibaran
async function addBanyajantuXetiBibarans(req, res) {
  const addBanyajantuXetiBibaransQuery = `INSERT INTO banyajantuxeti_bibarans (pidit_name,pidit_address,jagga_bibaran,nagarikta_no,upabhoktasamiti_name,xetigarne_animal,xeti_miti,pasudhan_ghargoth,man_injury,mag_rakam,samitiko_mulyankan_rakam,vuktani_rakam,remarks,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addBanyajantuXetiBibaransQuery,
    [
      req.body.pidit_name,
      req.body.pidit_address,
      req.body.jagga_bibaran,
      req.body.nagarikta_no,
      req.body.upabhoktasamiti_name,
      req.body.xetigarne_animal,
      req.body.xeti_miti,
      req.body.pasudhan_ghargoth,
      req.body.man_injury,
      req.body.mag_rakam,
      req.body.samitiko_mulyankan_rakam,
      req.body.vuktani_rakam,
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

//Controller for updating a Banyajantu Xeti Bibaran
async function updateBanyajantuXetiBibarans(req, res) {
  const updateBanyajantuXetiBibaransQuery = `UPDATE banyajantuxeti_bibarans SET pidit_name=?,pidit_address=?,jagga_bibaran=?,nagarikta_no=?,upabhoktasamiti_name=?,xetigarne_animal=?,xeti_miti=?,pasudhan_ghargoth=?,man_injury=?,mag_rakam=?,samitiko_mulyankan_rakam=?,vuktani_rakam=?,remarks=?,created_by=?,updated_by=? WHERE banyajantuxeti_bibaran_id=?`;
  pool.query(
    updateBanyajantuXetiBibaransQuery,
    [
      req.body.pidit_name,
      req.body.pidit_address,
      req.body.jagga_bibaran,
      req.body.nagarikta_no,
      req.body.upabhoktasamiti_name,
      req.body.xetigarne_animal,
      req.body.xeti_miti,
      req.body.pasudhan_ghargoth,
      req.body.man_injury,
      req.body.mag_rakam,
      req.body.samitiko_mulyankan_rakam,
      req.body.vuktani_rakam,
      req.body.remarks,
      req.body.created_by,
      req.body.updated_by,
      req.params.banyajantuxetiBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Banuajantu Xeti Bibaran
async function deleteBanyajantuXetiBibarans(req, res) {
  const deleteBanyajantuXetiBibaransQuery = `DELETE  FROM banyajantuxeti_bibarans WHERE banyajantuxeti_bibaran_id=?`;
  pool.query(
    deleteBanyajantuXetiBibaransQuery,
    [req.params.banyajantuxetiBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllBanyajantuXetiBibarans,
  getBabyajantuXetiBibarans,
  addBanyajantuXetiBibarans,
  updateBanyajantuXetiBibarans,
  deleteBanyajantuXetiBibarans,
};