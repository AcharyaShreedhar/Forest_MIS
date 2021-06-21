const pool = require("../db")
//Controller for Listing all activities_infos
async function getAllActivitiesInfo(req, res) {
  const getTotalQuery = "SELECT count(*) as total from activities_infos";
  const getAllActivitiesInfoQuery = `select * from activities_infos ORDER BY ? ASC LIMIT ?,?`;
  pool.query(getTotalQuery, [], (error, countresults, fields) => {
    if (error) throw error;
    pool.query(
      getAllActivitiesInfoQuery,
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
  
  //Controller for Listing a ActivitiesInfo
  async function getActivitiesInfo(req, res) {
    const getActivitiesInfoQuery = `select * from activities_infos where activities_info_id=?`;
    pool.query(getActivitiesInfoQuery, [req.params.activitiesInfoId], (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify({ status: 200, error: null, data: results }));
    });
  }
  
  //Controller for adding a ActivitiesInfo
  async function addActivitiesInfo(req, res) {
    const addActivitiesInfoQuery = `INSERT INTO activities_infos (samudayikban_naam, fiscal_year, area, production_from_conservation_timber, production_from_conservation_wood, employment_generated_workingday, withingroup_timber, withingroup_wood, outsidegroup_timber, outsidegroup_wood, maujdat_timber, maujdat_wood, annual_income, annual_expenditure, netannual_saving, niyamit_rojgar_count, community_udhyam_bibaran, annual_bibaran, lekha_parikshyan,created_by, updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    pool.query(
      addActivitiesInfoQuery,
      [
        req.body.samudayikban_naam,
        req.body.fiscal_year,                
        req.body.area,
        req.body.production_from_conservation_timber, 
        req.body.production_from_conservation_wood, 
        req.body.employment_generated_workingday, 
        req.body.withingroup_timber, 
        req.body.withingroup_wood,  
        req.body.outsidegroup_timber, 
        req.body.outsidegroup_wood, 
        req.body.maujdat_timber, 
        req.body.maujdat_wood, 
        req.body.annual_income, 
        req.body.annual_expenditure, 
        req.body.netannual_saving, 
        req.body.niyamit_rojgar_count, 
        req.body.community_udhyam_bibaran, 
        req.body.annual_bibaran, 
        req.body.lekha_parikshyan, 
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
  
  //Controller for updating a ActivitiesInfo
  async function updateActivitiesInfo(req, res) {
    const updateActivitiesInfoQuery = `UPDATE activities_infos SET samudayikban_naam=?, fiscal_year=?, area=?, production_from_conservation_timber=?, production_from_conservation_wood=?, employment_generated_workingday=?, withingroup_timber=?, withingroup_wood=?, outsidegroup_timber=?, outsidegroup_wood=?, maujdat_timber=?, maujdat_wood=?, annual_income=?, annual_expenditure=?, netannual_saving=?, niyamit_rojgar_count=?, community_udhyam_bibaran=?, annual_bibaran=?, lekha_parikshyan=?,created_by=?, updated_by=? WHERE activities_info_id=?`;
    pool.query(
      updateActivitiesInfoQuery,
      [
        req.body.samudayikban_naam,
        req.body.fiscal_year,                
        req.body.area,
        req.body.production_from_conservation_timber, 
        req.body.production_from_conservation_wood, 
        req.body.employment_generated_workingday, 
        req.body.withingroup_timber, 
        req.body.withingroup_wood, 
        req.body.outsidegroup_timber, 
        req.body.outsidegroup_wood, 
        req.body.maujdat_timber, 
        req.body.maujdat_wood, 
        req.body.annual_income, 
        req.body.annual_expenditure, 
        req.body.netannual_saving, 
        req.body.niyamit_rojgar_count, 
        req.body.community_udhyam_bibaran, 
        req.body.annual_bibaran, 
        req.body.lekha_parikshyan, 
        req.body.created_by, 
        req.body.updated_by,         
        req.params.activitiesInfoId,
      ],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  //Controller for deleting a ActivitiesInfo
  async function deleteActivitiesInfo(req, res) {
    const deleteActivitiesInfoQuery = `DELETE  FROM activities_infos where activities_info_id=?`;
    pool.query(
      deleteActivitiesInfoQuery,
      [req.params.activitiesInfoId],
      (error, results, fields) => {
        if (error) {
          throw error;
        }
        res.send(JSON.stringify({ status: 200, error: null, data: results }));
      }
    );
  }
  
  module.exports = {
    getAllActivitiesInfo,
    getActivitiesInfo,
    addActivitiesInfo,
    updateActivitiesInfo,
    deleteActivitiesInfo,
  };
  
  