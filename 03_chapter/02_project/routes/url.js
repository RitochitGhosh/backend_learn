const express = require("express");
const { 
    handleGenerateNewURL, 
    handleRedirectToOriginal, 
    handleDeleteShortUrl, 
    handleGetAnalytics 
}  = require("../controllers/url-controller")
const router = express.Router();

router.post("/", handleGenerateNewURL)
router
    .route("/:shortId")
    .get(handleRedirectToOriginal)
    .delete(handleDeleteShortUrl)
router.get("/analytics/:shortId", handleGetAnalytics)

module.exports = router;