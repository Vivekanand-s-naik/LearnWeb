import { Client, Databases, ID, Permission, Role, Storage } from "appwrite";
import envConfig from "../config/envConfig";
class DataBaseService {
    client;
    databases;
    storage;

    constructor() {
        this.client = new Client()
            .setEndpoint(envConfig.appwrite_endpoint)
            .setProject(envConfig.appwrite_projectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }
    //Store Image In Bucket
    async dumpImage(file) {
        try {
            const res = await this.storage.createFile({
                bucketId: envConfig.appwrite_bucketId,
                fileId: ID.unique(),
                file: file,
                permissions: [Permission.read(Role.any())]
            });
            console.log("Dump Success : ", res);
            return res;
        } catch (error) {
            console.error(error.message);
        }

    }

    //Get File View 
    async getImageView(fileId) {
        try {
            const result = this.storage.getFileView({
                bucketId: envConfig.appwrite_bucketId,
                fileId: fileId,
            });
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    //Delete File 
    async deleteImage(fileId) {
        try {
            const result = await this.storage.deleteFile({
                bucketId: envConfig.appwrite_bucketId,
                fileId: fileId
            });

            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    //Create Post In DataBase
    async createPost({
        postImage,
        postImageId,
        postTitle,
        postUserId,
        postContent,
        availability
    }) {
        try {
            return await this.databases.createDocument({
                databaseId: envConfig.appwrite_databaseId,
                collectionId: envConfig.appwrite_collectionId,
                documentId: postTitle,
                data: {
                    postImage,
                    postImageId,
                    postTitle,
                    postUserId,
                    postContent,
                    availability
                },
                permissions: [Permission.read(Role.any())]
            });
        }
        catch (error) {
            console.log(error)
            throw error
        }
    }

    //Get Post 
    async getPost(postId) {
        try {
            const result = await this.databases.getDocument({
                databaseId: envConfig.appwrite_databaseId,
                collectionId: envConfig.appwrite_collectionId,
                documentId: postId,
            });

            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //Get All Posts
    async getAllPosts() {
        console.log("Called GetALlPosts...");
        try {
            const result = await this.databases.listDocuments({
                databaseId: envConfig.appwrite_databaseId,
                collectionId: envConfig.appwrite_collectionId,
            });

            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //Update Post
    async updatePost({
        postId,
        postImage,
        postImageId,
        postTitle,
        postUserId,
        postContent,
        availability
    }) {
        try {

            const result = await this.databases.updateDocument({
                databaseId: envConfig.appwrite_databaseId,
                collectionId: envConfig.appwrite_collectionId,
                documentId: postId,
                data: {
                    postImage,
                    postImageId,
                    postTitle,
                    postUserId,
                    postContent,
                    availability
                },
            });

            console.log(result);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    //Delete Post 
    async deletePost(postId) {
        try {
            const result = await this.databases.deleteDocument({
                databaseId: envConfig.appwrite_databaseId,
                collectionId: envConfig.appwrite_collectionId,
                documentId: postId
            });

            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
const databaseService = new DataBaseService();
export default databaseService;