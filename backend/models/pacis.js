import mongoose from 'mongoose';

const pacisSchema = new mongoose.Schema({
	project: {
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		dependencies: {
			pslan: {
				type: String,
				notes: String,
			},
			ups: {
				type: String,
				notes: String,
			},
			hvac: {
				type: String,
				notes: String,
			},
		},
	},
	pacis: {
		station: {
			type: String,
			required: true,
		},
		zone: {
			type: Number,
			required: true,
		},
		speakers: {
			model: {
				type: String,
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
		},
		cis: {
			model: {
				type: String,
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
			connection: {
				type: String,
				required: true,
			},
		},
		tbms: {
			enum: ['yes', 'no'],
		},
		ldms: {
			enum: ['yes', 'no'],
		},
		wirelessMic: {
			enum: ['yes', 'no'],
		},
		nextTrain: {
			enum: ['yes', 'no'],
		},
		annunciator: {
			enum: ['yes', 'no'],
		},
	},
});

module.exports = mongoose.model('pacisSchema', pacisSchema);
