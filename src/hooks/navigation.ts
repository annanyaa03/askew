import { useState, useEffect } from 'react'

// Global navigation helper that pushes state, updates active path, and handles scrolling
export function navigate(to: string) {
  window.history.pushState(null, '', to)
  // Dispatch popstate event so all routers receive the update
  window.dispatchEvent(new PopStateEvent('popstate'))
  // Smooth scroll to top on new page load
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
}

export function useRouter() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return {
    path,
    navigate,
  }
}
