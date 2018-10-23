// TODO make this mongoose call as a common function call

module.exports = (db, Schema) => {

	const PiciSchema = new Schema({
		// user_id: Number,
		title: String,
		message: String,
		created_at: {type: Date, default: Date.now},
		updated_at: {type: Date, default: Date.now}
	});



	return db.model('Pici', PiciSchema);
}




