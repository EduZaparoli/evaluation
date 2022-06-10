
import person from "../models/Person.js"

class PersonController{

    static createPerson = async (req, res)=>{
        const persons = await person.create(req.body);
        res.status(200).send({person})
    } 

    static updatePerson = async (req,res) => {
        const { name, birth_date, birth_place, job, department_id } = req.body;

        await person.update(
            { name, birth_date, birth_place, job, department_id },
            {
                where: {id: req.params.id}
            }
        )

        res.status(200).send({message: "Person Updated!"})
    }

    static deletePerson = async (req, res) => {
        await person.destroy({where: {'id': req.params.id}
        }).then(function(){
            res.status(200).send({message: "Person deleted!"})
        }).catch(function(erro){
            res.status(500).send({message: erro})
        })
    
    }

    static showPerson = async (req, res) =>{
        await person.findAll()
        .then((person) => {
            res.status(200).json(person);
        }).catch(() => {
            res.status(400).send({message: "Erro ao pesquisar!"})
        })
    }

    static showPersonName = async (req, res) =>{
        const { name } = req.params

        const personName = await person.findById(id)
        req.status(200).json(personName)

        await person.findAll ({'name' : name}, {}, (err, person) =>{
            res.status(200).send(person); 
        })
    }

    static showPersonId = async (req, res) =>{
        const { id } = req.params

        const persons = await person.findById(id)
        req.status(200).json(persons)

        await person.findAll ({'Id' : id}, {}, (err, person) =>{
        res.status(200).send(person); 

        })
    }

    static showPersonJob = async (req, res) =>{
        const { job } = req.params

        const persons = await person.findById(id)
        req.status(200).json(persons)

        await person.findAll ({'Job' : job}, {}, (err, person) =>{
        res.status(200).send(person); 

        })
    }

}
export default PersonController



