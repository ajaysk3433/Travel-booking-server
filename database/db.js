
import mongoose , { Schema, model }from 'mongoose'


const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.hobczgc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`,
        );
        console.log('MongoDB is connected');
    } catch (err) {
        console.log(err);
    }
};
connectToDatabase()

const placeSchema = new Schema({
    placeName: {
        type: String,
        required: true,
        trim: true
    },
    stateName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    img:{
        type: String,
        required: true
    }
}, {
    timestamps: true // adds createdAt and updatedAt fields
});

const bookingSlotSchema = new mongoose.Schema({
    experienceId: {
        type:String,
        required: true,
        ref: 'Experience'
    },
    placeName: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    timeId: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        min: 1
    },
    subtotal: {
        type: Number,
        required: true,
        min: 0
    },
    taxes: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        required: true,
        min: 0
    },
    total: {
        type: Number,
        required: true,
        min: 0
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,

    }
}, {
    timestamps: true
});


const Place = mongoose.model('Place', placeSchema);
const BookingSlot = mongoose.model('BookingSlot', bookingSlotSchema);


export {Place, BookingSlot};


