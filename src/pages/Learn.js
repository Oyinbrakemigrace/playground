import React, { useState } from "react";
import Button from "../components/Button";

function Learn() {
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
  const [panelIndex, setPanelIndex] = useState(1);

  return (
    <div className="p-10">
      <div className="space-x-5">
        {panels.map((panel) => {
          return (
            <Button
              key={panel.id}
              click={() => setPanelIndex(panel.id)}
              isActive={panelIndex === panel.id}
            >
              {panel.language}
            </Button>
          );
        })}
      </div>
      <div className="mt-5">
        {panels.find((panel) => panel.id === panelIndex).details}
      </div>
    </div>
  );
}

export default Learn;
