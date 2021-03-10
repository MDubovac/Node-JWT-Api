const router = require("express").Router();
const pool = require("../database/db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jtwGenerator");

// Register 
router.post("/register" , async (req, res) => {
    try {
        // 1. Destructure req.body (user_name, user_email, user_pass)
        const { name, email, password } = req.body; 

        // 2. Check if user exists
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);
        if(user.rows.length !== 0){
            return res.status(401).send("E-mail address is already in use");
        }

        // 3. Encrypt the password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        // 4. Insert user in DB
        const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, bcryptPassword]);

        // 5. Generate a JWT Token
        const token = jwtGenerator(newUser.rows[0].user_id);
        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;