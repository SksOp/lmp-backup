import AuthLayout from '@/layout/auth'
import WelcomeView from '@/sections/welcome'
import React from 'react'

function page() {
  return (
    <AuthLayout>
        <WelcomeView />
    </AuthLayout>
  )
}

export default page
