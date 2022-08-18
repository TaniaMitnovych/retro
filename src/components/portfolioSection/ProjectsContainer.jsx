import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import projects from '../../projects.json';
import './ProjectsContainer.css';
import _ from 'lodash';
import FiltersSection from './FiltersSection';
import compareDesc from 'date-fns/compareDesc';
const ProjectsContainer = () => {
  const defaultAmountOfVisibleProjects = 6;
  const [technologies, setTechnologies] = useState([]);
  const [amountOfVisibleProjects, setAmountOfVisibleProjects] = useState(defaultAmountOfVisibleProjects);
  const [filters, setFilters] = useState([]);
  const [filteredPtoj, setFilteredProj] = useState([
    ... (projects.filter(proj => {
      let intersection = _.intersection(filters, proj.technologies);
      return _.isEqual(filters, intersection);
    }))
  ]);
  const [shownAllProj, setShown] = useState(false);
  const [buttonText, setButtonText] = useState('Browse all');
  useEffect(() => {
    projects.map((proj) => {
      setTechnologies(prev => [...(new Set([...prev, ..._.difference(proj.technologies, technologies)]))]);
    })
  }, [])
  useEffect(() => {
    setFilteredProj(filterProjects());
    showProjects();
  }, [filters])
  useEffect(() => {
    if (shownAllProj) {
      setFilters([]);
      setCheckedState(new Array(technologies.length).fill(true));
      setButtonText("Hide projects");
    } else {
      setCheckedState(new Array(technologies.length).fill(false));
      setButtonText("Browse all");
    }
  }, [shownAllProj])

  const filterProjects = () => {
    if (filters.length === 0) {
      projects.sort((project1, project2) => {
        let dat1 = new Date(project1.date),
          dat2 = new Date(project2.date);
        if (dat1 > dat2)
          return -1;
        else if (dat1 < dat2)
          return 1;
        else return 0;
      })

      return [...projects]
    } else {
      return [...(projects.filter(proj => {
        let intersection = _.intersection(filters, proj.technologies);
        return _.isEqual(filters, intersection);
      }))]
    }
  }
  const handleFilterClick = (event) => {
    if (filters.includes(event.target.value)) {
      setFilters(prev => {
        _.remove(prev, (filter) => { return filter === event.target.value });
        return [...prev];
      });
      event.target.checked = false;
    } else {
      setFilters(prev => [...prev, event.target.value]);
      event.target.checked = true;
    }
    setFilteredProj(filterProjects());
  }

  const showProjects = () => {
    let amountOfProjectsToShow = amountOfVisibleProjects;
    if (filteredPtoj.length < amountOfVisibleProjects &&
      filteredPtoj.length > 0) {
      amountOfProjectsToShow = filteredPtoj.length;
    }
    else if(filteredPtoj.length > amountOfVisibleProjects &&
      shownAllProj){
      amountOfProjectsToShow=filteredPtoj.length;
    }
    if (filteredPtoj.length === 0) {
      return <p>Nothing was found</p>
    } else {
      return _.times(amountOfProjectsToShow, (i) => {
        return (
          <ProjectCard key={filteredPtoj[i].name}
            image={filteredPtoj[i].image_url}
            name={filteredPtoj[i].name}
            date={filteredPtoj[i].date}
            technologies={filteredPtoj[i].technologies.join(', ')}
            cost={filteredPtoj[i].cost}
          />)
      })
    }
  }
  const [checkedState, setCheckedState] = useState(
    new Array(technologies.length).fill(false)
  );
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  }
  return (
    <div className='projects-container'>
      <FiltersSection>
        {
          technologies.map((technology, i) => {
            return (
              <li className='filters-section__technology-item' key={technology}>
                <input
                  type='checkbox'
                  id={technology}
                  name="technology"
                  value={technology}
                  onChange={(event) => {handleFilterClick(event); handleOnChange(i)}}
                  checked={checkedState[i]}
                />
                <label htmlFor={technology}>{technology}</label>
              </li>
            )
          })
        }
      </FiltersSection>
      {
        showProjects()
      }
      <hr />
      <button type='button' onClick={() => { setShown(prev => { return prev ? false : true }) }}>{buttonText}</button>
    </div>
  );
};

export default ProjectsContainer;