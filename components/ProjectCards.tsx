'use client'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface ProjectCardsProps {
    image: string,
    ImgTitle: string,
    name: string,
    description: string,
    onView: () => any,
    onVisit: () => any
}

const ProjectCards = ({image , ImgTitle, name, description, onView, onVisit}: ProjectCardsProps) => {
    return (
        <Card sx={{ maxWidth: 345 }} className='h-[400px]'>
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
                <Button onClick={onView} size="small">View Projects</Button>
                <Button onClick={onVisit} size="small">Visit Code</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCards
