import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Button, Card } from 'flowbite-react'

const Secret = () => {
    const { logout } = useAuth()
    const handleLogout = () => {
        logout()
    }
    return (
        <div className='flex justify-center     '>
            <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Button outline gradientDuoTone="pinkToOrange" onClick={handleLogout}>Logout</Button>
            </Card>
        </div>
    )
}

export default Secret
