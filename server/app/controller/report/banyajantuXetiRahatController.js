const pool = require("../../db");

//Controller for Banya jantu Xeti Rahat Bibaran
async function getBanyajantuXetiRahatBibaran(req, res) {
  const getBanyajantuXetiRahatBibaranQuery =
    "SELECT pidit_name,pidit_address as address,ghatana_address,xeti_miti as ghatana_miti,xetigarne_animal as ghatana_ghataune_banyajantu_prajati,(IF(man_injury=3,1,0)) AS manisko_mrityu,(IF(man_injury!=3,1,0)) AS manis_ghaete,pasudhan_xeti,balinali_noksani,ghargoth_xeti,anna_bhandaran as bhandaran_anna,vuktani_rakam as rahat_upalabda FROM `banyajantuxeti_bibarans` WHERE dist_id like ?";

  pool.query(
    getBanyajantuXetiRahatBibaranQuery,
    [req.body.distId],
    (error, results, fields) => {
      if (error) throw error;
      res.send(
        JSON.stringify({
          status: 200,
          error: null,
          banyajantu_xeti_rahat: results,
        })
      );
    }
  );
}

module.exports = {
  getBanyajantuXetiRahatBibaran,
};
