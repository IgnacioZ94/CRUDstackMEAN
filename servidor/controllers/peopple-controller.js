const People = require('../models/peopple');
const peopleController = {};

peopleController.getPeople = async (req, res) => {
    const peopple = await People.find();
    res.json(peopple);
}
peopleController.createUser = async (req, res) => {
    const user = new People(req.body);
    await user.save();
    res.json({
        'status': 'User Update'
    });
   
}
peopleController.getUser  = async (req, res) => {
    const user = await People.findById(req.params.id);
    res.json(user);

}
peopleController.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        mail: req.body.mail,
        telefono: req.body.telefono
    }
    await People.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
       status: 'User Update'
    });
   
}
peopleController.deleteUser = async (req, res) => {
   await People.findByIdAndRemove(req.params.id);
   res.json({
       status: 'User Deleted'
   });
}
module.exports = peopleController;