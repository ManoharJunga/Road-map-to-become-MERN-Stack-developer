import express from 'express';
import { createCustomer, deleteCustomer, getCustomers, oneCustomer, updateCustomer } from '../controllers/customerController.js';

const router = express.Router();

router.post('/create', createCustomer);
router.get('/request', getCustomers);
router.get('/oneCustomer/:id', oneCustomer);
router.put('/update/:id', updateCustomer);
router.delete('/delete/:id', deleteCustomer);

export default router;
