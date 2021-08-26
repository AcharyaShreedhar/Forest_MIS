const pool = require("../../db");

//Controller for Banya Dadelo bata bhayeko  Xeti  Bibaran
async function getBandadeloXetiBibaran(req, res) {
  const getBandadeloXetiBibaranQuery =
    "SELECT bandadelo_address as sthan, xeti_area as area, banpaidawar_xeti,man_dead as manab_mrityu,man_injured as manab_ghaete FROM `bandadelo_bibarans` WHERE dist_id LIKE ?";

  pool.query(
    getBandadeloXetiBibaranQuery,
    [req.body.distId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          dadelo: results,
        })
      );
    }
  );
}

module.exports = {
  getBandadeloXetiBibaran,
};
