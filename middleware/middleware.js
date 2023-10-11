const apiKey = "your-api-key";

const apiKeyMiddleware = (req, res, next) => {
  const providedApiKey = req.headers["x-api-key"] || req.query.apiKey;

  if (!providedApiKey || providedApiKey !== apiKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};

module.exports = { apiKeyMiddleware };
