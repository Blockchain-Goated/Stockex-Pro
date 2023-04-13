import mongoose, { Document, Model } from "mongoose";
import httpStatus from "http-status-ts";
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  updatedAt: Date;
  createdAt: Date;
}

/**
 * User Schema
 */
const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
    unique: false,
    lowercase: false,
    trim: true,
  },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
UserSchema.method({});

/**
 * Statics
 */
interface IUserModel extends Model<IUser> {
  /**
   * Get user
   * @param {string} email - The email of user.
   * @returns {Promise<IUser>}
   * @throws {APIError}
   */
  get(email: string): Promise<IUser>;

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<IUser[]>}
   */
  list({ skip, limit }: { skip?: number; limit?: number }): Promise<IUser[]>;
}

UserSchema.statics = {
  /**
   * Get user
   * @param {string} email - The email of user.
   * @returns {Promise<IUser>}
   * @throws {APIError}
   */
  async get(email: string): Promise<IUser> {
    const user = await this.findOne({ email }).select("name email").exec();
    if (user) {
      return user;
    }
    const err = "User id does not exist";
    throw err;
  },

  /**
   * List users in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of users to be skipped.
   * @param {number} limit - Limit number of users to be returned.
   * @returns {Promise<IUser[]>}
   */
  list({ skip = 0, limit = 50 } = {}): Promise<IUser[]> {
    return this.find()
      .select("name email createdAt updatedAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  },
};

/**
 * @typedef User
 */
const UserModel =
  (mongoose.models.User as IUserModel) ||
  mongoose.model<IUser, IUserModel>("User", UserSchema);

export default UserModel;
