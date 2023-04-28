import React from 'react'
import { CardSection } from './styled'
import Card from 'react-bootstrap/Card';
const LatestPressConferenceComp = ({item}) => {
  return (
    <CardSection>
    <Card>
    <Card.Img variant="top" src={item.img}/>
    <Card.Body>
        <div className='status'>
        <p>{item.staus}</p>
        </div>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text audiotext>
    {item.text}
      </Card.Text>
      <div className='audio-info'>
      {/* <span>{item.episode}</span> */}
      <span>{item.time}</span>
      </div>
    </Card.Body>
  </Card>
 </CardSection>
  )
}

export default LatestPressConferenceComp