import './projects.css'
import tasktracker from '../images/tasktracker.png'
import notesapp from '../images/notesapp.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Projects = () => {   
    
    const data = [
        {
            image: 'tasktracker',
            title: 'Task Tracker',
            description: 'A simple task tracker app built using ReactJS.',
            Url: 'https://lighthall-level2-sf8i.vercel.app/'
        },
        {
            image: 'notesapp',
            title: 'Notes App',
            description: 'A simple notes app built using ReactJS.',
            Url: 'https://notesapp-eight.vercel.app/'
        },    
    ]
    
    return (
        <div id='project' className='projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                {data.map((item) => (
                    <Card sx={{ maxWidth: 445 }} className='project-card'>
                        <CardMedia
                            component="img"
                            height="340"
                            image={item.image === 'tasktracker' ? tasktracker : notesapp}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" href={item.Url} target=' '>View Website</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Projects;