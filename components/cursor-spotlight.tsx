"use client"

import { useEffect, useState, useCallback } from "react"

export function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    document.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    // Hide spotlight initially
    setIsVisible(false)

    return () => {
      document.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [updateMousePosition, handleMouseLeave, handleMouseEnter])

  return (
    <div
      className={`cursor-spotlight ${!isVisible ? "hidden" : ""}`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      aria-hidden="true"
    />
  )
}
