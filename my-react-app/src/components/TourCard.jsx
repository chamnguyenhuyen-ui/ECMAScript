import Button from './Button'
import Heading from './Heading'
export default function TourCard(props) {
    // const { title, image } = props // destructing object
  return (
    <div>
        <Heading />
      <img src={props.image} width={500} alt="" height={300} />
      <h2 className="text-3xl font-bold text-orange-300">{props.title}</h2>
      <div className="flex justify-around" >
        <Button label="Xem them" />
      <Button label="Dat tour" />
      <Button />   
      </div>
      
    </div>
  )
}