const pool = require("../db");

//Controller for Listing all Inventories
async function getAllInventory(req, res) {
  const getAllInventoryQuery = `select * from inventories`;
  pool.query(getAllInventoryQuery, [], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for Listing a Inventory
async function getInventory(req, res) {
  const getInventoryQuery = `select * from inventories where invent_id=?`;
  pool.query(getInventoryQuery, [req.params.inventId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Inventory
async function addInventory(req, res) {
  const addInventoryQuery = `INSERT INTO inventories (item_name,entry_id,exit_id,invent_date,remaining_qty,remaining_rate,remaining_amt,created_by,updated_by) values (?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addInventoryQuery,
    [
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for updating a Inventory
async function updateInventory(req, res) {
  const updateInventoryQuery = `UPDATE inventories SET item_name=?,entry_id=?,exit_id=?,invent_date=?,remaining_qty=?,remaining_rate=?,remaining_amt=?,created_by=?,updated_by=? WHERE invent_id=?`;
  pool.query(
    updateInventoryQuery,
    [
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
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    }
  );
}

//Controller for deleting a Inventory
async function deleteInventory(req, res) {
  const deleteInventoryQuery = `DELETE  FROM inventories WHERE invent_id=?`;
  pool.query(
    deleteInventoryQuery,
    [req.params.inventId],
    (error, results, fields) => {
      if (error) {
        throw error;
      }
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
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