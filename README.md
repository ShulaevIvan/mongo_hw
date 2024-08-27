# Домашнее задание к занятию «2.6. База данных и хранение данных»

### В файле README.md написать следующие запросы для MongoDB:

- запрос(ы) для вставки данных минимум о двух книгах в коллекцию books,
- запрос для поиска полей документов коллекции books по полю title,
- запрос для редактирования полей: description и authors коллекции books по _id записи.


### в терминале mongosh:

- ```use book_base``` автосоздание БД при переключении на нужную.
- ```db.createCollection('books')``` создание коллекции books
- db.books.insertMany([{
  title: "test1",
  description: "testDescr",
  authors: "testAuthor"
},
{
 title: "test2",
  description: "testDescr2",
  authors: "testAuthor2"
},
{
 title: "test3",
  description: "testDescr3",
  authors: "testAuthor3"
}]) - создание 3 книг с полями

- ```db.books.insertOne({'title': 'test4', 'description': 'testDescr4', 'authors': 'testAuthor'})``` - создание дополнительно 1 книги
- ```db.books.find()``` отображение всех книг в коллекции
- ```db.books.find({'title': 'test1'})``` - поиск по title 1 киниги
- ```db.books.find({'title': 'test2'})``` - поиск по title 2 киниги
- ```db.books.find({'title': 'test3'})``` - поиск по title 3 киниги
- ```db.books.find({'title': 'test4'})``` - поиск по title 4 киниги
- ```db.books.updateOne({'authors': 'testAuthor'}, {$set: {'authors': 'testAuthor4'}})``` - обновление книги по полю authors

- ```db.books.updateOne({'_id' : ObjectId('66ce318c350f9515f75e739d')}, {$set: {'description': 'editDescr2', 'authors': 'editAuthor2'}})``` - обновление 2 книги по id 
- ```db.books.updateOne({'_id' : ObjectId('66ce31a8350f9515f75e739f')}, {$set: {'description': 'editDescr4', 'authors': 'editAuthor4'}})``` - обновление 4 книги по id 
- ```db.books.deleteMany({'title': {$in: ['test1', 'test2', 'test3', 'test4']}})``` - удаление всех книг по фильтру title




