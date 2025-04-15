import dotenv from 'dotenv';
import { createApp } from './config/app.config.js';

dotenv.config();
const app = createApp();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`El applicativooooo http://localhost:${PORT}`);
});