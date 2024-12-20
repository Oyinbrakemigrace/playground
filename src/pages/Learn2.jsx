import React, { useState } from 'react'
import Button2 from '../components/Button2'

const Learn2 = () => {
  const panels = [
    {
      id: 1,
      language: "HTML",
      details:
        "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      id: 2,
      language: "CSS",
      details:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      id: 3,
      language: "JavaScript",
      details:
        "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];
  const [panelIndex, setPanelIndex] = useState(1)
  return (
    <div>
      <div>
        {panels.map((panel) => {
          return (
            <Button2
              key={panel.id}
              click={() => setPanelIndex(panel.id)}
              isActive={panelIndex === panel.id}
            >
              {panel.language}
            </Button2>
          )
        })}
      </div>
      <div>
        {panels.find((panel) => panel.id === panelIndex).details}
      </div>
    </div>
  )
}

export default Learn2