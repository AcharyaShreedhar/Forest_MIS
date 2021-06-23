const pool = require("../db")
//Controller for Listing all Plot
async function getAllPlot(req, res) {
  const getTotalQuery = "SELECT count(*) as total from forest_garden_plots";
    const getAllPlotQuery = `select * from forest_garden_plots ORDER BY ? ASC LIMIT ?, ?`;
    pool.query(getTotalQuery, [], (error, countresults, fields) => {
      if (error) throw error;
      pool.query(
        getAllPlotQuery,
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
  
  //Controller for Listing a Plot
  async function getPlot(req, res) {
    const getPlotQuery = `select * from forest_garden_plots where plot_id=?`;
    pool.query(getPlotQuery, [req.params.plotId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a Plot
  async function addPlot(req, res) {
    const addPlotQuery = `INSERT INTO forest_garden_plots (plot_type, prajati, area, location, established_date, status, created_by, updated_by) values (?,?,?,?,?,?,?,?)`;
    pool.query(
      addPlotQuery,
      [
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
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for updating a Plot
  async function updatePlot(req, res) {
    const updatePlotQuery = `UPDATE forest_garden_plots SET plot_type=?, prajati=?, area=?, location=?, established_date=?, status=?, created_by =?, updated_by=? WHERE plot_id=?`;
    pool.query(
      updatePlotQuery,
      [
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
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a Plot
  async function deletePlot(req, res) {
    const deletePlotQuery = `DELETE  FROM forest_garden_plots where plot_id=?`;
    pool.query(
      deletePlotQuery,
      [req.params.plotId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
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
