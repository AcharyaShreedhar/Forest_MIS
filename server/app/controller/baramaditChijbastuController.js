const pool = require("../db")
//Controller for Listing all BaramaditChijbastu
async function getAllBaramaditChijbastu(req, res) {
  const getTotalQuery = "SELECT count(*) as total from baramadit_chijbastus";
    const getAllBaramaditChijbastuQuery = `select * from baramadit_chijbastus ORDER BY ? ASC LIMIT ? ,?`;
    pool.query(getTotalQuery, [], (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllBaramaditChijbastuQuery,
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
  
  //Controller for Listing a BaramaditChijbastu
  async function getBaramaditChijbastu(req, res) {
    const getBaramaditChijbastuQuery = `select * from baramadit_chijbastus where baramadit_chijbastu_id=?`;
    pool.query(getBaramaditChijbastuQuery, [req.params.baramaditChijbastuId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a BaramaditChijbastu
  async function addBaramaditChijbastu(req, res, next) {
    const addBaramaditChijbastuQuery = `INSERT INTO baramadit_chijbastus (kath, daura, aankhetopahar, dhunga, bojbahak, mudda_anusandhan_dayari_id, created_by, updated_by) values (?,?,?,?,?,?,?,?)`;
    pool.query(
      addBaramaditChijbastuQuery,
      [
        req.body.kath,
        req.body.daura,
        req.body.aankhetopahar,
        req.body.dhunga,
        req.body.bojbahak,
	      req.body.mudda_anusandhan_dayari_id,
	      req.body.created_by,
      	req.body. updated_by,  
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
  
  //Controller for updating a BaramaditChijbastu
  async function updateBaramaditChijbastu(req, res, next) {
    const updateBaramaditChijbastuQuery = `UPDATE baramadit_chijbastus SET kath=?, daura=?, aankhetopahar=?, dhunga=?, bojbahak=?, mudda_anusandhan_dayari_id=?, created_by=?, updated_by=? WHERE baramadit_chijbastu_id=?`;
    pool.query(
      updateBaramaditChijbastuQuery,
      [
        req.body.kath,
        req.body.daura,
        req.body.aankhetopahar,
        req.body.dhunga,
        req.body.bojbahak,
	      req.body.mudda_anusandhan_dayari_id,
      	req.body.created_by,
      	req.body. updated_by,  
      	req.params.baramaditChijbastuId,
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
  
  //Controller for deleting a BaramaditChijbastu
  async function deleteBaramaditChijbastu(req, res, next) {
    const deleteBaramaditChijbastuQuery = `DELETE  FROM baramadit_chijbastus where baramadit_chijbastu_id=?`;
    pool.query(
      deleteBaramaditChijbastuQuery,
      [req.params.baramaditChijbastuId],
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
    getAllBaramaditChijbastu,
    getBaramaditChijbastu,
    addBaramaditChijbastu,
    updateBaramaditChijbastu,
    deleteBaramaditChijbastu,
  };
  
