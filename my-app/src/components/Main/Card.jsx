import data from "../../helpers/data"


const Card = (data) => {
  return (
    <div className='cards'>
      <div className="title">
        <h1>{data.title}</h1>
      </div>
      <div className="date">
        <h1>{data.date}</h1>
      </div>

   

      
    </div>
  )
}

export default Card
