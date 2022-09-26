
const {
  saveToDb,
  getToDoData,
  deleteToDoById,
  updateToDoById,
} = require('../models/ToDo.model');


async function httpSaveToDb(req, res){
  const content = req.body.content;

  try {
    await saveToDb(content);
    res.redirect('/');
  } catch (err) {
    res.status(404).json({
      error: 'Can not save to database'
    });
  }

}
async function httpGetToDoData(req, res){
  const tasks = await getToDoData();
  res.render('../views/toDo.ejs', {
    toDoTasks: tasks
  });

}

async function httpPostAfterGetUpdate(req, res) {
  const toDoId = req.params.id;
  const updateContent = req.body.content;


  console.log(toDoId);
  await updateToDoById(toDoId, updateContent);
  res.redirect('/');
}

async function httpUpdateById(req, res){
  const toDoId = req.params.id;
  const tasks = await getToDoData();
  res.render('../views/toDoEdit.ejs', {
    todoTasks: tasks,
    idTask: toDoId
  });


}

async function httpDeleteToDoById(req, res){
  const id = req.params.id;

  await deleteToDoById(id);
  
  res.redirect('/');
}
module.exports = {
  httpSaveToDb,
  httpGetToDoData,
  httpPostAfterGetUpdate,
  httpUpdateById,
  httpDeleteToDoById,

};
