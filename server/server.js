/**
 * Created by Shreedhar Acharya
 *
 *
 */

require("dotenv").config();
const express = require("express");

const db = require("./app/db");
var cors = require("cors");
bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const provinceRoutes = require("./app/routes/provinceRoutes");

//Commenting this block of code until unit test is done

const districtRoutes = require("./app/routes/districtRoutes");
const municipalitiesRoutes = require("./app/routes/municipalitiesRoutes");
const postRoutes = require("./app/routes/postRoutes");
const levelRoutes = require("./app/routes/levelRoutes");
// const nijibanBibaranRoutes = require("./app/routes/nijibanBibaranRoutes");
// const dharmikbanBibaranRoutes = require("./app/routes/dharmikbanBibaranRoutes");
// const samudayikbanBibaranRoutes = require("./app/routes/samudayikbanBibaranRoutes");
const banpaidawarLilamRoutes = require("./app/routes/banpaidawarLilamRoutes");
// const kabuliyatibanBibaranRoutes = require("./app/routes/kabuliyatibanBibaranRoutes");
// const upavoktasamuhaBibaranRoutes = require("./app/routes/upavoktasamuhaBibaranRoutes");
// const banxetraAtikramanAreaBibaranRoutes = require("./app/routes/banxetraAtikramanAreaBibaranRoutes");
// const bandadeloBibaranRoutes = require("./app/routes/bandadeloBibaranRoutes");
// const biruwaUtpadanRoutes = require("./app/routes/biruwanUtpadanRoutes");
const banpaidawarRoutes = require("./app/routes/banpaidawarRoutes");
const activitiesInfoRoutes = require("./app/routes/activitiesInfoRoutes");
const vehiclesRoutes = require("./app/routes/vehiclesRoutes");
// const banyajantuXetiBibaranRoutes = require("./app/routes/banyajantuXetiBibaranRoutes");
// const banxetraAnyaPrayojanRoutes = require("./app/routes/banxetraAnyaPrayojanRoutes");
// const banyajantuUddarRoutes = require("./app/routes/banyajantuUddarRoutes");
const assetsRoutes = require("./app/routes/assetsRoutes");
// const baramaditChijbastuRoutes = require("./app/routes/baramaditChijbastuRoutes");
// const departmentRoutes = require("./app/routes/departmentRoutes");
// const nabikaranKaryayojanaRoutes = require("./app/routes/nabikaranKaryayojanaRoutes");
// const muddaAnusandhanDayariRoutes = require("./app/routes/muddaAnusandhanDayariRoutes");
const employeeHistoryRoutes = require("./app/routes/employeeHistoryRoutes");
const entryRoutes = require("./app/routes/entryRoutes");
const exitRoutes = require("./app/routes/exitRoutes");
const employeesRoutes = require("./app/routes/employeesRoutes");
const plotRoutes = require("./app/routes/plotRoutes");

app.use("/api/v1", provinceRoutes);

//Commenting this block of code until unit test is done

app.use("/api/v1", districtRoutes);
app.use("/api/v1", municipalitiesRoutes);
app.use("/api/v1", postRoutes);
app.use("/api/v1", levelRoutes);
// app.use("/api/v1",nijibanBibaranRoutes);
// app.use("/api/v1",dharmikbanBibaranRoutes);
// app.use("/api/v1",samudayikbanBibaranRoutes);
app.use("/api/v1",banpaidawarLilamRoutes);
// app.use("/api/v1",kabuliyatibanBibaranRoutes);
// app.use("/api/v1",upavoktasamuhaBibaranRoutes);
// app.use("/api/v1",banxetraAtikramanAreaBibaranRoutes);
// app.use("/api/v1",bandadeloBibaranRoutes);
// app.use("/api/v1",biruwaUtpadanRoutes);
app.use("/api/v1",banpaidawarRoutes);
app.use("/api/v1",activitiesInfoRoutes);
app.use("/api/v1",vehiclesRoutes);
// app.use("/api/v1",banyajantuXetiBibaranRoutes);
// app.use("/api/v1",banxetraAnyaPrayojanRoutes);
// app.use("/api/v1",banyajantuUddarRoutes);
app.use("/api/v1", assetsRoutes);
// app.use("/api/v1",baramaditChijbastuRoutes);
// app.use("/api/v1",departmentRoutes);
// app.use("/api/v1",nabikaranKaryayojanaRoutes);
// app.use("/api/v1",muddaAnusandhanDayariRoutes);
app.use("/api/v1", employeeHistoryRoutes);
app.use("/api/v1", entryRoutes);
app.use("/api/v1", exitRoutes);
app.use("/api/v1", employeesRoutes);
app.use("/api/v1", plotRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
