const pool = require("../db");

//Controller for Listing all Inventories
async function getAllInventory(req, res) {
  const getTotalQuery = "SELECT count(*) as total from inventories";
  const getAllInventoryQuery = `select * from inventories ORDER BY ? ASC LIMIT ?, ?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllInventoryQuery,
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

//Controller for Listing a Inventory
async function getInventory(req, res) {
  const getInventoryQuery = `select * from inventories where invent_id=?`;
  pool.query(
    getInventoryQuery,
    [req.params.inventId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for adding a Inventory
async function addInventory(req, res, next) {
  const addInventoryQuery = `INSERT INTO inventories (dist_id,office_id,item_name,entry_id,exit_id,invent_date,remaining_qty,remaining_rate,remaining_amt,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addInventoryQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.item_name,
      req.body.entry_id,
      req.body.exit_id,
      req.body.invent_date,
      req.body.remaining_qty,
      req.body.remaining_rate,
      req.body.remaining_amt,
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

//Controller for updating a Inventory
async function updateInventory(req, res, next) {
  const updateInventoryQuery = `UPDATE inventories SET dist_id=?, dist_id=?, item_name=?,entry_id=?,exit_id=?,invent_date=?,remaining_qty=?,remaining_rate=?,remaining_amt=?,created_by=?,updated_by=? WHERE invent_id=?`;
  pool.query(
    updateInventoryQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.item_name,
      req.body.entry_id,
      req.body.exit_id,
      req.body.invent_date,
      req.body.remaining_qty,
      req.body.remaining_rate,
      req.body.remaining_amt,
      req.body.created_by,
      req.body.updated_by,
      req.params.inventId,
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

//Controller for deleting a Inventory
async function deleteInventory(req, res, next) {
  const deleteInventoryQuery = `DELETE  FROM inventories WHERE invent_id=?`;
  pool.query(
    deleteInventoryQuery,
    [req.params.inventId],
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
  getAllInventory,
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
};
