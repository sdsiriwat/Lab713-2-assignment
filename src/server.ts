// @ts-ignore
import express from 'express'
import type { Request, Response } from 'express'

const app = express()
const port = 3000


interface Event {
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string;
    petsAllowed: boolean;
    organizer: string;
}

const events: Event[] = [
    {
        id: 1,
        category: "Music",
        title: "Concert",
        description: "A live concert",
        location: "London",
        date: "2021-07-01",
        time: "19:00",
        petsAllowed: false,
        organizer: "Live Nation",
    },
    {
        id: 2,
        category: "Music",
        title: "Festival",
        description: "A music festival",
        location: "Manchester",
        date: "2021-07-15",
        time: "12:00",
        petsAllowed: true,
        organizer: "Festival Republic"
      },
    {
        id: 3,
        category: "Sports",
        title: "Football Match",
        description: "A football match",
        location: "Liverpool",
        date: "2021-08-01",
        time: "15:00",
        petsAllowed: false,
        organizer: "Premier League"
      },
    {
        id: 4,
        category: "Music",
        title: "Jazz Night",
        description: "An evening of smooth jazz",
        location: "New Orleans",
        date: "2021-09-10",
        time: "19:00",
        petsAllowed: true,
        organizer: "Jazz Fest"
  },
  {
    id: 5,
       category: "Theatre",
       title: "Shakespeare in the Park",
       description: "A performance of Hamlet",
        location: "Central Park",
        date: "2021-10-05",
        time: "18:00",
        petsAllowed: false,
        organizer: "NYC Theatre Group"
  },
  {
    id: 6,
        category: "Food",
        title: "Food Truck Festival",
        description: "A variety of food trucks offering delicious meals",
        location: "San Francisco",
        date: "2021-11-20",
        time: "12:00",
        petsAllowed: true,
        organizer: "Foodie Events"
  }
]

interface Book {
    id: number;
    title: string;
    author_name: string;
    description: string;
    groups: string;
}

let books: Book[] = [
    {
        id: 1,
        title: "Introduction to TypeScript",
        author_name: "John Doe",
        description: "Basic TS programming",
        groups: "Programming"
    },
    {
        id: 2,
        title: "Advanced Backend",
        author_name: "Jane Smith",
        description: "NodeJS and Express",
        groups: "Programming"
    },
    {
        id: 3,
        title: "Harry Potter",
        author_name: "J.K. Rowling",
        description: "Magic world",
        groups: "Novel"
    },
    {
        id: 4,
        title: "Clean Code",
        author_name: "Robert C. Martin",
        description: "A handbook of agile software craftsmanship",
        groups: "Programming"
    },
    {
        id: 5,
        title: "The Silent Patient",
        author_name: "Alex Michaelides",
        description: "A psychological thriller about a woman who stops speaking after a violent act",
        groups: "Thriller"
    },
    {
        id: 6,
        title: "Salt, Fat, Acid, Heat",
        author_name: "Samin Nosrat",
        description: "Mastering the elements of good cooking",
        groups: "Cooking"
    }
];

app.get("/books", (req, res) => {
    const keyword = req.query.keyword as string;

    if (keyword) {
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().startsWith(keyword.toLowerCase())
        );
        res.json(filteredBooks);
    } else {
        res.json(books);
    }
});


app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});


app.get("/events", (req, res) => {
    if (req.query.category) {
        const category = req.query.category;
        const filteredEvents = events.filter((event) => event.category === category);
        res.json(filteredEvents);
    } else {
        res.json(events);
    }
});


app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find((event) => event.id === id);
    if (event) {
        res.json(event);
    } else {
        res.status(404).send("Event not found");
    }
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
