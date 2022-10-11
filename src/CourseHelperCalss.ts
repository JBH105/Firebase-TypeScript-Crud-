import { db } from "./firbaseConfig";

import {collection,getDoc,getDocs,addDoc,updateDoc,deleteDoc,doc } from 'firebase/firestore'

export interface Icourse{
    name:String,
    students:number,
    type:String
}
export interface IcourseDoc extends Icourse{
    id:String;
}
const courseStr = 'crud'
const courseCollectionRef = collection(db,courseStr)
class CourseHelperCalss{


    // Find All Data
 getCourses = async ()=>{
    const {docs}=  await getDocs(courseCollectionRef)
        return docs.map(doc=>{
            return { ...doc.data(), id: doc.id } as IcourseDoc ;
        })
    }
    // Add new Data
 addCourses = async (course:Icourse)=>{
      return  addDoc(courseCollectionRef,course)
    }

    // Update Data 
 updateCourse =async (id:String,course:Icourse)=>{
        const courseDoc = doc(db,courseStr,id)
        return updateDoc(courseDoc,course as any)
      }
      
    //   Delete Data
 deletCourse  =async (id:String)=>{
        const courseDoc = doc(db,courseStr,id)
        return deleteDoc(courseDoc)
      }

    //   find by ID
 getCourse  =async (id:String)=>{
        const courseDoc = doc(db,courseStr,id)
        const fetchDoc = await getDoc(courseDoc)
        return {...fetchDoc.data(), id : fetchDoc.id} as IcourseDoc
    }
}

export default new CourseHelperCalss();