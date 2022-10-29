import {book} from '../controllers/book.js';

const router = express.Router();
    
router.post("/book", book);

export default router;