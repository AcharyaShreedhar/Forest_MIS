/**
 * Created by Shreedhar Acharya
 *
 *
 */

require("dotenv").config();
const express = require("express");
// const jwt = require('jsonwebtoken');
// var token = require('crypto').randomBytes(50).toString('hex');
//** */ // 'e6fb380f0a95ffc1d84d09ceb7a5bb2b1283394e356478268c4ac94db6a15a444254369ee1f57eb348d6a8b95e0b763a9800'

const db = require("./app/db");
var cors = require("cors");
bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//...........................................................APP

const departmentRoutes = require("./app/routes/departmentRoutes");
const districtRoutes = require("./app/routes/districtRoutes");
const levelRoutes = require("./app/routes/levelRoutes");
const municipalitiesRoutes = require("./app/routes/municipalitiesRoutes");
const postRoutes = require("./app/routes/postRoutes");
const provinceRoutes = require("./app/routes/provinceRoutes");
const usersRoutes = require("./app/routes/usersRoutes");

//...........................................................Karmachari

const employeeHistoryRoutes = require("./app/routes/employeeHistoryRoutes");
const employeesRoutes = require("./app/routes/employeesRoutes");
const karmachariDarbandiRoutes = require("./app/routes/karmachariDarbandiRoutes");
const officeStaffPostRoutes = require("./app/routes/officeStaffPostRoutes");

//...........................................................Bankaprakar

const chaklabanBibaranRoutes = require("./app/routes/chaklabanBibaranRoutes");
const commercialkabuliyatibanBibaranRoutes = require("./app/routes/commercialkabuliyatibanBibaranRoutes");
const consumerGroupDetailsRoutes = require("./app/routes/consumerGroupDetailsRoutes");
const dharmikbanBibaranRoutes = require("./app/routes/dharmikbanBibaranRoutes");
const kabuliyatibanBibaranRoutes = require("./app/routes/kabuliyatibanBibaranRoutes");
const nabikaranKaryayojanaRoutes = require("./app/routes/nabikaranKaryayojanaRoutes");
const nijibanBibaranRoutes = require("./app/routes/nijibanBibaranRoutes");
const rastriyabanBibaranRoutes = require("./app/routes/rastriyabanBibaranRoutes");
const sajhedaribanBibaranRoutes = require("./app/routes/sajhedaribanBibaranRoutes");
const samudayikbanBibaranRoutes = require("./app/routes/samudayikbanBibaranRoutes");

//...........................................................Banbibaran

const bandadeloBibaranRoutes = require("./app/routes/bandadeloBibaranRoutes");
const banxetraAnyaPrayojanRoutes = require("./app/routes/banxetraAnyaPrayojanRoutes");
const banxetraAtikramanNiyantranRoutes = require("./app/routes/banxetraAtikramanRoutes");
const baramaditChijbastuRoutes = require("./app/routes/baramaditChijbastuRoutes");
const muddaAnusandhanDayariRoutes = require("./app/routes/muddaAnusandhanDayariRoutes");
const plotRoutes = require("./app/routes/plotRoutes");

//...........................................................DwandaBebasthapan

const banyajantuXetiBibaranRoutes = require("./app/routes/banyajantuXetiBibaranRoutes");
const banyajantuUddarRoutes = require("./app/routes/banyajantuUddarRoutes");

//...........................................................Banpaidawar

const banpaidawarRoutes = require("./app/routes/banpaidawarRoutes");
const banpaidawarLilamRoutes = require("./app/routes/banpaidawarLilamRoutes");

//...........................................................Karyakram

const activitiesInfoRoutes = require("./app/routes/activitiesInfoRoutes");
const biruwaUtpadanRoutes = require("./app/routes/biruwanUtpadanRoutes");
const brixyaropanRoutes = require("./app/routes/brixyaropanRoutes");
const jadibutiRoutes = require("./app/routes/jadibutiRoutes");

//...........................................................Karyalaya Sampati

const vehiclesRoutes = require("./app/routes/vehiclesRoutes");
const assetsRoutes = require("./app/routes/assetsRoutes");

//...........................................................Karya Bibaran

const banbikaskaryaBibranRoutes = require("./app/routes/samajikkaryaBibaranRoutes");
const samajikkaryaBibaranRoutes = require("./app/routes/banbikasKaryabibaranRoutes");

//...........................................................Inventory

const entryRoutes = require("./app/routes/entryRoutes");
const exitRoutes = require("./app/routes/exitRoutes");
const inventoryRoutes = require("./app/routes/inventoryRoutes");

//...........................................................MISC

const bachatBibaranRoutes = require("./app/routes/bachatBibaranRoutes");
const banpaidawarBikribitaranRoutes = require("./app/routes/banpaidawarBikribitranRoutes");
const rojgarsrijanaRoutes = require("./app/routes/rojgarsrijanaRoutes");
const uddhyamBibaranRoutes = require("./app/routes/uddhyamBibaranRoutes");

const pahiroBibaranRoutes = require("./app/routes/pahirobibaranRoutes");
const badhiBibaranRoutes = require("./app/routes/badhibibaranRoutes");

const nadikinarSamrakshyanRoutes = require("./app/routes/nadikinarSamrakshyanRoutes");
const panimuhanSamrakshyanRoutes = require("./app/routes/panimuhanSamrakshyanRoutes");
const samrakshyanpokhariNirmanRoutes = require("./app/routes/samrakshyanpokhariNirmanRoutes");
const jaladharSamrakshyanRoutes = require("./app/routes/jaladharSamrakshyanRoutes");

const totalBantypesRoutes = require("./app/routes/totalBantypesRoutes");
const totalBanyajantuuddarRoutes = require("./app/routes/totalbanyajantuuddarRoutes");
const totalBanyajantuxetiRoutes = require("./app/routes/totalbanyajantuxetiRoutes");

//.....................................................report
const nabikaranBibaranRoutes = require("./app/routes/report/nabikaranbibaranRoutes");
const banpaidawarBikriSamuhaRoutes = require("./app/routes/report/banpaidawarBikriSamuhaRoutes");
const banxetraAtikramanRoutes = require("./app/routes/report/banxetraAtikramanRoutes");
const banyajantuXetiRahatRoutes = require("./app/routes/report/banyajantuXetiRahatRoutes");
const banyajantuUddarBibaranRoutes = require("./app/routes/report/banyajantuUddarRoutes");
const bandadeloXetiBibaranRoutes = require("./app/routes/report/bandadeloXetiBibaranRoutes");
const banxetraAnyaprayojanBibaranRoutes = require("./app/routes/report/banxetraAnyaprayojanRoutes");
const muddaAnusandhandayariRoutes = require("./app/routes/report/muddaAnusandhandayariRoutes");
const gairakasthaBanpaidawarBikribitaranRoutes = require("./app/routes/report/gairakasthaBanpaidawarBikribitaranRoutes");
const kathdauraBikribitaranRoutes = require("./app/routes/report/kathdauraBikribitaranRoutes");
const biruwaUtpadanKharidRoutes = require("./app/routes/report/biruwaUtpadanKharidRoutes");
const uddhamBibaranRoutes = require("./app/routes/report/uddhamBibaranRoutes");
const rojgariSrijanaRoutes = require("./app/routes/report/rojgariSrijanaRoutes");
const upavoktaSusasanRoutes = require("./app/routes/report/upavoktaSusasanRoutes");

app.use("/api/v1", provinceRoutes);
app.use("/api/v1", districtRoutes);
app.use("/api/v1", municipalitiesRoutes);
app.use("/api/v1", postRoutes);
app.use("/api/v1", levelRoutes);
app.use("/api/v1", nijibanBibaranRoutes);
app.use("/api/v1", dharmikbanBibaranRoutes);
app.use("/api/v1", samudayikbanBibaranRoutes);
app.use("/api/v1", banpaidawarLilamRoutes);
app.use("/api/v1", kabuliyatibanBibaranRoutes);
app.use("/api/v1", consumerGroupDetailsRoutes);
app.use("/api/v1", banxetraAtikramanRoutes);
app.use("/api/v1", bandadeloBibaranRoutes);
app.use("/api/v1", biruwaUtpadanRoutes);
app.use("/api/v1", banpaidawarRoutes);
app.use("/api/v1", activitiesInfoRoutes);
app.use("/api/v1", vehiclesRoutes);
app.use("/api/v1", banyajantuXetiBibaranRoutes);
app.use("/api/v1", banxetraAnyaPrayojanRoutes);
app.use("/api/v1", banyajantuUddarRoutes);
app.use("/api/v1", assetsRoutes);
app.use("/api/v1", baramaditChijbastuRoutes);
app.use("/api/v1", departmentRoutes);
app.use("/api/v1", nabikaranKaryayojanaRoutes);
app.use("/api/v1", muddaAnusandhanDayariRoutes);
app.use("/api/v1", employeeHistoryRoutes);
app.use("/api/v1", entryRoutes);
app.use("/api/v1", exitRoutes);
app.use("/api/v1", employeesRoutes);
app.use("/api/v1", plotRoutes);
app.use("/api/v1", inventoryRoutes);
app.use("/api/v1", officeStaffPostRoutes);
app.use("/api/v1", usersRoutes);
app.use("/api/v1", karmachariDarbandiRoutes);
app.use("/api/v1", uddhyamBibaranRoutes);
app.use("/api/v1", bachatBibaranRoutes);
app.use("/api/v1", banpaidawarBikribitaranRoutes);
app.use("/api/v1", rojgarsrijanaRoutes);
app.use("/api/v1", banbikaskaryaBibranRoutes);
app.use("/api/v1", samajikkaryaBibaranRoutes);
app.use("/api/v1", brixyaropanRoutes);
app.use("/api/v1", sajhedaribanBibaranRoutes);
app.use("/api/v1", jadibutiRoutes);
app.use("/api/v1", rastriyabanBibaranRoutes);
app.use("/api/v1", commercialkabuliyatibanBibaranRoutes);
app.use("/api/v1", chaklabanBibaranRoutes);
app.use("/api/v1", pahiroBibaranRoutes);
app.use("/api/v1", badhiBibaranRoutes);
app.use("/api/v1", nadikinarSamrakshyanRoutes);
app.use("/api/v1", panimuhanSamrakshyanRoutes);
app.use("/api/v1", samrakshyanpokhariNirmanRoutes);
app.use("/api/v1", jaladharSamrakshyanRoutes);
app.use("/api/v1", totalBantypesRoutes);
app.use("/api/v1", totalBanyajantuuddarRoutes);
app.use("/api/v1", totalBanyajantuxetiRoutes);

//.............................................report
app.use("/api/v1", nabikaranBibaranRoutes);
app.use("/api/v1", banpaidawarBikriSamuhaRoutes);
app.use("/api/v1", banxetraAtikramanNiyantranRoutes);
app.use("/api/v1", banyajantuXetiRahatRoutes);
app.use("/api/v1", banyajantuUddarBibaranRoutes);
app.use("/api/v1", bandadeloXetiBibaranRoutes);
app.use("/api/v1", bandadeloXetiBibaranRoutes);
app.use("/api/v1", banxetraAnyaprayojanBibaranRoutes);
app.use("/api/v1", muddaAnusandhandayariRoutes);
app.use("/api/v1", gairakasthaBanpaidawarBikribitaranRoutes);
app.use("/api/v1", kathdauraBikribitaranRoutes);
app.use("/api/v1", biruwaUtpadanKharidRoutes);
app.use("/api/v1", uddhamBibaranRoutes);
app.use("/api/v1", rojgariSrijanaRoutes);
app.use("/api/v1", upavoktaSusasanRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
