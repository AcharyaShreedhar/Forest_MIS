const pool = require("../db");
//Controller for Listing all KabuliyatibanBibaran
async function getAllKabuliyatibanBibaran(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from kabuliyatiban_bibarans as k where k.entry_date BETWEEN ? and ? and k.dist_id like ?";
  const getAllKabuliyatibanBibaranQuery = `select * from kabuliyatiban_bibarans as k where k.entry_date BETWEEN ? and ? and k.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllKabuliyatibanBibaranQuery,
        [
          req.body.fromDate,
          req.body.toDate,
          req.body.distId,
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
async function addKabuliyatibanBibaran(req, res) {
  const addKabuliyatibanBibaranQuery = `INSERT INTO kabuliyatiban_bibarans (dist_id,darta_no,entry_date, ghardhuri_dalit, perm_addr, curr_addr, ghardhuri_janjati, ghardhuri_anya, ghardhuri_total, population_female, population_male, population_total, samudayik_upavokta_samiti_name, sampannata_starikaran_sampanna, sampannata_starikaran_madhyam, sampannata_starikaran_bipanna, karyasamiti_representation_dalit, karyasamiti_representation_janjati, karyasamiti_representation_anya, adhyakshya_male, adhyakshya_female, sachib_male, sachib_female, created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addKabuliyatibanBibaranQuery,
    [
      req.body.dist_id,
      req.body.darta_no,
      req.body.entry_date,
      req.body.ghardhuri_dalit,
      req.body.perm_addr,
      req.body.curr_addr,
      req.body.ghardhuri_janjati,
      req.body.ghardhuri_anya,
      req.body.ghardhuri_total,
      req.body.population_female,
      req.body.population_male,
      req.body.population_total,
      req.body.samudayik_upavokta_samiti_name,
      req.body.sampannata_starikaran_sampanna,
      req.body.sampannata_starikaran_madhyam,
      req.body.sampannata_starikaran_bipanna,
      req.body.karyasamiti_representation_dalit,
      req.body.karyasamiti_representation_janjati,
      req.body.karyasamiti_representation_anya,
      req.body.adhyakshya_male,
      req.body.adhyakshya_female,
      req.body.sachib_male,
      req.body.sachib_female,
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

//Controller for updating a KabuliyatibanBibaran
async function updateKabuliyatibanBibaran(req, res) {
  const updateKabuliyatibanBibaranQuery = `UPDATE kabuliyatiban_bibarans SET dist_id=?, darta_no=?, entry_date=?, ghardhuri_dalit=?, perm_addr=?, curr_addr=?, ghardhuri_janjati=?, ghardhuri_anya=?, ghardhuri_total=?, population_female=?, population_male=?, population_total=?, samudayik_upavokta_samiti_name=?, sampannata_starikaran_sampanna=?, sampannata_starikaran_madhyam=?, sampannata_starikaran_bipanna=?, karyasamiti_representation_dalit=?, karyasamiti_representation_janjati=?, karyasamiti_representation_anya=?, adhyakshya_male=?, adhyakshya_female=?, sachib_male=?, sachib_female=?, created_by=?,updated_by=? WHERE kabuliyatiban_bibaran_id=?`;
  pool.query(
    updateKabuliyatibanBibaranQuery,
    [
      req.body.dist_id,
      req.body.darta_no,
      req.body.entry_date,
      req.body.ghardhuri_dalit,
      req.body.perm_addr,
      req.body.curr_addr,
      req.body.ghardhuri_janjati,
      req.body.ghardhuri_anya,
      req.body.ghardhuri_total,
      req.body.population_female,
      req.body.population_male,
      req.body.population_total,
      req.body.samudayik_upavokta_samiti_name,
      req.body.sampannata_starikaran_sampanna,
      req.body.sampannata_starikaran_madhyam,
      req.body.sampannata_starikaran_bipanna,
      req.body.karyasamiti_representation_dalit,
      req.body.karyasamiti_representation_janjati,
      req.body.karyasamiti_representation_anya,
      req.body.adhyakshya_male,
      req.body.adhyakshya_female,
      req.body.sachib_male,
      req.body.sachib_female,
      req.body.created_by,
      req.body.updated_by,
      req.params.kabuliyatibanBibaranId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a KabuliyatibanBibaran
async function deleteKabuliyatibanBibaran(req, res) {
  const deleteKabuliyatibanBibaranQuery = `DELETE  FROM kabuliyatiban_bibarans where kabuliyatiban_bibaran_id=?`;
  pool.query(
    deleteKabuliyatibanBibaranQuery,
    [req.params.kabuliyatibanBibaranId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
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
