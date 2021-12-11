import mongoose from "mongoose";

const employeeSchema = mongoose.Schema(
    {
        firstname: { type: String, }
        //employee model attributes
    }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;