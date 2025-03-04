import React, { useEffect, useState } from 'react'
import './GalleryView.css'

let imageURL = `http://localhost:4000`
const GalleryView = () => {

    const [ imagePath, setImagePath ] = useState([]);
    const [ imageUploaded, setImageUploaded ] = useState(true);
    const [ uploadfile, setUploadFile ] = useState();
    
    useEffect( () => {
        const FetchData = async() => {

            try {
                const fetchData = await fetch(`${imageURL}/gallery`, {
                    method: "GET"
                })

                const data = await fetchData.json();
                setImagePath(data.map((item) => item.split('\\')));    
            }
            catch(e) {  
                console.log(e);    
            }
        }
        FetchData()

    }, [imageUploaded]);

    const uploadImageFile = async(e) => {
        e.preventDefault()
        try {
          const formData = new FormData()
          formData.append('images', uploadfile)
           const data = await fetch('http://localhost:4000/upload-img', {
            method : "POST",
            body : formData
           })
           const res = await data.json();
           if(data.ok) {
  
              setImageUploaded(data);
           }
           console.log(res)
        }
        catch(e) {
          console.log(e)
        }
    }
  return (
    <div>
        <header>
        <h1>Matheswaran | Gallery</h1>
        <nav>   
            <div>                
                <form action="" onSubmit = {uploadImageFile}>
                    <input type="file" name='images' alt="" onChange={(e) => setUploadFile(e.target.files[0])} />
                    <button style={{ 
                        all : 'unset', 
                        padding : '10px 20px', 
                        backgroundColor : 'black', 
                        color : 'white' }}
                        > Submit
                    </button>
                </form>
            </div>
        </nav>
    </header>

    <section className="card-images">
        { imagePath.map((item,index) =>  
            <div className="card">            
                <img src={`${imageURL}/${item[0]}/${item[1]}`}  key={index} alt="images" />
                <h2> {`${imageURL}/${item[0]}/${item[1]}`} </h2>
            </div>
        )}
    </section>

    <section className="about">
        <h3>Designing, making, and selling goods of timeless design and uncompromising
            integrity—made thoughtfully, honestly, and with pride—to be enjoyed with similar intention.</h3>
        <h3 className="work">Let's work together.</h3>
        <div className="contact">
            <p>matheswaran20.mw@gmail.com</p>
            <p>+91 90803 55312</p>
        </div>
    </section>
    </div>
  )
}

export default GalleryView