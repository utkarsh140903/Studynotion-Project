const RatingAndReview = require('../models/RatingAndReview');
const Course = require('../models/Course');

//create rating
exports.createRating = async (req,res) => {
    try {
        //get user id
        const userId = req.user.id;

        //fetch data from req body
        const {courseId, rating, review} = req.body;

        //check if user is enrolled or not
        const courseDetails = await Course.findOne({_id:courseId,
            studentsEnrolled: {$elemMatch:{$eq:userId}}});

        if(!courseDetails){
            return res.status(404).json(
                {
                    success: false,
                    message: "Course not found"});
        }
      
        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({user: userId, course: courseId});
        if(alreadyReviewed){
            return res.status(403).json({
                success: false,
                message: "You have already reviewed this course"});
        }


        //create rating and review
        const ratingReview = await RatingAndReview.create({
            course: courseId,
            user: userId,
            rating: rating,
            review: review
        });



        //update course with this rating/review
        await Course.findByIdAndUpdate(courseId, {
            $push: {
              ratingAndReviews: ratingReview,
            },
          })
        await courseDetails.save()

        //return response
        return res.status(200).json({
            success: true,
            message: "Rating and Review created successfully",
            ratingReview,
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Can not create rating and review",
            error: error.message
        })
        
    }
}




//getAveragerating
exports.getAverageRating = async (req, res) => {
    try {

        //get courseid
        const courseId = req.body.courseId;

        //calculate avg rating using the MongoDB aggregation pipeline
        const result = await RatingAndReview.aggregate([
            {$match:
                 {course: new mongoose.Types.ObjectId( courseId)}
            }, // this line matches an entry in ratingAnsReview that have this courseid
            {$group: {_id: null,
                 averageRating: {$avg: "$rating"}}}
        ]);
        console.log(result);

        //return rating
        if(result.length > 0){
            return res.status(200).json({
                success: true,
                message: "Average rating fetched successfully",
                averageRating: result[0].averageRating,
            })
        }

        //if no rating / review exist
        return res.status(200).json({
            success: true,
            message: "Average rating not found",
            averageRating: 0,
        })


        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Can not get average rating",
            error: error.message
        })
        
    }
}



//getAllratingamdreviews
exports.getAllrating = async (req, res) => {
    try {
        const allReview = await RatingAndReview.find({})
        .sort({rating: "desc"})
        .populate({
            path: "user",
            //user k andar kis kis field konpopulate krna hai
            select: "firstName lastName email image"
        })
        .populate({
            path:'course',
            select:"courseName", 
        }).exec();


        return res.status(200).json({
            success: true,
            message: "All rating fetched successfully",
            data:allReview,
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Can not get all rating",
            error: error.message
        })
        
    }
}