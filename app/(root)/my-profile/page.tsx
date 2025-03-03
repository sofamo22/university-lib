import { signOut } from '@/auth';
import BookList from '@/components/BookList';
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/constants';
import React from 'react'

const Page = () => {
  return (
    <>
    <form action={async () => {'use server';
    await signOut()}
    }>
        <Button>Log Out</Button>
    </form>

    <BookList title='Borrowed Books' books={sampleBooks}/>
    </>
  )
}

export default Page