import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { sampleBooks} from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {

  const res= await db.select().from(users)
  console.log(JSON.stringify(res, null, 2));

 return(
  <>
    <BookOverview
      {...{
        ...sampleBooks[0],
        total_copies: sampleBooks[0].totalCopies,
        available_copies: sampleBooks[0].availableCopies,
        color: sampleBooks[0].coverColor,
        cover: sampleBooks[0].coverUrl,
        video: sampleBooks[0].videoUrl
      }}
    />
    <BookList
      title="Latest Books"
      books={sampleBooks.map(book => ({
        ...book,
        total_copies: book.totalCopies,
        available_copies: book.availableCopies,
        color: book.coverColor,
        cover: book.coverUrl,
        video: book.videoUrl
      }))}
      containerClassName="mt-28"
    />
  </>
);
}

export default Home;
