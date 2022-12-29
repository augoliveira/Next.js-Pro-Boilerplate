'use client'
import Link from 'next/link'
import Image from 'next/image'
import projects from './projects'
import { ProjectsContainer, ProjectsContent } from './styles'
import { Container, Title } from '../../../themes/styles'
import { AllProjects } from './Github'
import { Briefcase } from 'phosphor-react'

interface Projects {
  slug: string
  url: string
  title: string
  type: string
  img: string
  description: string
  tags?: [name: string, icon: string]
}

export function Projects() {
  return (
    <Container id="projects">
      <Title>
        Projetos
        <span>
          <Briefcase /> Projects
        </span>
      </Title>
      <ProjectsContainer>
        {projects.map((project) => {
          return (
            <Link href={`/project/${project.url}`} key={project.id}>
              <ProjectsContent>
                <Image
                  src={project.img}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
                <div className="title">
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>
                </div>
              </ProjectsContent>
            </Link>
          )
        })}
      </ProjectsContainer>
      <AllProjects />
    </Container>
  )
}
