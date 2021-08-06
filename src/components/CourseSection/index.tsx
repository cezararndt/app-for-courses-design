import React from 'react'
import { CourseSectionContainer } from './styles'
import { BsChevronRight } from "react-icons/bs";

interface CourseSectionProps {
  color: string;
  title: string;
  lessons: number;
  months: number;
}


const CourseSection: React.FC<CourseSectionProps> = ({ color, title, lessons, months }) => {
  return (
    <CourseSectionContainer borderColor={color}>
      <div>
        <span>{ title }</span>
        <span>{ lessons } lessons in {months} months</span>
      </div>

      <BsChevronRight size={24} style={{ opacity: 0.5 }}/>

    </CourseSectionContainer>
  )
}

export default CourseSection
