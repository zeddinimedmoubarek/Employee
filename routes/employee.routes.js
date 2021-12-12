import express from "express";
import { getEmployees,/* getEmployeeById.deleteEmployee.*/ createEmployee, updateprime,getnumber,getDavid,getD,getsix,getancien,getrue ,getville,getM} from "../controllers/employee.controller.js";


const router = express.Router();

router.get("/", getEmployees);
//router.get("/:id", getEmployeeById);
router.post("/", createEmployee);
router.put("/prime", updateprime);
//router.delete("/:id", deleteEmployee);
router.get("/number",getnumber);
router.get("/david",getDavid);
router.get("/d",getD);
router.get("/6",getsix);
router.get("/ancien",getancien);
router.get("/rue",getrue);
router.get("/ville",getville);
router.get("/m",getM);
export default router;