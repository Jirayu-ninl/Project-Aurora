/* eslint-disable @typescript-eslint/no-explicit-any */
class MongoQuery {
  DB: any
  constructor(collection: any) {
    this.DB = collection
  }
  find = (query: any, populate: any) => {
    let result = this.DB.findOne(query)
    if (populate) result = result.populate(populate)
    return result
  }

  findManyAndPopulate = (
    query: any,
    populate: any,
    skip: number,
    limit: number,
  ) => {
    if (!skip) skip = 0
    if (!limit) limit = 1000

    let result = this.DB.find(query)
      .limit(limit)
      .skip(skip * limit)

    if (populate) result = result.populate(populate)
    return result
  }

  create = (data: any) => {
    const collection = new this.DB(data)

    return collection.save()
  }

  update = (collection: any, data: { name: any }) => {
    const { name } = data
    const current = collection

    if (name) current.name = name

    return collection.save()
  }

  deleteObj = (collection: { deleteOne: () => any }) => collection.deleteOne()

  wrap = (collection: { _id: any; name: any; user: any } | null) => {
    if (collection === null) return {}
    const { _id, name, user } = collection
    return { _id, name, user }
  }
}

export default MongoQuery
