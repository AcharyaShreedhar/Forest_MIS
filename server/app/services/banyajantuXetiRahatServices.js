const pool = require("../db");

//Service for Listing all BanyajantuXetiBibaran
module.exports = {
  getAllBanyajantuXetiBibaran: (callBack) => {
    const getAllBanyajantuXetiBibaranQuery = `select * from banyajantu_xeti_bibaran`;
    pool.query(getAllBanyajantuXetiBibaranQuery, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }

      return callBack(null, results);
    });
  },
};

//Service for Listing a BanyajantuXetiBibaran
module.exports = {
  getBanyajantuXetiBibaran: (callBack) => {
    const getBanyajantuXetiBibaran = `select * from banyajantu_xeti_bibaran where banyajantu_xeti_bibaran_id=$1`;
    pool.query(
      getBanyajantuXetiBibaranQuery,
      [req.params.banyajantuXetiBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for adding a BanyajantuXetiBibaran
module.exports = {
  addBanyajantuXetiBibaran: (callBack) => {
    const addBanyajantuXetiBibaranQuery = `INSERT INTO banyajantu_xeti_bibaran (pidit_name, pidit_address, jagga_bibaran, nagarikta_no, upabhokta_samiti_name, xeti_garne_animal, xeti_miti, pasudhan_ghargoth, man_injury_samanya, man_injury_medium, man_death, mag_rakam, samitiko_mulyankan_rakam, vuktani_rakam, remarks,created_by, updated_by) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17) returning *`;
    pool.query(
      addBanyajantuXetiBibaranQuery,
      [req.body.pidit_name, req.body.pidit_address, req.body.jagga_bibaran, req.body.nagarikta_no, req.body.upabhokta_samiti_name, req.body.xeti_garne_animal, req.body.xeti_miti, req.body.pasudhan_ghargoth, req.body.man_injury_samanya, req.body.man_injury_medium, req.body.man_death, req.body.mag_rakam, req.body.samitiko_mulyankan_rakam, req.body.vuktani_rakam, req.body.remarks,req.body.created_by, req.body.updated_by],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for updating BanyajantuXetiBibaran
module.exports = {
  updateBanyajantuXetiBibaran: (callBack) => {
    const updateBanyajantuXetiBibaranQuery = `UPDATE banyajantu_xeti_bibaran SET pidit_name=$1, pidit_address=$2, jagga_bibaran=$3, nagarikta_no=$4, upabhokta_samiti_name=$5, xeti_garne_animal=$6, xeti_miti=$7, pasudhan_ghargoth=$8, man_injury_samanya=$9, man_injury_medium=$10, man_death=$11, mag_rakam=$12, samitiko_mulyankan_rakam=$13, vuktani_rakam=$14, remarks=$15,created_by=$16, updated_by=$17 returning *`;
    pool.query(
      updateBanyajantuXetiBibaranQuery,
      [req.body.req.body.pidit_name, req.body.pidit_address, req.body.jagga_bibaran, req.body.nagarikta_no, req.body.upabhokta_samiti_name, req.body.xeti_garne_animal, req.body.xeti_miti, req.body.pasudhan_ghargoth, req.body.man_injury_samanya, req.body.man_injury_medium, req.body.man_death, req.body.mag_rakam, req.body.samitiko_mulyankan_rakam, req.body.vuktani_rakam, req.body.remarks,req.body.created_by, req.body.updated_by, req.params.banyajantuXetiBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};

//Service for deleting BanyajantuXetiBibaran
module.exports = {
  deleteBanyajantuXetiBibaran: (callBack) => {
    const deleteBanyajantuXetiBibaranQuery = `DELETE  FROM banyajantu_xeti_bibaran where banyajantu_xeti_bibaran_id=$1`;
    pool.query(
      deleteBanyajantuXetiBibaranQuery,
      [req.params.banyajantuXetiBibaranId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
