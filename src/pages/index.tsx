import React from 'react'
import Head from 'next/head'
import {
  Main,
  Navigation,
  MyCourses,
  Course,
  InputField,
  CodeInput,
  ImageContainer,
  Class,
  ClassIcon,
  ClassIconContainer,
  ClassStudentsContainer
} from '../styles/pages/home'
import Image from 'next/image'
import logo from '../assets/logo.png'
import avatarImage from '../assets/avatar.jpg'
import notebook from '../assets/notebook.png'
import mac from '../assets/mac.png'
import materials from '../assets/materials.png'
import Avatar from '../components/Avatar'
import CourseSection from '../components/CourseSection'
import { FaCalendar } from 'react-icons/fa'
import { IoNavigate } from 'react-icons/io5'
import { BsCameraVideoFill } from 'react-icons/bs'

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
                <a href="#">My teste</a>
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
            <ImageContainer>
              <Image src={notebook} width={200} height={161} />
            </ImageContainer>

            <form style={{ marginTop: 35 }}>
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
          <Course>
            <ImageContainer>
              <Image src={mac} width={200} height={161} />
            </ImageContainer>
            <div style={{ marginTop: 35 }}>
              <h2>Web Design</h2>
              <p>
                If you want to learn to draw then our courses will definitely
                answer your questions and will teach you draw.
              </p>

              <CourseSection
                color={'#f5ce74'}
                title={'Beginner'}
                lessons={24}
                months={2}
              />

              <CourseSection
                color={'#6bc999'}
                title={'Amateur'}
                lessons={18}
                months={2}
              />

              <CourseSection
                color={'#70b7ec'}
                title={'Middle'}
                lessons={12}
                months={1}
              />

              <CourseSection
                color={'#ea3e1b'}
                title={'Professional'}
                lessons={8}
                months={1}
              />
            </div>
          </Course>
          <Class>
            <div style={{ marginTop: 15 }}>
              <h2 style={{ marginBottom: 20 }}>Lesson N°6</h2>

              <ClassIconContainer>
                <ClassIcon outerColor={'#D0E6FA'} iconColor={'#40A0E8'}>
                  <FaCalendar size={18} />
                </ClassIcon>
                <div>
                  <span>April 3, 2021</span>
                  <span>10:00-11:30</span>
                </div>
              </ClassIconContainer>

              <ClassIconContainer>
                <ClassIcon outerColor={'#FDF0D0'} iconColor={'#F3BE44'}>
                  <IoNavigate size={24} />
                </ClassIcon>
                <div>
                  <span>Location</span>
                  <span
                    style={{ color: '#577bb7', opacity: 1, cursor: 'pointer' }}
                  >
                    googlemeet/?call=Lesson
                  </span>
                </div>
              </ClassIconContainer>

              <ClassIconContainer>
                <ClassIcon outerColor={'#CEEEDF'} iconColor={'#3BBB77'}>
                  <BsCameraVideoFill size={24} />
                </ClassIcon>
                <div>
                  <span>Accept video</span>
                  <span>Everyone</span>
                </div>
              </ClassIconContainer>

              <ClassStudentsContainer style={{ marginTop: 35 }}>
                {new Array(5)
                  .fill('https://thispersondoesnotexist.com/image')
                  .map((img, key) => (
                    <Avatar image={`${img}`} key={key} size={'small'} />
                  ))}
              </ClassStudentsContainer>

              <h3>Materials to study</h3>

              <ImageContainer style={{ marginTop: 30 }}>
                <Image src={materials} width={300} height={150} />
              </ImageContainer>
            </div>
          </Class>
        </section>
      </Main>
    </div>
  )
}

export default Home
