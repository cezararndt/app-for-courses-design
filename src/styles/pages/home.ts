import styled from 'styled-components'

const Main = styled.main`
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr;
  height: calc(100vh - 40px);
  max-width: calc(1110px + 250px);
  margin: 20px auto;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  background: #fff;
  padding: 40px;

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: calc(370px * 3);

    > div {
      &:nth-child(2) {
        border-right: solid 1px #f0f0f0;
      }

      max-width: 370px;
      margin: 5px;
      border-radius: ${props => props.theme.borderRadius};
    }
  }
`

const MyCourses = styled.div`
  background: #edf0f5;
  display: flex;
  flex-direction: column;

  > div {
    align-self: center;
    margin-top: 55px !important;
  }

  > form {
    margin-top: 35px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;

    p {
      font-size: 0.9rem;
      margin: 10px 0;
      opacity: 0.5;
      width: 75%;
      line-height: 20px;
    }

    > h3 {
      margin-top: 35px;
    }

    button {
      background: ${props => props.theme.colors.primary};
      margin: 50px 0 35px;
      align-self: center;
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      padding: 12px 50px;
      border: 0;
      border-radius: ${props => props.theme.borderRadius};
    }
  }
`

const InputField = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: ${props => props.theme.input.borderRadius};
  padding: 7px 15px;

  & ~ div {
    margin-top: 10px;
  }

  &:first-of-type {
    margin-top: 32px;
  }

  input {
    border: 0;
    height: 35px;
    font-size: 1.1rem;
    outline: none;
  }

  label {
    margin-top: 6px;
    font-size: 0.9rem;
    opacity: 0.6;
  }
`

const CodeInput = styled.div`
  display: flex;
  width: 75%;

  input {
    border: 2px solid transparent;
    border-radius: ${props => props.theme.input.borderRadius};
    min-width: 0;
    height: 50px;
    outline: none;
    text-align: center;
    caret-color: ${props => props.theme.input.focus};
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.5);

    & ~ input {
      margin-left: 15px;
    }

    &:focus {
      border-color: ${props => props.theme.input.focus};
    }
  }
`

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 50px;

  ul {
    list-style: none;

    li {
      & ~ li {
        margin-top: 20px;
      }
      a {
        text-decoration: none;
        color: #505457;
        transition: all 200ms ease-in-out;
        &:hover {
          color: #4db276;
        }
      }
    }
  }
`

export { Main, Navigation, MyCourses, InputField, CodeInput }
