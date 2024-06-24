import React from 'react'
import MainLayout from "../components/layout/MainLayout";
import Whyus from '../components/Home2/Whyus';
import Process from '../components/Home2/Process';
import Training from '../components/Home2/Training';

export default function WhyUs() {
    return (
        <MainLayout>
            <Whyus />
            <br />
            <br />
            <br />
            <Training />
        </MainLayout>
    )
}
