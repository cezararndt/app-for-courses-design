import React from 'react'
import Head from 'next/head'
import {
  Main,
  Navigation,
  MyCourses,
  InputField,
  CodeInput
} from '../styles/pages/home'
import Image from 'next/image'
import logo from '../assets/logo.png'
import avatarImage from '../assets/avatar.jpg'
import notebook from '../assets/notebook.png'
import Avatar from '../components/Avatar'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Navigation>
          <div>
            <Image src={logo} width={132} height={25} />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">My Profile</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Calendar</a>
              </li>
              <li>
                <a href="#">Tasks</a>
              </li>
              <li>
                <a href="#">Achievements</a>
              </li>
            </ul>
          </nav>
          <Avatar
            size="small"
            image={avatarImage}
            name="Stive Palmer"
            occupation="student"
          />
        </Navigation>
        <section>
          <MyCourses>
            <Image src={notebook} width={200} height={161} />

            <form>
              <h2>My Courses</h2>

              <p>Write your course name and confirm your password</p>

              <InputField>
                <label>Course Name</label>
                <input
                  type="text"
                  placeholder="Type your course"
                  value="Web design"
                />
              </InputField>

              <InputField>
                <input type="password" placeholder="Password" />
              </InputField>

              <h3>Enter the code</h3>
              <p>Enter the code we sent to your phone to confirm you number</p>

              <CodeInput>
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
                <input type="text" maxLength={1} />
              </CodeInput>

              <button type="submit">Next</button>
            </form>
          </MyCourses>
          <div></div>
          <div></div>
        </section>
      </Main>
    </div>
  )
}

export default Home