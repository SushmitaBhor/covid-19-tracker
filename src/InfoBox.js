import { Card,CardContent,Typography } from '@material-ui/core'
import React from 'react'

function InfoBox({title,cases,total}) {
  return (
    <Card>
        <CardContent>
            {/* Title i.e. Coronavirus cases*/}
            <Typography className="infoBox__title" color='textSecondary'>{title}</Typography>
            {/* +120k Number of cases */}
            <h2 className='infoBox__cases'>{cases}</h2>
            {/* 1.2M Total */}
            <Typography color='infoBox_title'>{total} Total</Typography>
       
        </CardContent>
    </Card>
  )
}

export default InfoBox