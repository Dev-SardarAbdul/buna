const koaRouter = require("koa-router");
const multer = require("@koa/multer");
const validate = require("koa-joi-validate");
const Joi = require("joi");

const {
  createArticle,
  deleteArticle,
  getArticle,
  updateArticle,
} = require("../controllers/article");
//  const { createArticleSchema } = require("../validations/validate");

const { createExpert } = require("../controllers/expert");

// Set up multer storage for image, video, and file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    cb(null, `${file.originalname}.${ext}`);
  },
});

const upload = multer({
  storage: storage,
  // fileFilter: function (req, file, cb) {
  //   if (
  //     file.mimetype.startsWith("image/") ||
  //     file.mimetype.startsWith("video/") ||
  //     file.mimetype.startsWith("audio/") ||
  //     file.mimetype.startsWith("application/pdf")
  //     // ||
  //     // file.mimetype.startsWith("files/")
  //   ) {
  //     cb(null, true);
  //   } else {
  //     cb(new Error("File type not supported"));
  //   }
  // },
});

// const createArticleValidate = validate({   body: {
//   name: Joi.string().required(),
//   title: Joi.string().required()
// } });

const router = new koaRouter();

// articles Routes
// router.post("/create-article", createArticle);

router.post(
  "/create-article",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "video", maxCount: 1 },
    { name: "audio", maxCount: 1 },
    { name: "files", maxCount: 10 },
  ]),
  createArticle
);

router.put(
  "/update-article/:id",
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "video", maxCount: 1 },
    { name: "audio", maxCount: 1 },
    { name: "files", maxCount: 10 },
  ]),
  updateArticle
);

router.get("/get-article", getArticle);
router.delete("/delete-article/:id", deleteArticle);

// expert

router.post("/create-expert", upload.single("icon"), createExpert);

// expert

module.exports = { router };
