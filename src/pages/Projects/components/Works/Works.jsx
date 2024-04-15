
import { projectsData, projectsNav } from '@/data/Data';
import { useEffect, useState } from 'react';
import { WorkItems } from '../WorkItems';

const Works = ({ }) => {

	const [item, setItem] = useState(projectsNav[0])
	const [projects, setProjects] = useState(projectsData)
	const [active, setactive] = useState(0)

	useEffect(() => {
	
		if (active === 0) {
			setProjects(projectsData)
		}
		else{
			const newProjects = projectsData.filter((project) =>{
				return project.category.toLowerCase() === item.name;
			});
			setProjects(newProjects)
		}
	}, [active, item])

	const handleClick = (index) => {
		setactive(index)
		setItem(projectsNav[index])
	}

	return (
		<>
			<div className='projects__filters'>
				{
					projectsNav.map((item, index) => {
						return <span onClick={(e) => {handleClick(index)}} className={`projects__item ${index === active ? 'active' : ''}`} key={index}>{item.name}</span>
					})
				}
			</div>

			<div className="projects__container container grid">
				{
					projects.map((item) => {
						return <WorkItems item={item} key={item.id}/>
					})
				}
			</div>
		</>
	);
};

Works.propTypes = {};

export default Works;