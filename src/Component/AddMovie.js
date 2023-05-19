import { useState } from 'react';
import ReactModal from 'react-modal';
const AddMovie = ({add}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState('');
    console.log(img);
    const [name, setName] = useState('');
    console.log(name);
    const [date, setDate] = useState('');
    console.log(date);
    const [rating, setRating] = useState('');
    console.log(rating);
    const [type, setType] = useState('');
    console.log(type);
    const [season, setSeason] = useState('');
    console.log(season);
    const [desc, setDesc] = useState('');
    console.log(desc);
    const handleSubmit = (event) => {
        event.preventDefault();
       const newmovie={id:Math.random(),img,name,date,rating,type,season,desc} 
       add(newmovie)
       closeModal()
      };
    const OpenModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    return(
        
<div>
<button onClick={OpenModal}>Add</button>
    <ReactModal  isOpen={modalIsOpen}>
       <form > 
       name <input id="name" name ="name" type="text" placeholder='name' onChange={(event) => setName(event.target.value)} value={name}/>
       <br />
       image <input id="image" name="image" type="text" placeholder='image' onChange={(event) => setImg(event.target.value)} value={img}/>
       <br />
       date <input id="date" name="date" type="text" placeholder='date' onChange={(event) => setDate(event.target.value)} value={date}/>
       <br />
       rating <input id="rating" name="rating" type="text" placeholder='rating' onChange={(event) => setRating(event.target.value)} value={rating}/>
       <br />
       type <input id="type" name="type" type="text" placeholder='type' onChange={(event) => setType(event.target.value)} value={type}/>
       <br />
       seasons <input id="season" name="season" type="text" placeholder='season' onChange={(event) => setSeason(event.target.value)} value={season}/>
       <br />
       description <input id="desc" name="desc" type="text" placeholder='description' onChange={(event) => setDesc(event.target.value)} value={desc}/>
       <br />
       <button  onClick={handleSubmit}>Submit</button>
       </form>
       <button onClick={closeModal}>Close</button>
    </ReactModal>
    </div>
    )
}
export default AddMovie