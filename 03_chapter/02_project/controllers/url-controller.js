const shortid = require("shortid")
const URL = require("../models/url-schema");

async function handleGenerateNewURL (req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({
        error: "url is required"
    })

    const newURL = shortid();

    await URL.create({
        shortId: newURL,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.status(200).json({
        message: "Success",
        id: newURL,
    });
}

async function handleRedirectToOriginal (req, res) {
    const shortId = req.params.shortId;
    const original = await URL.findOneAndUpdate({
        shortId, 
    }, { 
        $push: {
            visitHistory: {
                timestamps: new Date(),
            }, 
        }
    })

    if (!original) return res.status(400).json({
        error: "Wrong short url or may be deleted.."
    })
   
    console.log(`Visit: http://localhost:8001/url/${shortId}: to visit ${original.redirectUrl}`);
    res.redirect(original.redirectUrl);
}

async function handleDeleteShortUrl(req, res) {
    const shortId = req.params.shortId;
    console.log("Trying to delete: ", shortId);
    

    try {
        const deletedUrl = await URL.findOneAndDelete({ shortId });

        if (!deletedUrl) {
            return res.status(404).json({ message: "Short URL not found." });
        }

        console.log("Short URL deleted:", deletedUrl);
        res.status(200).json({ message: "Short URL deleted successfully.", data: deletedUrl });
    } catch (err) {
        console.error("Error deleting short URL:", err);
        res.status(500).json({ message: "Something went wrong." });
    }
}

async function handleGetAnalytics (req, res) {
    const shortId = req.params.shortId;

    const result = await URL.findOne({ shortId });
    return res.json({ totalClicks: result.visitHistory.length, analytics: result.visitHistory })
}


module.exports = {
    handleGenerateNewURL,
    handleRedirectToOriginal,
    handleDeleteShortUrl,
    handleGetAnalytics,
}