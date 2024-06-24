import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import OurProcess from '../components/Home2/Process'
import ClientOnBoarding from '../components/Home2/ClientOnBoarding'
import UseOfTech from '../components/Home2/UseOfTech'

export default function Process() {
  return (
    <MainLayout>
        <OurProcess />
        <ClientOnBoarding />
        <UseOfTech />
    </MainLayout>
  )
}
