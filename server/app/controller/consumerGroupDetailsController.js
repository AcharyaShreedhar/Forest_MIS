const pool = require("../db");
//Controller for Listing all ConsumerGroupDetails
async function getAllConsumerGroupDetails(req, res) {
  const getTotalQuery =
    "SELECT count(*) as total from consumer_details as c where c.darta_miti BETWEEN ? and ? and c.dist_id like ?";
  const getAllConsumerGroupDetailsQuery = `select * from consumer_details as c where c.darta_miti BETWEEN ? and ? and c.dist_id like ? ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllConsumerGroupDetailsQuery,
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

//Controller for Listing a ConsumerGroupDetails
async function getConsumerGroupDetails(req, res) {
  const getConsumerGroupDetailsQuery = `select * from consumer_details where darta_no=?`;
  pool.query(
    getConsumerGroupDetailsQuery,
    [req.params.consumerGroupDetailsId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a ConsumerGroupDetails
async function addConsumerGroupDetails(req, res) {
  const addConsumerGroupDetailsQuery = `INSERT INTO consumer_details (darta_no, dist_id,darta_miti, ghardhuri_dalit, perm_addr, curr_addr, ghardhuri_janjati, ghardhuri_anya, ghardhuri_total, population_female, population_male, population_total, samudayik_upavokta_samiti_name, sampannata_starikaran_sampanna, sampannata_starikaran_madhyam, sampannata_starikaran_bipanna, karyasamiti_representation_dalit, karyasamiti_representation_janjati, karyasamiti_representation_anya, adhyakshya_male, adhyakshya_female, sachib_male, sachib_female, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addConsumerGroupDetailsQuery,
    [
      req.body.darta_no,
      req.body.dist_id,
      req.body.darta_miti,
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

//Controller for updating a ConsumerGroupDetails
async function updateConsumerGroupDetails(req, res) {
  const updateConsumerGroupDetailsQuery = `UPDATE consumer_details SET darta_no=?, dist_id=?, darta_miti=?, ghardhuri_dalit=?, perm_addr=?, curr_addr=?, ghardhuri_janjati=?, ghardhuri_anya=?, ghardhuri_total=?, population_female=?, population_male=?, population_total=?, samudayik_upavokta_samiti_name=?, sampannata_starikaran_sampanna=?, sampannata_starikaran_madhyam=?, sampannata_starikaran_bipanna=?, karyasamiti_representation_dalit=?, karyasamiti_representation_janjati=?, karyasamiti_representation_anya=?, adhyakshya_male=?, adhyakshya_female=?, sachib_male=?, sachib_female=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateConsumerGroupDetailsQuery,
    [
      req.body.darta_no,
      req.body.dist_id,
      req.body.darta_miti,
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
      req.params.consumerGroupDetailsId,
    ],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a ConsumerGroupDetails
async function deleteConsumerGroupDetails(req, res) {
  const deleteConsumerGroupDetailsQuery = `DELETE  FROM consumer_details where darta_no=?`;
  pool.query(
    deleteConsumerGroupDetailsQuery,
    [req.params.consumerGroupDetailsId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

module.exports = {
  getAllConsumerGroupDetails,
  getConsumerGroupDetails,
  addConsumerGroupDetails,
  updateConsumerGroupDetails,
  deleteConsumerGroupDetails,
};
