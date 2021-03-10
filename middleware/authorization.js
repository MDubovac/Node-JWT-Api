const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
    try {
        // Check if the token is created
        const jwtToken = req.header("token");
        if(!token){
            return res.status(403).json("Not Authorized");
        }

        const payload = jwt.verify(jwtToken, process.env.jwtSecret);
        req.user = payload.user;

    } catch (err) {
        console.error(err.message);
        return res.status(403).json("Not Authorized");
    }
}