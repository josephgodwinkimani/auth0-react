/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Collection from 'bunnynet-stream/lib/Collection'

Route.get('/collection', async () => {
  const collection = new Collection('106699', '480756cb-4895-47ab-ba63569a594a-54b3-4030')
  const collectionList = collection.getCollection('1', '100', null, 'date')
  console.log(collectionList)
  return collectionList
})

Route.get('/single-collection', async () => {
  const collection = new Collection('106699', '480756cb-4895-47ab-ba63569a594a-54b3-4030')
  const singlecollection = collection.getSingleCollection('1b73ba12-8825-40c1-adbf-457174206983')
  console.log(singlecollection)
  return singlecollection
})

Route.get('/create-collection', async () => {
  const collection = new Collection('106699', '480756cb-4895-47ab-ba63569a594a-54b3-4030')
  const createcollection = collection.createCollection('Collection Animals in Savannah')
  console.log(createcollection)
  return createcollection
})
