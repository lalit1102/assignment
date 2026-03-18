var express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    console.log(file);
    let s1 = file.originalname.split(".");
    const uniqueSuffix = Date.now() + "." + s1[1];
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

var router = express.Router();
var {
  insSubcat,
  dispSubcat,
  delSubcat,
  editSubcat,
} = require("../controllers/subcatController");
router.get("/", dispSubcat);


router.post("/ins", upload.single("image"), insSubcat);
router.get("/del/:id", delSubcat);
router.get("/edit/:id", editSubcat);

module.exports = router;
