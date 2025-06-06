import conf from '../conf/conf'
import {Client, ID, Databases, Storage, Query} from "appwrite"

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
        }

        async createPost({title, slug, content, featuredImage, status, userId}){
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseid,
                    conf.appwriteCollectionid, slug,{
                        title,
                        content,
                        featuredImage,
                        status,
                        userId,
                    }
                )
            } catch (error) {
                console.log("Appwrite service :: createPost :: error" , error)
            }
        }

         async updatePost(slug, {title, content, featuredImage, status}){
            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseid,
                    conf.appwriteCollectionid, slug,{
                        title,
                        content,
                        featuredImage,
                        status,
                    }
                )
            } catch (error) {
                console.log("Appwrite service :: updatePost :: error" , error)
            }
        }

        async deletePost(slug){
            try {
                 await this.databases.deleteDocument(
                    conf.appwriteDatabaseid,
                    conf.appwriteCollectionid, 
                    slug
                )
                return true
            } catch (error) {
                console.log("Appwrite service :: updatePost :: error" , error)
                return false 
            }
        }

        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseid,
                    conf.appwriteCollectionid,
                    slug
                )
            } catch (error) {
                console.log("appwrite error" , error )
                return false
            }
        }

        async getPosts(queries = [Query.equal("status", "active")]){
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseid,
                    conf.appwriteCollectionid,
                    queries,
                    
                )
            } catch (error) {
                console.log("appwrite error" , error )
                return false
            }
        }

        //file upload service 
        async uploadFile(file){
            try {
                return await this.bucket.createFile(
                    conf.appwriteBucketid,
                    ID.unique(),
                    file
                )
            } catch (error) {
                console.log("Appwrite service :: uploadfile :: error", error)
                return false;
            }
        }

        async deleteFile(fileId){
            try {
                await this.bucket.deleteFile(
                    conf.appwriteBucketid,
                    fileId
                )
                return true
            } catch (error) {
                console.log("Appwrite service :: deleteFile :: error" , error);
                return false 
            }
        }

        getFilepreview(fileId){
            return this.bucket.getFilePreview(
                conf.appwriteBucketid,
                fileId
            )
        }
}

const service = new Service()
export default service