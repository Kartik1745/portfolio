import './projects.css'
import tasktracker from '../images/tasktracker.png'
import notesapp from '../images/notesapp.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import github from '../images/github.png'
import pageview from '../images/page-views.png'

const Projects = () => {   
    
    const data = [
        {
            image: 'tasktracker',
            title: 'Task Tracker',
            description: 'The app allows users to save, delete and edit tasks with ease.It features a user-friendly interface and intuitive navigation, making it easy to stay organized and on top of your to-do list.',
            Url: 'https://lighthall-team60-tasks.vercel.app/',
            Git: 'https://github.com/Kartik1745/Lighthall-level2'
        },
        {
            image: 'notesapp',
            title: 'Notes App',
            description: 'The app allows users to easily save and delete notes. With its intuitive interface and seamless functionality, it’s the perfect tool for keeping track of important information',
            Url: 'https://notesapp-eight.vercel.app/',
            Git: 'https://github.com/Kartik1745/Notes-app'
        },    
    ]
    
    return (
        <div id='project' className='projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                {data.map((item) => (
                    <Card sx={{ maxWidth: 445, borderRadius: 5, backgroundColor:'#495159' }} className='project-card'>
                        <CardMedia
                            component="img"
                            height="340"
                            image={item.image === 'tasktracker' ? tasktracker : notesapp}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography sx={{color: 'white'}} gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <Typography sx={{color: 'white'}} variant="body2">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions >
                            <Button sx={{background: 'white'}} size="small" href={item.Url} target=' '><img style={{maxHeight:32}} src={pageview} alt='github' className='github' /></Button>
                            <Button sx={{background: 'white'}} size="small" href={item.Git} target=' '><img style={{maxHeight:32}} src={github} alt='github' className='github' /></Button>
                        </CardActions>
                    </Card>
                ))}
                <a id='git' href='https://github.com/Kartik1745' target=' '>More Projects</a>
            </div>
        </div>
    );
}

export default Projects;