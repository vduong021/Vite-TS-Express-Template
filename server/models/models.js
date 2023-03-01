const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vthanhd:8FBpL74j1dtHP6NO@cluster0.chyhi71.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const dataSchema = new mongoose.Schema({
  note: {type: String, required: true },
  createdAt: { type: Date, default: Date.toString },
});

const Instance = mongoose.model('Instance', dataSchema);

module.exports = Instance;