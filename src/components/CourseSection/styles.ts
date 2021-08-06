import styled from 'styled-components'

interface CourseSectionContainerProps {
  borderColor: string
}

export const CourseSectionContainer = styled.div<CourseSectionContainerProps>`
  border-radius: 4px;
  border-left: 4px ${props => props.borderColor} solid;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    transition: all ease-in-out 300ms;
  }

  &:hover {
    cursor: pointer;
    svg {
      transform: translateX(5px)
    }
    > div {
      span:first-child {
        opacity: 1 !important;
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    margin: 2px 15px;
    flex: 1;
    span:first-child {
      transition: all ease-in-out 300ms;
      font-size: 1.1.rem;
      font-weight: 800;
      opacity: 0.6;
      margin-bottom: 4px;
    }
    span:last-child {
      font-size: 0.9rem;
      opacity: 0.5;
    }
  }

  margin: 20px 0px;
` 