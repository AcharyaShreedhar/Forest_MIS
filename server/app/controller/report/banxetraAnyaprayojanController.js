const pool = require("../../db");

//Controller for Banxetrako Jagga Anyaprayojan Ko lagi Upalabda garayeko Bibaran
async function getBanxetraAnyaprayojanBibaran(req, res) {
  const getBanxetraAnyaprayojanBibaranQuery =
    "SELECT sastha_name,xetrafal_temp as asthai_prayojan_area,xetrafal_perm as sthai_prayojan_area,upalabdha_address as jaggako_sthan, prayojan FROM `banxetra_anyaprayojans` WHERE dist_id LIKE ?";

  pool.query(
    getBanxetraAnyaprayojanBibaranQuery,
    [req.body.distId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          banxetra_anyaprayojan: results,
        })
      );
    }
  );
}

module.exports = {
  getBanxetraAnyaprayojanBibaran,
};
