// TODO change variables
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    // one query
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                return userData;
            } else {
                throw new AuthenticationError('Error. You must be logged in.')
            }
        },
        // need mutations for add user, login, save book, remove book
        Mutation: {
            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email });

                if (!user) {
                    throw new AuthenticationError('Error, incorrect email or password.')
                }
                const token = signToken(user);
                return { token, user };
            },

            addUser: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user);
                return { token, user };
            },

            saveBook: async (parent, { bookData }, context) => {
                if (context.user) {
                    const updatedBooks = await User.findByIdAndUpdate({ _id: context.user._id }, { $push: { savedBooks: bookData } }, { new: true });
                    return updatedBooks;
                } else {
                    throw new AuthenticationError('Please log in to save a book to your profile.');
                }
            },
            // can I use find and remove? 
            removeBook: async (parent, args, context) => {
                if (context.user) {
                    const updatedBooks = await User.findOneAndUpdate({ _id: context.user._id }, { $pull: { savedBooks: { bookId: args.bookId } } }, { new: true });
                    console.log(bookToRemove);
                    return updatedBooks;
                } else {
                    throw new AuthenticationError('Unable to remove book.');
                }
            }
        }
    }
}
// console.log('howdy');

// module.exports = resolvers;
module.exports = resolvers;