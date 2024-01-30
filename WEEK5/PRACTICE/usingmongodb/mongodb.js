> use my_first_db
switched to db my_first_db
> db.createCollections("students")
2024-28-01T15:02:28.958-0700 E  QUERY    [js] uncaught exception: TypeError: db.createCollections is not a function :
@(shell):1:1
> db.createCollection("students")
{ "ok" : 1 }
> db.students.insert({name: "tommy", home_state: "California", lucky_number: 1, birthday: {month: 10, day: 2, year: 1993}})
WriteResult({ "nInserted" : 1 })
> nth: 10, day: 2, year: 1993}})
2024-28-01T15:05:25.220-0700 E  QUERY    [js] uncaught exception: SyntaxError: unexpected token: ':' :
@(shell):1:12
> WriteResult({ "nInserted" : 1 })
2024-28-01T15:05:25.231-0700 E  QUERY    [js] uncaught exception: TypeError: bulkResult.upserted is undefined :
WriteResult@src/mongo/shell/bulk_api.js:117:1
WriteResult@src/mongo/shell/bulk_api.js:108:20
@(shell):1:1
> > db.students.insert({name: "tommy", home_state: "California", lucky_number: 1, birthday: {month: 10, day: 2, year: 199
...
...
>
> db.students.insert({name: "James", home_state: "California", lucky_number: 2, birthday: {month: 10, day: 3, year: 1993}})
WriteResult({ "nInserted" : 1 })
> db.students.insert({name: "timmy", home_state: "Washington", lucky_number: 3, birthday: {month: 11, day: 3, year: 1993}})
WriteResult({ "nInserted" : 1 })
> db.students.insert({name: "Billy", home_state: "Washington", lucky_number: 11, birthday: {month: 11, day: 3, year: 1993}})
WriteResult({ "nInserted" : 1 })
> db.students.insert({name: "Willy", home_state: "California", lucky_number: 55, birthday: {month: 11, day: 3, year: 1993}})
WriteResult({ "nInserted" : 1 })
> db.students.find()
{ "_id" : ObjectId("5e680f082ce8f9ffa4195c81"), "name" : "tommy", "home_state" : "California", "lucky_number" : 1, "birthday" : { "month" : 10, "day" : 2, "year" : 1993 } }
{ "_id" : ObjectId("5e680f332ce8f9ffa4195c82"), "name" : "James", "home_state" : "California", "lucky_number" : 2, "birthday" : { "month" : 10, "day" : 3, "year" : 1993 } }
{ "_id" : ObjectId("5e680f422ce8f9ffa4195c83"), "name" : "timmy", "home_state" : "Washington", "lucky_number" : 3, "birthday" : { "month" : 11, "day" : 3, "year" : 1993 } }
{ "_id" : ObjectId("5e680f4e2ce8f9ffa4195c84"), "name" : "Billy", "home_state" : "Washington", "lucky_number" : 11, "birthday" : { "month" : 11, "day" : 3, "year" : 1993 } }
{ "_id" : ObjectId("5e680f5d2ce8f9ffa4195c85"), "name" : "Willy", "home_state" : "California", "lucky_number" : 55, "birthday" : { "month" : 11, "day" : 3, "year" : 1993 } }
> db.students.find().pretty
function() {
    this._prettyShell = true;
    return this;
}
> db.students.find({lucky_number: $gt 3).pretty
...
...
> db.students.find($gt 3
...
...
> db.students.find({lucky_number: {$gt: 3}}).pretty)
2024-28-01T16:44:18.010-0700 E  QUERY    [js] uncaught exception: SyntaxError: unexpected token: ')' :
@(shell):1:49
> db.students.find({lucky_number: {$gt: 3}}).pretty
function() {
    this._prettyShell = true;
    return this;
}
> db.students.find({lucky_number: {$gt: 3}}).pretty()
{
	"_id" : ObjectId("5e680f4e2ce8f9ffa4195c84"),
	"name" : "Billy",
	"home_state" : "Washington",
	"lucky_number" : 11,
	"birthday" : {
		"month" : 11,
		"day" : 3,
		"year" : 1993
	}
}
{
	"_id" : ObjectId("5e680f5d2ce8f9ffa4195c85"),
	"name" : "Willy",
	"home_state" : "California",
	"lucky_number" : 55,
	"birthday" : {
		"month" : 11,
		"day" : 3,
		"year" : 1993
	}
}
> db.students.find({lucky_number: {$lte: 10}}).pretty()
{
	"_id" : ObjectId("5e680f082ce8f9ffa4195c81"),
	"name" : "tommy",
	"home_state" : "California",
	"lucky_number" : 1,
	"birthday" : {
		"month" : 10,
		"day" : 2,
		"year" : 1993
	}
}
{
	"_id" : ObjectId("5e680f332ce8f9ffa4195c82"),
	"name" : "James",
	"home_state" : "California",
	"lucky_number" : 2,
	"birthday" : {
		"month" : 10,
		"day" : 3,
		"year" : 1993
	}
}
{
	"_id" : ObjectId("5e680f422ce8f9ffa4195c83"),
	"name" : "timmy",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 11,
		"day" : 3,
		"year" : 1993
	}
}
> db.students.find({lucky_number: {$gte: 1, $lte: 10}}).pretty()
{
	"_id" : ObjectId("5e680f082ce8f9ffa4195c81"),
	"name" : "tommy",
	"home_state" : "California",
	"lucky_number" : 1,
	"birthday" : {
		"month" : 10,
		"day" : 2,
		"year" : 1993
	}
}
{
	"_id" : ObjectId("5e680f332ce8f9ffa4195c82"),
	"name" : "James",
	"home_state" : "California",
	"lucky_number" : 2,
	"birthday" : {
		"month" : 10,
		"day" : 3,
		"year" : 1993
	}
}
{
	"_id" : ObjectId("5e680f422ce8f9ffa4195c83"),
	"name" : "timmy",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 11,
		"day" : 3,
		"year" : 1993
	}
}
> db.students.update({},{$set: {"interests":['coding', 'brunch', 'MongoDB']}},{multi:true})
WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 5 })
> db.students.find({$and:[{lucky_number:{$lte:9}}, {lucky_number:{$gte:1}}]})
{ "_id" : ObjectId("5e680f082ce8f9ffa4195c81"), "name" : "tommy", "home_state" : "California", "lucky_number" : 1, "birthday" : { "month" : 10, "day" : 2, "year" : 1993 }, "interests" : [ "coding", "brunch", "MongoDB" ] }
{ "_id" : ObjectId("5e680f332ce8f9ffa4195c82"), "name" : "James", "home_state" : "California", "lucky_number" : 2, "birthday" : { "month" : 10, "day" : 3, "year" : 1993 }, "interests" : [ "coding", "brunch", "MongoDB" ] }
{ "_id" : ObjectId("5e680f422ce8f9ffa4195c83"), "name" : "timmy", "home_state" : "Washington", "lucky_number" : 3, "birthday" : { "month" : 11, "day" : 3, "year" : 1993 }, "interests" : [ "coding", "brunch", "MongoDB" ] }
> db.students.update({name: "tommy"},{$push: {interests:$each:['googling', 'eating']}}})
2024-28-01T22:00:50.297-0700 E  QUERY    [js] uncaught exception: SyntaxError: missing } after property list :
@(shell):1:59
> db.students.update({name: "Tommy"},{$push: {interests:{$each:['judo', 'archery']}}})
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
> db.students.update({name: "James"},{$push: {interests:{$each:['bows', 'archery']}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name: "timmy"},{$push: {interests:{$each:['cows', 'archery']}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name: "billy"},{$push: {interests:{$each:['arms', 'archery']}}})
WriteResult({ "nMatched" : 0, "nUpserted" : 0, "nModified" : 0 })
> db.students.update({name: "Billy"},{$push: {interests:{$each:['arms', 'archery']}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name: "Willy"},{$push: {interests:{$each:['arms', 'archery']}}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name: "tommy"},{$push: { interests: "taxes}})
2024-28-01T22:03:50.723-0700 E  QUERY    [js] uncaught exception: SyntaxError: "" literal not terminated before end of script :
@(shell):1:65
> db.students.update({name: "tommy"},{$push: { interests: "taxes"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({name: "tommy"},{$pull: { interests: "taxes"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> ddb.students.remove({$or: [{home_state:"California"}
...
...
> db.students.remove({$or: [{home_state:"California"}
...
...
>
>
>
>
>
> db.students.remove( [{home_state:"California"}
...
...
>
>
>
>
>
>
>
>
>
>
>  db.students.remove( {home_state:"California"})
WriteResult({ "nRemoved" : 3 })
> db.students.remove({name:"tommy"})
WriteResult({ "nRemoved" : 0 })
> db.students.remove({name:"Billy"})
WriteResult({ "nRemoved" : 1 })
> db.students.remove({lucky_number: {$gt:5}}, {justOne:true})
WriteResult({ "nRemoved" : 0 })
> db.students.update({},{$set: {"number_of_belts":0}},{multi:true})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({home_state: "Washington"},{$inc: {number_of_belts: 1}},{multi:true})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({}, {$rename: {"number_of_belts":"belts_earned"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({}, {$unset:{lucky_number:""}},{multi:true})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.students.update({}, {$currentDate:{updated_on:true}},{multi:true})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
>