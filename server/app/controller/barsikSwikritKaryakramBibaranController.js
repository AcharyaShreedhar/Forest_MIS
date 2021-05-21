const db = require("../db");
const {
  getAllBarshikSwikritKaryakramBibaran,
  getBarshikSwikritKaryakramBibaran,
  addBarshikSwikritKaryakramBibaran,
  updateBarshikSwikritKaryakramBibaran,
  deleteBarshikSwikritKaryakramBibaran,
} = require("../services/BarshikSwikritKaryakramBibaranServices");

module.exports = {
  getAllBarshikSwikritKaryakramBibaran: (req, res) => {
    getAllBarshikSwikritKaryakramBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};

module.exports = {
  getBarshikSwikritKaryakramBibaran: (req, res) => {
    getBarshikSwikritKaryakramBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};

module.exports = {
  addBarshikSwikritKaryakramBibaran: (req, res) => {
    addBarshikSwikritKaryakramBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};

module.exports = {
  updateBarshikSwikritKaryakramBibaran: (req, res) => {
    updateBarshikSwikritKaryakramBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
module.exports = {
  deleteBarshikSwikritKaryakramBibaran: (req, res) => {
    deleteBarshikSwikritKaryakramBibaran((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("results", results);
      return res.json(results);
    });
  },
};
