'use client'
import React from 'react'
import ProjectCards from '../../components/ProjectCards'
import { useRouter } from 'next/navigation'
import { solidityProjectCards } from '../constants/item'

const page = () => {
    const router = useRouter()
    return (
        <div className='flex gap-3 justify-center py-12 flex-wrap cursor-default'>
            {solidityProjectCards.map((item: any) => (
                <ProjectCards name={item.name} ImgTitle={item.ImgTitle} description={item.description} image={item.image} onVisit={() => router.push(item.onVisit)} onView={() => router.push(item.onView)} />
            ))}
        </div>
    )
}

export default page
