import Employee from "../models/employee.model.js";

//Get APIs
export const getEmployees = async (req, res) => {
    try {
        const allEmployees = await Employee.find();
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch {
        res.status(404).json({ message: error.message});
    }
};

//POST APIs
export const createEmployee = async (req, res) => {
    const newEmployee = new Employee({
        //employee attributes
        //firstname: req.body.firstname
    });
    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
};

//PUT APIs
export const updateEmployee = async (req, res) => {
    const employee = req.body;
    try {
        await Employee.findByIdAndUpdate(req.params.id, employee);
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};

//DELETE APIs
export const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndRemove(req.params.id);
        res.status(200).json("Employee deleted successfully");
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};