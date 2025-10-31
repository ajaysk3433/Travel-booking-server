import express from 'express'
import cors from 'cors'
import {Place, BookingSlot} from './database/db.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())



const validPromoCodes = {
    SAVE100: { discount: 100 },
    SAVE200: { discount: 200 },
}

// GET /experiences
app.get('/api/experiences',async (req, res) => {
    const data = await Place.find();

    res.json(data)

})

// GET /experiences/:id
app.get('/api/experiences/:id',async (req, res) => {
    const id = req.params.id
    const data = await Place.findById(id)
    if (!data) return res.status(404).json({ error: 'Experience not found' })
    res.json(data)
})


app.get('/api/slot/:id', async (req, res) => {

        const id = req.params.id;
        try{
            const data = await  BookingSlot.find({experienceId : id})
            res.status(200).json(data)
        }catch(err){
            res.status(404).json({ error: 'Experience not found' })
        }


});


// POST /bookings
app.post('/api/booking', async (req, res) => {
    const data = req.body;


    try {
        // Check for existing booking with same experience, date, time, and email
        const existingBooking = await BookingSlot.findOne({
            experienceId: data.experienceId,
            date: data.date,
            time: data.time,
            email: data.email
        });

        if (existingBooking) {
            return res.status(409).json({
                success: false,
                message: 'You have already booked this slot.'
            });
        }

        // Create and save new booking
        const newBooking = new BookingSlot(data);
        await newBooking.save();

        res.json({ success: true, message: 'Booking confirmed' });
    } catch (error) {
        console.error('Booking error:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});


// POST /promo/validate
app.post('/api/promo/validate', (req, res) => {
    const { code } = req.body
    const promo = validPromoCodes[code]
    if (!promo) return res.status(400).json({ valid: false, message: 'Invalid promo code' })
    res.json({ valid: true, discount: promo.discount })
})

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Running at http://localhost:${PORT}`)
})