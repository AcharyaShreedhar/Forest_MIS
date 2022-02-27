const pool = require("../db");
//Controller for Listing all Plot
async function getAllPlot(req, res) {

  let office_cond = "f.office_id like ?"
  const office_len=(Array.isArray(req.body.officeId)) ? req.body.officeId.length : 0
  if(office_len > 1){
    office_cond = "f.office_id in (?)"
  }

  let dist_cond = "f.dist_id like ?"
  const dist_len=(Array.isArray(req.body.distId)) ? req.body.distId.length : 0
  if(dist_len > 1){
    dist_cond = "f.dist_id in (?)"
  }

  const getTotalQuery = `SELECT count(*) as total from forest_garden_plots as f where f.established_date BETWEEN ? and ? and ${dist_cond} and ${office_cond}`;
  const getAllPlotQuery = `select * from forest_garden_plots as f where f.established_date BETWEEN ? and ? and ${dist_cond} and ${office_cond} ORDER BY ? DESC LIMIT ?, ?`;
  pool.query(getTotalQuery, [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllPlotQuery,
      [req.body.fromDate, req.body.toDate, req.body.distId, req.body.officeId, req.body.name, req.body.page, req.body.perPage],
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

//Controller for Listing a Plot
async function getPlot(req, res) {
  const getPlotQuery = `select * from forest_garden_plots where plot_id=?`;
  pool.query(getPlotQuery, [req.params.plotId], (error, results, fields) => {
    if (error) throw error;
    res.send(JSON.stringify({ status: 200, error: null, data: results }));
  });
}

//Controller for adding a Plot
async function addPlot(req, res, next) {
  const addPlotQuery = `INSERT INTO forest_garden_plots (dist_id,office_id,plot_type, prajati, area, location, established_date, status, created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?)`;
  pool.query(
    addPlotQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.plot_type,
      req.body.prajati,
      req.body.area,
      req.body.location,
      req.body.established_date,
      req.body.status,
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

//Controller for updating a Plot
async function updatePlot(req, res, next) {
  const updatePlotQuery = `UPDATE forest_garden_plots SET dist_id=?, office_id=?, plot_type=?, prajati=?, area=?, location=?, established_date=?, status=?, created_by =?, updated_by=? WHERE plot_id=?`;
  pool.query(
    updatePlotQuery,
    [
      req.body.dist_id,
      req.body.office_id,
      req.body.plot_type,
      req.body.prajati,
      req.body.area,
      req.body.location,
      req.body.established_date,
      req.body.status,
      req.body.created_by,
      req.body.updated_by,
      req.params.plotId,
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

//Controller for deleting a Plot
async function deletePlot(req, res, next) {
  const deletePlotQuery = `DELETE  FROM forest_garden_plots where plot_id=?`;
  pool.query(
    deletePlotQuery, 
    [req.params.plotId], 
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
  getAllPlot,
  getPlot,
  addPlot,
  updatePlot,
  deletePlot,
};
