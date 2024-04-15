
import './Projects.css';
import { Works } from './components';

const Projects = ({}) => {

	

	return (
		<section className='projects section'>
 			<h2 className='section__title'>Projects</h2>
			<span className='section__subtitle'>Most recent projects</span>
			<Works/>
 		</section>
	);
};

Projects.propTypes = {};

export default Projects;