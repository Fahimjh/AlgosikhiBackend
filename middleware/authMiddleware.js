const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
        req.user = decoded; // Attach all payload (including isAdmin if present)
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

function isAdmin(req, res, next) {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ error: 'Admin access required' });
    }
}

module.exports = { verifyToken, isAdmin };
