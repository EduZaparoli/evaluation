import departments from "../models/Department.js"

class DepartmentController{

    static createDepartment = async (req, res)=>{
        const department = await departments.create(req.body);
        res.status(200).send({department})
    } 

    static updateDepartment = async (req,res) => {
        const { name, address } = req.body;

        await departments.update(
            { name, address },
            {
                where: {id: req.params.id}
            }
        )

        res.status(200).send({message: "Department Updated!"})
    }

    static deleteDepartment = async (req, res) => {
        await departments.destroy({where: {'id': req.params.id}
        }).then(function(){
            res.status(200).send({message: "Department deleted!"})
        }).catch(function(erro){
            res.status(500).send({message: erro})
        })
    
    }

    static showDepartment = async (req, res) =>{
        if(req.query.name!=null){
            const limit = parseInt(req.query.limit);
            await departments.findAll(
                {where : {"name": req.query.name}, offset: 0, limit: limit}
            ).then((departments) => {
                res.status(200).json(departments);
            }).catch(() => {
                res.status(400).send({message: "Error when searching!"});
            })
        }
        else if(req.query.address!=null){
            const limit = parseInt(req.query.limit);
            await departments.findAll(
                {where : {"address": req.query.address}, offset: 0, limit: limit}
            ).then((department) => {
                res.status(200).json(department);
            }).catch(() => {
                res.status(400).send({message: "Error when searching!"});
            })
        }
        else{
            const limit = parseInt(req.query.limit);
            await departments.findAll(
                {offset: 0, limit: limit}
            ).then((departments) => {
                res.status(200).json(departments);
            }).catch(() => {
                res.status(400).send({message: "Error when searching!"})
            })
        }
    }

    static showDepartmentId = async (req, res) => {
        const { id } = req.params;
        const department = await departments.findByPk(id)
        res.status(200).json(department)
    }

}


export default DepartmentController;
