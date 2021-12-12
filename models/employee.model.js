import mongoose from "mongoose";
const employeeSchema = mongoose.Schema(
    {
        _id:{ type: mongoose.Schema.Types.ObjectId},
        nom: { type: String,required: 'This field is required.' },
        prenom: { type: String,required: 'This field is required.' },
        anciennete:{ type: Number ,required: 'This field is required.'},
        adresse:{
        rue: {type: Number},
        codepostal :{type : Number ,required: 'This field is required.'},
        numero: {type : Number},
        ville: {type : String,required: 'This field is required.'}
    },
        tel:{type:String},
        prime:{type:Number},
    }
);

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;  