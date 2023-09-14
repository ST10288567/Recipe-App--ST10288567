/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [title, setTitle] = useState(''); // Comment: This state variable stores the title of the book.
  const [author, setAuthor] = useState(''); // Comment: This state variable stores the author of the book.
  const [genre, setGenre] = useState(''); // Comment: This state variable stores the genre of the book.
  const [pages, setPages] = useState(0); // Comment: This state variable stores the number of pages in the book.
  const [lastBook, setLastBook] = useState(null); // Comment: This state variable stores the details of the last book read.
  const [totalPages, setTotalPages] = useState(0); // Comment: This state variable stores the total number of pages read.
  const [averagePages, setAveragePages] = useState(0); // Comment: This state variable stores the average number of pages per book.
  const [history, setHistory] = useState([]); // Comment: This state variable stores the history of books read.
  const [genreStats, setGenreStats] = useState({}); // Comment: This state variable stores the statistics of book genres.

  const handleAddBook = () => {
    const book= {
      title,
      author,
      genre,
      pages
    };

    setLastBook(book); // Comment: Updates the lastBook state variable with the details of the newly added book.
    setTotalPages(totalPages + pages); // Comment: Updates the totalPages state variable by adding the number of pages in the newly added book.
    setAveragePages((totalPages + pages) / (history.length + 1)); // Comment: Updates the averagePages state variable by calculating the average number of pages per book.

    if (history.length >= 3) {
      setHistory([...history.slice(1), book]); // Comment: If the history array has more than or equal to 3 books, removes the first book and adds the new book to the end of the array.
    } else {
      setHistory([...history, book]); // Comment: If the history array has less than 3 books, adds the new book to the end of the array.
    }

    if (genreStats[genre]) {
      setGenreStats({
        ...genreStats,
        [genre]: genreStats[genre] + 1 // Comment: If the genre already exists in the genreStats object, increments the count of that genre by 1.
      });
    } else {
      setGenreStats({
        ...genreStats,
        [genre]: 1 // Comment: If the genre does not exist in the genreStats object, adds the genre to the object with a count of 1.
      });
    }

    setTitle(''); // Comment: Resets the title state variable to an empty string.
    setAuthor(''); // Comment: Resets the author state variable to an empty string.
    setGenre(''); // Comment: Resets the genre state variable to an empty string.
    setPages(0); // Comment: Resets the pages state variable to 0.
  };

  return (
    <View>
      <Text>Last Book Read:</Text>
      {lastBook && (
    
      )}

      <Text>Total Pages Read: {totalPages}</Text>
      <Text>Average Pages per Book: {averagePages}</Text>

      <Text>History:</Text>
      {history.map((book, index) => (
        <View key={index}>
          <Text>Title: {book.title}</Text>
          <Text>Author: {book.author}</Text>
          <Text>Genre: {book.genre}</Text>
          <Text>Pages: {book.pages}</Text>
        </View>
      ))}

      <Text>Genre Stats:</Text>
      {Object.entries(genreStats).map(([genre, count]) => (
        <Text key={genre}>{genre}: {count}</Text>
      ))}

      <Text>Enter Book Details:</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
   
export default App;