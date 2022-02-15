const pool = require("../db");
//Controller for Listing all ConsumerGroupDetails
async function getAllConsumerGroupDetails(req, res) {

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
    `SELECT count(*) as total from consumer_details as c where c.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllConsumerGroupDetailsQuery = `select * from consumer_details as c where c.darta_miti BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(
    getTotalQuery,
    [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId],
    (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllConsumerGroupDetailsQuery,
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
  const addConsumerGroupDetailsQuery = `INSERT INTO consumer_details (darta_no, dist_id,office_id,darta_miti, dalit_ghardhuri, perm_addr, curr_addr, janjati_ghardhuri, anya_ghardhuri, female, male, samudayik_upavokta_samiti_name, sampanna, madhyam, bipanna, dalit_rep, janjati_rep, anya_rep, adhyakshya, adhyakshya_gender, sachib_gender, sachib, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addConsumerGroupDetailsQuery,
    [
      req.body.darta_no,
      req.body.dist_id,
      req.body.office_id,
      req.body.darta_miti,
      req.body.dalit_ghardhuri,
      req.body.perm_addr,
      req.body.curr_addr,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
      req.body.samudayik_upavokta_samiti_name,
      req.body.sampanna,
      req.body.madhyam,
      req.body.bipanna,
      req.body.dalit_rep,
      req.body.janjati_rep,
      req.body.anya_rep,
      req.body.adhyakshya,
      req.body.adhyakshya_gender,
      req.body.sachib_gender,
      req.body.sachib,
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
  const updateConsumerGroupDetailsQuery = `UPDATE consumer_details SET darta_no=?, dist_id=?, office_id=?, darta_miti=?, dalit_ghardhuri=?, perm_addr=?, curr_addr=?, janjati_ghardhuri=?, anya_ghardhuri=?, female=?, male=?, samudayik_upavokta_samiti_name=?, sampanna=?, madhyam=?, bipanna=?, dalit_rep=?, janjati_rep=?, anya_rep=?, adhyakshya=?, adhyakshya_gender=?, sachib_gender=?, sachib=?, created_by=?, updated_by=? WHERE darta_no=?`;
  pool.query(
    updateConsumerGroupDetailsQuery,
    [
      req.body.darta_no,
      req.body.dist_id,
      req.body.office_id,
      req.body.darta_miti,
      req.body.dalit_ghardhuri,
      req.body.perm_addr,
      req.body.curr_addr,
      req.body.janjati_ghardhuri,
      req.body.anya_ghardhuri,
      req.body.female,
      req.body.male,
      req.body.samudayik_upavokta_samiti_name,
      req.body.sampanna,
      req.body.madhyam,
      req.body.bipanna,
      req.body.dalit_rep,
      req.body.janjati_rep,
      req.body.anya_rep,
      req.body.adhyakshya,
      req.body.adhyakshya_gender,
      req.body.sachib_gender,
      req.body.sachib,
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
