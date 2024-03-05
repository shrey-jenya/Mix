import { Card } from 'flowbite-react'
import React from 'react'

const Home = () => {
	return (
		<div className='flex justify-center '>
			<Card className="max-w-sm" imgSrc="https://images.unsplash.com/photo-1621272036047-bb0f76bbc1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8fDA%3D" horizontal>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
				</p>
			</Card>
		</div>
	)
}

export default Home
