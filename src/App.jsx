import './App.css';
import { useState } from 'react';
import CardComponent from './Components/Card/Card';
import InputComponent from './Components/Input/Input';
import CardList from './Components/Card/CardList';
// import Card from './Components/Card/Card';


function App() {
// =================  INPUTS================
  const [title, setTitle] = useState("");
  
  const [description, setDescription] = useState("")
  
  const [imgUrl, setImgUrl] = useState("");

// ===============  CARD ========================
  const [cardList, setCardList] = useState([]);


// ===============  VALIDAÇÔES ========================

const [isTitleValid, setIsTitleValid] = useState(true);

const [isDescriptionValid, setIsDescriptionValid] = useState(true);


  const [isImgValid, setIsImgValid] = useState(true);


// ================ TITLE =================
  const handleChangeTitle = (event) => {
    const title =event.target.value;
    setTitle(title)
    if(title.trim().length <= 3 ){
      setIsTitleValid(false)
    }else{
      setIsTitleValid(true)
    }
  }

// ================ DESCRIPTION =================

  const handleChangeDescription = (event) => {
    const title =event.target.value;
    setDescription(title)
    if(title.trim().length <= 6 ){
      setIsDescriptionValid(false)
    }else{
      setIsDescriptionValid(true)
    }
  }

// ================ imagem =================


const handleChangeImgUrl = (event) => {
  const imageUrl = event.target.value;
  setImgUrl(imageUrl);

  const imageUrlPattern = /\.(jpeg|jpg|gif|png|bmp|svg)\w{0,}$/i;

  if (imageUrlPattern.test(imageUrl)) {
    setIsImgValid(true);
  } else {
    setIsImgValid(false);
  }
}



  const handleButtonClick = (event) => {
    event.preventDefault();
    if (isTitleValid && isImgValid && isDescriptionValid) {
      setCardList([
        ...cardList,
        {
          title: title,
          description: description,
          imgUrl: imgUrl,
        },
      ]);
      setTitle("");
      setImgUrl("");
      setDescription("");
    }
    
  };
  


  return (
    <>
      <h1>Cards Generetor - React</h1>

      <form>

        <InputComponent
          title="Titulo"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}
          
        />
       {!isTitleValid && (
        <p style={{ color: 'red' }}>Por favor, insira um título válido.</p>
      )}
        <InputComponent
          title="Descrição"
          type='text'
          value={description}
          fnOnChange={handleChangeDescription}
          
        />
       {!isDescriptionValid && (
        <p style={{ color: 'red' }}>Por favor, insira um título válido.</p>
      )}

        <InputComponent
          title="Img URL"  
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
        
        />
         {!isImgValid && (
        <p style={{ color: 'red' }}>Por favor, insira um link de imagem válido.</p>
      )}
      


        <button 
        disabled= {imgUrl === " "  && title=== " " && description === " "}
        onClick={handleButtonClick} >Salvar</button>

      </form>
      <CardList>
        {cardList.map(
          infoCard => {
            return (
              <CardComponent
              key={infoCard.title}
              title={infoCard.title.toUpperCase()}
              description={infoCard.description}
              imgUrl={infoCard.imgUrl}
          
            />
      
            )
          }
        )
      
        }
     
      </CardList>
   

    </>
  )
}

export default App