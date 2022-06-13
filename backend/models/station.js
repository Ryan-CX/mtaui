import mongoose from 'mongoose';

const stationSchema = new mongoose.Schema({
	basicInfo: {
		mrNumber: {
			type: String,
			required: true,
		},
		line: {
			type: String,
			required: true,
		},
		stationName: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			enum: ['underground', 'elevated'],
			required: true,
		},
		platformLayout: {
			type: String,
		},
		commContracts: {
			type: String,
		},
		mechanicalContracts: {
			type: String,
		},
		stationContracts: {
			type: String,
		},
		otherContracts: {
			type: String,
		},
	},
});

export default mongoose.model('stationSchema', stationSchema);
