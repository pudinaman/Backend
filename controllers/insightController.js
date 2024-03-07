const Insight = require('../models/Insight');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncError');

// Get all Insights
exports.getAllInsights = catchAsyncErrors(async (req, res) => {
    const insights = await Insight.find();
    res.status(200).json({
        success: true,
        count: insights.length,
        insights
    });
});
