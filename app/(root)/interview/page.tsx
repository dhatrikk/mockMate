import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/action/auth.action'
import { redirect } from 'next/navigation';
import React from 'react'

const InterviewPage = async () => {
    const user = await getCurrentUser();
    if (!user) {
      redirect('/sign-in'); 
    }
  return (
    <>
    <h3> Interview Generation </h3>
    <Agent userName={user?.name} userId={user?.id} type="generate"/>
    </>
    )
}

export default InterviewPage