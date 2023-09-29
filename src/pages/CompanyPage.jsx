import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'

function CompanyPage({ companies }) {
  const { companySlug } = useParams()
  console.log({ companySlug })

  // console.log(companies)

  return (
    <div>
      <h1>Company Profile</h1>
      {companies
        ?.filter(company => company.slug === companySlug)
        .map(company => (
          <Fragment key={company.id}>
            <h2>{company.name}</h2>
            <h4>{company.website}</h4>
            <p>{company.description}</p>
            <img src={company.logo} style={{ height: '100px' }} />
            <ul>
              {company.techStack.map(tech => (
                <li key={tech.slug}>
                  <Link to={`/tech/${tech.slug}?from=${company.slug}`}>
                    <img src={tech.image} style={{ height: '50px' }} />
                    <p>{tech.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
    </div>
  )
}

export default CompanyPage
