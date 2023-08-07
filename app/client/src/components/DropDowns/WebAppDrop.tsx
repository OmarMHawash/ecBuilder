import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { toast } from '../ui/use-toast'
import { Button } from '../Elements/ButtonE'
import { Link, useNavigate } from 'react-router-dom'
import { del } from '../../utils/api'
import { Webapp } from '@/src/types/types'

const WebAppDrop = (item: any): JSX.Element => {
  const navigate = useNavigate()
  const webapp = item.webapp
  const deleteProject = async (item: Webapp) => {
    toast({
      title: `Deleting ${item.name}... 🚀`,
    })
    // console.log(item)
    await del(`/webapps/${item.id}`).then((res) => {
      // console.log(res)
      navigate('/quick-start')
    })
  }
  const downloadProject = async (item: Webapp) => {
    toast({
      title: `Downloading ${item.name}... 🚀`,
    })
    setTimeout(() => {
      window.open(`http://localhost:8000/api/v1/webapps/${item.id}/download`, 'Downloading blank')
    }, 1000)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost">⋮</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-list">
        <Link to={`/project/${webapp.id}`}>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </Link>
        <div
          // @ts-ignore
          onClick={async () => {
            await deleteProject(webapp)
            return 0
          }}
        >
          <DropdownMenuItem>delete</DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <div
          // @ts-ignore
          onClick={async () => {
            await downloadProject(webapp)
            return 0
          }}
        >
          <DropdownMenuItem>Download</DropdownMenuItem>
        </div>
        <DropdownMenuItem>Share</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default WebAppDrop
