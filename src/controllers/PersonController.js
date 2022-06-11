import persons from "../models/Person.js"

class PersonController{

    static createPerson = async (req, res)=>{
        const person = await persons.create(req.body);
        res.status(200).send({person})
    } 

    static updatePerson = async (req,res) => {
        const { name, birth_date, birth_place, job, department_id } = req.body;

        await persons.update(
            { name, birth_date, birth_place, job, department_id },
            {
                where: {id: req.params.id}
            }
        )

        res.status(200).send({message: "Person Updated!"})
    }

    static deletePerson = async (req, res) => {
        await persons.destroy({where: {'id': req.params.id}
        }).then(function(){
            res.status(200).send({message: "Person deleted!"})
        }).catch(function(erro){
            res.status(500).send({message: erro})
        })
    
    }

    static showPerson = async (req, res) =>{
        await persons.findAll()
        .then((persons) => {
            res.status(200).json(persons);
        }).catch(() => {
            res.status(400).send({message: "Erro ao pesquisar!"})
        })
    }

    static showPersonName = async (req, res) =>{
        const { name } = req.params;

        await persons.findAll ({'name' : name}, {}, (err, person) =>{
            res.status(200).send(person); 
        })
    }

    static showPersonId = async (req, res) =>{
        const { id } = req.params;
        const person = await persons.findByPk(id)
        res.status(200).json(person)
    }

    static showPersonJob = async (req, res) =>{
        const { job } = req.params;

        await persons.findAll ({'job' : job}, {}, (err, person) =>{
        res.status(200).send(person); 

        })
    }

}
export default PersonController



