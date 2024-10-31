'use client'

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Moon, Sun, Underline } from "lucide-react"

export default function Home() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="container max-w-3xl px-4 py-8">
        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 right-4"
          onClick={toggleTheme}
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-32 w-32">
                <AvatarImage alt="Profile picture" src="/snoopy.png" />
                <AvatarFallback>DG</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h1 className="text-3xl font-bold">David Gómez</h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Engineering Student | Backend Enthusiast
                </p>
                <p className="mt-4">
                  Hi! I'm David, an Information Systems Engineering student currently in my second year. I'm passionate about back-end development, networks, and cloud computing, always eager to understand how apps and technology work behind the scenes. Problem-solving and creativity are part of my everyday grind.

                  Outside the tech world, I enjoy sports, which play an important role in my life. I also have a strong love for music and enjoy reading about all kinds of fascinating topics.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/gomezdavid" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/david-alejandro-gomez-ferreira-a72b9b1a8/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              {/* <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button> */}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Here you'll find stuff i write</CardTitle>
            <CardDescription>thoughts, ideas and more</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="text-center">
                <Link href="/posts/microservices" className="text-lg font-semibold hover:underline">
                  Microservices in a nutshell
                </Link>

                {/* <p className="text-sm text-gray-500 dark:text-gray-400">Published on May 15, 2023</p> */}
                {/* <p className="mt-2">
                  Want to know how Microservices work? check this post and find out...
                </p> */}
              </li>
              {/* <li className="text-center">
                <h3 className="text-lg font-semibold">The Power of CSS Grid</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published on April 22, 2023</p>
                <p className="mt-2">
                  Learn how to create complex layouts with ease using CSS Grid...
                </p>
              </li>
              <li className="text-center">
                <h3 className="text-lg font-semibold">Optimizing Your Website for Performance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Published on March 10, 2023</p>
                <p className="mt-2">
                  Discover techniques to make your website lightning fast...
                </p>
              </li> */}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}