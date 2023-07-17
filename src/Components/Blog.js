//Blogging App using Hooks
import { useState } from "react";

export default function Blog(){

    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");
    const [formData,setFormData] = useState({title:"",content:""})
    const [blogs, setBlogs] =  useState([]);
 
    function handleSubmit(e){
        e.preventDefault();
        let title = formData.title;
        let content = formData.content;
        setBlogs([{title,content}, ...blogs]);
        setFormData({title:"",content:""});
    }

   function handleDelete(index){
        // console.log(blogs);
        setBlogs(blogs.filter((ele,i)=>{
            return i!==index
        }));
    }

    return(
        <>
        <h1>Write a Blog!</h1>
        <div className="section">

        {/* Form for writing the blog */}
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                onChange = {(e) => setFormData({title: e.target.value,content:formData.content})}
                                value={formData.title}
                        />
                </Row >

                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                onChange = {(e) => setFormData({title:formData.title,content: e.target.value})}
                                value={formData.content}
                        />
                </Row >
         
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((blog,i) => (
            <div className="blog" key={i}>
                <h3>{blog.title}</h3>
                <hr/>
                <p>{blog.content}</p>
                
                <p className="blog-btn" onClick={()=>handleDelete(i)}> <span className="remove" >Delete</span></p>  
            </div>
        ))}
        
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
