import React from 'react'

import Breakline from '@/common/components/elements/Breakline'

import ContactForm from './ContactForm'
import ContactList from './ContactList'

export default function Contact() {
  return (
    <>
      <ContactList />
      <Breakline className="my-6" />
      <ContactForm />
    </>
  )
}
