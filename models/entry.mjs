import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: true,
        default: 'New Event'
    },
    start: {
        type: Date,
        required: true,
        default: Date.now
    },
    end: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: String,
    participants: Number
} , {
    timestamps: true
})


// ===================================================================================
//              indexes
// ===================================================================================
entrySchema.index({ start: 1});

// ===================================================================================
//              virtuals
// ===================================================================================
entrySchema.virtual('duration').get(function () {
    return this.end - this.start;
})

export default mongoose.model("Entry", entrySchema);