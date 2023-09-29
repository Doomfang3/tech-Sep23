import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

function TechnologyPage({ technologies }) {
  const { slug } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  console.log(searchParams.get('from'))

  const currentTech = technologies.filter(tech => tech.slug === slug)[0]

  const handleClick = () => {
    navigate(`/company/${searchParams.get('from')}`)
  }

  return (
    <div>
      <button type='button' onClick={handleClick}>
        Go back
      </button>
      <h1>Technology Details</h1>
      <h2>{currentTech.name}</h2>
      <img src={currentTech.image} style={{ height: '100px' }} />
      <p>{currentTech.description}</p>
    </div>
  )
}

export default TechnologyPage
