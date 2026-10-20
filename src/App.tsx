import { useEffect, useState } from "react"

import { projects } from "./data/projects"

import { useRoute } from "./hooks/useRoute"

import { useReveal } from "./hooks/useReveal"

import { Header } from "./components/SiteChrome"

import { About } from "./pages/About"

import { BajikaCaseStudy } from "./pages/BajikaCaseStudy"

import { Contact } from "./pages/Contact"

import { Home } from "./pages/Home"

import { ProjectDetail } from "./pages/ProjectDetail"

import { Work, type WorkFilter } from "./pages/Work"

export default function App() {
  const { path, navigate } = useRoute()

  const [workFilter, setWorkFilter] = useState<WorkFilter>("All")

  useReveal(path)

  const project = path.startsWith("/project/")
    ? projects.find((item) => item.slug === path.split("/")[2])
    : undefined

  useEffect(() => {
    document.title = project
      ? `${project.title} — M. Fathan Tsaqib`
      : "Muhammad Fathan Tsaqib — UI/UX Designer"
  }, [project])

  let page = <Home navigate={navigate} />

  if (path === "/work") {
    page = (
      <Work navigate={navigate} filter={workFilter} setFilter={setWorkFilter} />
    )
  }

  if (path === "/about") page = <About navigate={navigate} />

  if (path === "/contact") page = <Contact />

  if (project) {
    page =
      project.slug === "bajika-wedding" ? (
        <BajikaCaseStudy project={project} navigate={navigate} />
      ) : (
        <ProjectDetail project={project} navigate={navigate} />
      )
  }

  return (
    <>
      <Header path={path} navigate={navigate} />
      <div className="page-enter" key={path}>
        {page}
      </div>
    </>
  )
}
