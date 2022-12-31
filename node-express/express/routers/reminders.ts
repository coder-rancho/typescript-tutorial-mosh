import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();

router.get('/', (req, res) => res.send('List of reminders'))

router.post('/', (req, res) => {
    const { title } = req.body as CreateReminderDto;
    const reminder = new Reminder(title)
    res.json(title)
})

export default router;