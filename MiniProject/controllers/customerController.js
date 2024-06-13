import { Customer } from "../models/Customer.models.js";

export const createCustomer = async (req, res) => {
    try {
        const { name, email, password, phone, address, city, state, country, zipcode } = req.body;
        const customer = new Customer({ name, email, password, phone, address, city, state, country, zipcode });
        await customer.save();
        res.status(201).json({
            success: true,
            message: "Customer created successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error creating customer: " + err.message
        });
    }
};

export const getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json({
            success: true,
            data: customers
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error getting customers: " + err.message
        });
    }
}

export const oneCustomer = async (req, res) => {
    try{
        const customers = await Customer.findById(req.params.id);
        if(!customers){
            res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }
        res.status(200).json(customers);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error getting customers: " + err.message
        });
    }
}
export const updateCustomer = async (req, res) => {
    try {
        const { name, email, password, phone, address, city, state, country, zipcode } = req.body;

        // Update customer by ID
        const updatedCustomer = await Customer.findByIdAndUpdate(
            req.params.id,
            { name, email, password, phone, address, city, state, country, zipcode },
            { new: true } // This option returns the updated document
        );

        if (!updatedCustomer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }

        res.status(200).json(updatedCustomer);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error updating customer: " + err.message
        });
    }
};
export const deleteCustomer = async (req, res) => {
    try{
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Customer deleted successfully"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Error getting customers: " + err.message
        });
    }
}