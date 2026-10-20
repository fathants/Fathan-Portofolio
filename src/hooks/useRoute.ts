import { useEffect, useState } from "react"

export function useRoute() {
  const getPath = () => window.location.pathname || "/"

  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onPopState = () => setPath(getPath())

    window.addEventListener("popstate", onPopState)

    return () => window.removeEventListener("popstate", onPopState)
  }, [])

  const navigate = (nextPath: string) => {
    if (nextPath !== path) {
      window.history.pushState({}, "", nextPath)

      setPath(nextPath)
    }

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return { path, navigate }
}
