import { useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()
  const handleOnclick = () => {
    navigate("/")
  }
  return (
    <div className='container'>
      <div className='not-found-page'>
        <img src='src/assets/images/marshmallow.png' />
        <div className='not-found-page-content'>
          <div>
          <h1> Oops... Something went wrong </h1>
          <h3> Your recipe is sleeping </h3>
          </div>
          <p> Looks like this page wandered out of the kitchen. The recipe you're looking for doesn't exist - or maybe our little marshmallow ate it. </p>
          <button className='add-recipe-button' onClick={handleOnclick}> See all recipes </button>
        </div>
      </div>
    </div>

  )
}

export default NotFoundPage