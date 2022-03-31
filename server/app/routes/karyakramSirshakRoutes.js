const express = require('express')
const router = express.Router()

const karyakramSirshakController = require('../controller/karyakramSirshakController')

router.post(
  '/karyakramsirshakList',
  karyakramSirshakController.getAllKaryakramSirshak
)
router.get(
  '/karyakramsirshak/:karyakramSirshakId',
  karyakramSirshakController.getKaryakramSirshak
)
router.post(
  '/karyakramsirshakDropdownList',
  karyakramSirshakController.getKaryakramSirshakDropdown
)
router.post('/karyakramsirshak', karyakramSirshakController.addKaryakramSirshak)
router.put(
  '/karyakramsirshak/:karyakramSirshakId',
  karyakramSirshakController.updateKaryakramSirshak
)
router.delete(
  '/karyakramsirshak/:karyakramSirshakId',
  karyakramSirshakController.deleteKaryakramSirshak
)
module.exports = router
