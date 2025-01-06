import mongoose from 'mongoose'
const Schema = mongoose.Schema

const exampleSchema = new Schema({

})


const Example = mongoose.model('Example', exampleSchema);

export default Example