const FeedBackData = [
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 2,
    rating: 9,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
  {
    id: 3,
    rating: 8,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
  },
]

export default FeedBackData

// Data is kept in a database on a server
// There is some kind of backend API
// The API has routes that we can access from the client(React) in order to create, read, update and delete data
// Data is brought into our state and used in our react app
// REST API - Representational State Transfer
// GET - Retrieves data from the server
// POST - Submits data to the server
// PUT/PATCH - updates data on the server
// DELETE - Deletes data on the server
// 1XX:Informational - Request received
// 2XX:Success - Successfully received
// 3XX:Redirect - further action must be taken/redirect
// 4XX:Client Error - Request does not have what it needs
// 5XX:Server Error - Server failed to fulfill a valid request
