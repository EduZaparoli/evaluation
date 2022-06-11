import department from "../models/Department.js"

class DepartmentController{

    static createDepartment = async (req, res)=>{
        const departments = await department.create(req.body);
        res.status(200).send({department})
    } 

    static updateDepartment = async (req,res) => {
        const { name, address } = req.body;

        await department.update(
            { name, address },
            {
                where: {id: req.params.id}
            }
        )

        res.status(200).send({message: "Department Updated!"})
    }

    static deleteDepartment = async (req, res) => {
        await department.destroy({where: {'id': req.params.id}
        }).then(function(){
            res.status(200).send({message: "Department deleted!"})
        }).catch(function(erro){
            res.status(500).send({message: erro})
        })
    
    }

    static showDepartment = async (req, res) =>{
        await department.findAll()
        .then((departments) => {
            res.status(200).json(departments);
        }).catch(() => {
            res.status(400).send({message: "Erro ao pesquisar!"})
        })
    }


    static showDepartmentName = async (req, res) =>{
        const { name } = req.params

        const departmentName = await department.findById(id)
        req.status(200).json(departmentName)

        await department.findAll ({'name' : name}, {}, (err, department) =>{
            res.status(200).send(department); 
        })
    }

    static showDepartmentAddress = (req,res) => {
        const { address } = req.params

        const departmentAddress = await department.findById(id)
        req.status(200).json(departmentAddress)

        await department.findAll ({'address' : address}, {}, (err, department) =>{
            res.status(200).send(department); 
        })
    }

    static showDepartmentId = (req, res) => {
        const { id } = req.params;
        const departments = await department.findByPk(id)
        res.status(200).json(departments)
    }

}


export default DepartmentController
