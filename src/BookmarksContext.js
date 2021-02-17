import React from 'react'

const BookmarksContext = React.createContext({
    bookmarks: [],
    addBookmarks: () => {},
    deleteBookmarks: () => {},
})

export default BookmarksContext;
