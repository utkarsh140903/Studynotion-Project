const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");


// This function is used as middleware to authenticate user requests
exports.auth = async (req,res,next) => {
    try {
        // Extracting JWT from request cookies, body or header
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        //if token missing , then return response
        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Access denied. No token provided."});
        }

        //verify  the token
        try{
            // Verifying the JWT using the secret key stored in environment variables
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            // Storing the decoded JWT payload in the request object for further use
            req.user =decode; 

        } catch( error) {
            // If JWT verification fails, return 401 Unauthorized response
            return res.status(401).json({
                success:false,
                message: "token is invalid"
            })
        }
        // If JWT is valid, move on to the next middleware or request handler
        next();

    } catch (error) {
        return res.status(401).json({
            success : false,
            message: "Something wet wrong while validating the token",
        })
    }
}



//isStudent
exports.isStudent = async (req,res,next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email });

		if (userDetails.accountType !== "Student") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Students",
			});
		}
		next();


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again"
        })
    }
}


//isInstructor
exports.isInstructor = async (req,res,next) => {
    try {
        const userDetails = await User.findOne({ email: req.user.email });
		console.log(userDetails);

		console.log(userDetails.accountType);

		if (userDetails.accountType !== "Instructor") {
			return res.status(401).json({
				success: false,
				message: "This is a Protected Route for Instructor",
			});
		}
		next();


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again"
        })
    }
}



//isAdmin
exports.isAdmin = (req,res,next) => {
    try {
        
        if(req.user.accountType !== "Admin") {
            return res.status(401).json({
                success:false,
                message: "you are not authorized to access this route , this route is protected for Admin"
            })
        }

        next();

    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "User Role is not Working"
        })
    }
}