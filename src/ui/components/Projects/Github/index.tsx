'use client'
import Link from 'next/link'
import Image from 'next/image'
import { FiGithub } from 'react-icons/fi'
import { AllContainer, AllContent, Cubo } from './styles'
import Html from '../../../../../public/skills/html.svg'
import React from '../../../../../public/skills/react.svg'
import javascript from '../../../../../public/skills/javascript.svg'
import Typescript from '../../../../../public/skills/typescript.svg'
import Css from '../../../../../public/skills/css.svg'
import NextJs from '../../../../../public/skills/next-js.svg'

export function AllProjects() {
  return (
    <>
      <AllContainer>
        <h4>Todos os projetos</h4>
        <AllContent>
          <Link
            href={'https://github.com/EvanderInacio?tab=repositories'}
            target="_blank"
          >
            <button>
              Repositório <FiGithub />
            </button>
          </Link>

          <Cubo>
            <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <Image
                    src={Html}
                    alt="Html"
                    priority
                    width={192}
                    height={192}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
                <div className="face2">
                  <Image
                    src={React}
                    alt="React JS"
                    priority
                    width={192}
                    height={192}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
                <div className="face3">
                  <Image
                    src={javascript}
                    alt="JavaScript"
                    priority
                    width={192}
                    height={192}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
                <div className="face4">
                  <Image
                    src={Typescript}
                    alt="TypeScript"
                    priority
                    width={192}
                    height={192}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
                <div className="face5">
                  <Image
                    src={Css}
                    alt="Css"
                    priority
                    width={192}
                    height={192}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
                <div className="face6">
                  <Image
                    src={NextJs}
                    alt="Next JS"
                    priority
                    width={192}
                    height={192}
                    style={{
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  />
                </div>
              </div>
            </div>
          </Cubo>
        </AllContent>
      </AllContainer>
    </>
  )
}
