'use client'
import Image from 'next/image'
import { FileCode } from 'phosphor-react'
import { Container, Title } from '#/themes/styles'
import cardSkills from './skills'
import { SkillsContainer, SkillsContent } from './styles'

interface Skills {
  title: string
  color?: string
  img?: string
  id: number
}

export function Skills() {
  return (
    <Container id="skills">
      <Title>
        Habilidades
        <span>
          <FileCode /> Skills
        </span>
      </Title>
      <SkillsContainer>
        {cardSkills.map((skill) => {
          return (
            <SkillsContent color={skill.color} key={skill.id}>
              <Image
                width={60}
                height={60}
                src={skill.img}
                alt={skill.title}
                priority
              />
              <h4>{skill.title}</h4>
              <span className="border"></span>
            </SkillsContent>
          )
        })}
      </SkillsContainer>
    </Container>
  )
}
