const express = require('express');

const toDoRouter = express.Router();

const {
  httpSaveToDb,
  httpGetToDoData,
  httpPostAfterGetUpdate,
  httpDeleteToDoById,
  httpUpdateById,
} = require('./ToDo.controller');

toDoRouter.post('/', httpSaveToDb);
toDoRouter.get('/', httpGetToDoData);
toDoRouter.get('/edit/:id', httpUpdateById)
toDoRouter.post('/edit/:id', httpPostAfterGetUpdate);
toDoRouter.get('/remove/:id', httpDeleteToDoById);

module.exports = toDoRouter;
