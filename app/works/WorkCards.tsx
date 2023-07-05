'use client'

import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface WorkCardsProps {
    image: string,
    ImgTitle: string,
    name: string,
    description: string,
    onClick: () => any,
}

const WorkCards = ({ image, ImgTitle, name, description, onClick }: WorkCardsProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                title={ImgTitle}
                height="140"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onClick} size="small">View Project</Button>
                <Button onClick={onClick} size="small">Visit Code</Button>
            </CardActions>
        </Card>
    )
}

export default WorkCards
