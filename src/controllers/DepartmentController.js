import department from "../models/Department.js"

class DepartmentController{

    static createDepartment = (req, res)=>{
        let departmen = new department(req.body); 

        departmen.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message} - Não foi possivel cadastrar o departamento.`})
            }else { 
                res.status(201).send(department.toJSON())
            }
        })
    } 

    static updateDepartment = (req,res) => {
        const id = req.params.id; 

        department.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if (err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Departamento atualizado com sucesso'})
            }
        })
    }

    static deleteDepartment = (req, res) => {
        const id = req.params.id;

        department.findByIdAndDelete(id, (err) => {
            if (err){
                res.status(500).send({message: err.message})
            } else {
                res.status(200).send({message: 'Departamento excluido com sucesso'})
            }
        })
    }

    static showDepartment = (req, res) =>{

        department.find((err, department) =>{
            res.status(200).json(department)
        })

    }



    static showDepartmentName = (req, res) =>{
        const name = req.query.name

        department.find ({'name' : name}, {}, (err, department) =>{
            res.status(200).send(department); 
        })
    }


}


export default DepartmentController
