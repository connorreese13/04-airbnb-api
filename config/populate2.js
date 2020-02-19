require('dotenv').config()
const database = require('../database')
const Amenities = require('../models/amenities')
const Houses = require('../models/houses')
const Reviews = require('../models/reviews')
const Types = require('../models/types')
const Users = require('../models/users')
Houses.collection
	.drop()
	.then(houses => {
		Houses.create(require('./v2/houses.json')).then(houses => {
			console.log('Houses Added')
			Amenities.create(require('./v2/amenities.json'))
				.then(amenities => {
					console.log('Amenities Added')
					Reviews.create(require('./v2/reviews.json'))
						.then(reviews => {
							console.log('Reviews Added')
							Types.create(require('./v2/types.json'))
								.then(types => {
									console.log('Types Added')
									Users.create(require('./v2/users.json'))
										.then(users => {
											console.log('Users Added')
											process.exit()
										})
										.catch(err => {
											console.log({ err })
											process.exit()
										})
								})
								.catch(err => {
									console.log({ err })
									process.exit()
								})
						})
						.catch(err => {
							console.log({ err })
							process.exit()
						})
				})
				.catch(err => {
					console.log({ err })
					process.exit()
				})
		})
	})
	.catch(err => {
		console.log({ err })
		process.exit()
	})
