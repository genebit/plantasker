import { useEffect, useState } from "react"
import { getTasksFromLocalStorage, setUid } from "../utils"
import playAudio from "../utils/playAudio"
import { clickSFX, trashSFX } from "@/lib/constants"

export const useTodo = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const refreshTasks = () => {
    const tasksFromLocalStorage: Task[] = getTasksFromLocalStorage()

    // Sort tasks by id in descending order
    const sortedTasks = tasksFromLocalStorage.sort((a, b) => b.id - a.id)

    setTasks(sortedTasks)
  }

  const getTasks = () => {
    useEffect(() => {
      refreshTasks()
    }, [])
  }

  const findTask = (taskId: number) => {
    // Retrieve tasks from local storage
    const rawTask = localStorage.getItem(taskId.toString())

    // If there are no tasks in local storage, return null or handle accordingly
    if (!rawTask) return null

    // Parse the stored tasks from JSON
    const task = JSON.parse(rawTask)

    return task || null
  }

  const addTask = (text: string) => {
    const newTask: Task = {
      id: setUid(),
      description: text,
      done: false,
    }

    // 2. store task to storage as a json string
    localStorage.setItem(newTask.id.toString(), JSON.stringify(newTask))

    setTasks([newTask, ...tasks])

    playAudio(clickSFX)
  }

  const deleteTask = (taskId: number) => {
    // 1. remove the task from localstorage
    localStorage.removeItem(taskId.toString())

    // 3. update the state with the new tasks
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))

    playAudio(trashSFX)
  }

  const updateTask = (task: Task) => {
    localStorage.setItem(task.id.toString(), JSON.stringify(task))
  }

  const clearTasks = () => {
    localStorage.clear()
    location.reload()
  }

  const tickTask = (taskId: number) => {
    const task = findTask(taskId)
    task.done = !task.done

    localStorage.setItem(taskId.toString(), JSON.stringify(task))

    refreshTasks()

    playAudio(clickSFX)
  }

  return {
    tasks,
    getTasks,
    addTask,
    updateTask,
    tickTask,
    deleteTask,
    clearTasks,
  }
}
