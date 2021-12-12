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

/*export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch {
        res.status(404).json({ message: error.message});
    }
};*/

//POST APIs
export const createEmployee = async (req, res) => {
    const newEmployee = new Employee({
        //employee attributes
        nom: req.body.nom,
        prenom: req.body.prenom,
        anciennete: req.body.anciennete,
        rue: req.body.adresse.rue,
        numero: req.body.adresse.numero,
        ville: req.body.adresse.ville,
        postalcode: req.body.adresse.postalcode,
        tel: req.body.tel,
        prime: req.body.prime

    });
    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
};

//PUT APIs
export const updateprime = async (req, res) => {
    try {
        const allEmployees = await Employee.find ({ prime :{ $exists : true }});
        allEmployees.forEach( element => {
            element.prime += 200;
        }).save();
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

/*//DELETE APIs
export const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndRemove(req.params.id);
        res.status(200).json("Employee deleted successfully");
    } catch (error) {
        res.status(404).json({ message: error.message});
    }

};*/


//count
export const getnumber = async (req, res) => {
    try {
        const number = await Employee.find().count() ;

        res.status(200).json(number);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};
//prenom =david
export const getDavid = async (req, res) => {
    try {
        const allEmployees = await Employee.find ({"prenom" :'David'});
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};
//commence ou termine par d
export const getD = async (req, res) => {
    try {
        const allEmployees = await Employee.find ({ "prenom" :"/^D.*|.* D$/"}) ;
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};
//6 letter
export const getsix = async (req, res) => {
    try {
        const allEmployees = await Employee.find({ "prenom ":"/^D [a - z ]{5} $ /"}) ;
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};
//anciennette >10
export const getancien = async (req, res) => {
    try {
        const allEmployees = await Employee.find (
            { anciennete :{ $gt :10}} 
            ) ;
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};




//rue existe 

export const getrue = async (req, res) => {
    try {
        const allEmployees = await Employee.find (
            { "adresse.rue": { $exists : "true" } } ,
            { nom :1 , adresse :1}
            ) ;
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};

//regrouper
export const getville = async (req, res) => {
    try {
        const allEmployees = await Employee.find (
            { ' adresse . ville ': ' Toulouse '} ,
            { nom :1 , prenom :1 , anciennete :1 , _id :0}
            ) ;
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};
    
//paris
export const getM = async (req, res) => {
    try {
        const allEmployees = await Employee.find ({
            $and : [
            { prenom : /^M/} ,
            {
            $or : [
            { "adresse . ville": "paris"} ,
            { "adresse . ville": "Bordeaux"}
            ]
            }
            ]
            }) ;
        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
};



