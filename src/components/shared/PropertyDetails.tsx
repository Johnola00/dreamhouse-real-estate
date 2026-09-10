import './PropertyDetails.css'

type PropertyDetail = {
  label: string
  value: string
}

type PropertyDetailsProps = {
  details: PropertyDetail[]
}

function PropertyDetails({ details }: PropertyDetailsProps) {
  return (
    <dl className="property-details">
      {details.map(({ label, value }) => (
        <div className="property-details__row" key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default PropertyDetails