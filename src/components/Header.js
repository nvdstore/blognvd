'use client'

import React, { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog"
import NavBar from "./NavBar"
import { motion } from "framer-motion"

export default function Header() {
  const [email, setEmail] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogMessage, setDialogMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/email", { email })
      if (response.data.success) {
        setDialogMessage("Subscription successful!")
      } else {
        setDialogMessage("Error: Subscription failed.")
      }
    } catch (error) {
      setDialogMessage("Seems like you already have a subscription")
    } finally {
      setIsDialogOpen(true)
      setEmail("")
    }
  }

  return (
    <header className="px-2 py-8 relative">
      <NavBar />
      

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogTrigger asChild>
          <Button className="hidden">Open</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-gray-800 text-white">
          <AlertDialogTitle>Notification</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300">{dialogMessage}</AlertDialogDescription>
          <div className="flex justify-end gap-4 mt-4">
            <AlertDialogCancel onClick={() => setIsDialogOpen(false)} className="bg-gray-700 text-white hover:bg-gray-600">
              Close
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  )
}
