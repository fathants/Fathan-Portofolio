import { useState, type CSSProperties } from "react"

import { projects, type Project } from "../data/projects"

import { CaseStudyDevice } from "../components/CaseStudyDevice"

export function ProjectDetail({
  project,

  navigate,
}: {
  project: Project

  navigate: (path: string) => void
}) {
  const [activeImage, setActiveImage] = useState(0)

  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length]

  const moveGallery = (direction: number) => {
    setActiveImage(
      (current) =>
        (current + direction + project.gallery.length) % project.gallery.length,
    )
  }

  return (
    <main>
      <section
        className="case-header"
        style={{ "--accent": project.color } as CSSProperties}
      >
        <button className="back-link" onClick={() => navigate("/work")}>
          ← All projects
        </button>
        <div className="case-heading">
          <div>
            <p className="eyebrow">
              {project.client} · {project.year}
            </p>
            <h1>{project.title}</h1>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section
        className="gallery"
        style={{ "--accent": project.color } as CSSProperties}
      >
        <div className="gallery-stage">
          <CaseStudyDevice
            image={project.gallery[activeImage]}
            title={project.title}
            mobileImage={project.mobileImage}
          />
          <div className="gallery-count">
            {String(activeImage + 1).padStart(2, "0")} /{" "}
            {String(project.gallery.length).padStart(2, "0")}
          </div>
        </div>
        <div className="gallery-controls">
          <button onClick={() => moveGallery(-1)} aria-label="Previous image">
            ← Prev
          </button>
          <div className="gallery-dots">
            {project.gallery.map((image, index) => (
              <button
                key={image}
                className={activeImage === index ? "is-active" : ""}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
          <button onClick={() => moveGallery(1)} aria-label="Next image">
            Next →
          </button>
        </div>
      </section>

      <section className="case-notes">
        {[
          ["01", "Challenge", project.challenge],

          ["02", "Process", project.process],

          ["03", "Outcome", project.outcome],
        ].map(([number, title, text]) => (
          <article key={title} data-reveal>
            <span>{number}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <button
        className="next-project"
        onClick={() => navigate(`/project/${nextProject.slug}`)}
      >
        <span>Next case study</span>
        <strong>{nextProject.title}</strong>
        <span>↗</span>
      </button>
    </main>
  )
}
