import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Button } from '../Elements/ButtonE'
import './Dropdown.scss'
import { Link, useNavigate } from 'react-router-dom'
import { get } from '../../utils/api'

const WebAppDrop = ({ id }: WebAppDropProps): JSX.Element => {
  const navigate = useNavigate()

  const deleteProject = async (id: number) => {
    await get(`/webapps/${id}/delete`).then((res) => {
      console.log(res)
      navigate('/quick-start')
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost">⋮</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dropdown-list">
        <Link to={`/projects/${id}`}>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </Link>
        <div
          // @ts-ignore
          onClick={async () => {
            await deleteProject(id)
            return 0
          }}
        >
          <DropdownMenuItem>delete</DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Download</DropdownMenuItem>
        <DropdownMenuItem>Share</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface WebAppDropProps {
  id: number
}

export default WebAppDrop
