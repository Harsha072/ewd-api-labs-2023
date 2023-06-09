import Account from '../entities/accounts.js';
import mongoose from 'mongoose';
import AccountRepository from './Repository.js';

export default class extends AccountRepository {

    constructor() {
        super();
        const accountsSchema = new mongoose.Schema({
          firstName: String,
          lastName: String,
          email: { type: String, unique: true, index: true },
          password: String,
          favourites: [{
            type: {
              type: String,
              enum: ['movies', 'series'] // Specify the allowed types
            },
            movieId: [Number]
          }]
        });
        this.model = mongoose.model('accounts', accountsSchema);
        
      }
    async persist(accountEntity) {
        console.log("created account");
        const {firstName, lastName, email, password} = accountEntity;
        const result = new this.model({firstName, lastName, email, password});
        await result.save();
        accountEntity.id=result.id;
        return accountEntity;
    }

    async merge(accountEntity) {
        const {id, firstName, lastName, email, password, favourites } = accountEntity;
        await this.model.findByIdAndUpdate(id, { firstName, lastName, email, password, favourites });
        console.log({id, firstName, lastName, email, password, favourites });
        return accountEntity;
    }
    async remove(userId) {
        return this.model.findOneAndDelete(userId);
    }

    async get(userId) {
        const result = await this.model.findById(userId);
        const {id, firstName, lastName, email, password, favourites } = result;
        return new Account(id, firstName, lastName, email, password, favourites );
    }

    async getByEmail(userEmail) {
        console.log("the email ",userEmail)
        const result = await this.model.findOne({email: userEmail});
        
        if (result) {
          return new Account(
            result.id,
            result.firstName,
            result.lastName,
            result.email,
            result.password,
            result.favourites
          );
        } else {
            throw new Error("User not found"); ; // or throw an error, or handle the case as needed
        }
      }
 
      
      
      
      
      
      

    async find() {
        const accounts = await this.model.find();
        return accounts.map((result) => {
            return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favourites);
        });
    }
}
