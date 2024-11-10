import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Root() {
  const [country, setCountry] = useState('gb');
  const [query, setQuery] = useState('example');

  const handleUpdate = ({ country: newCountry, query: newQuery }) => {
    if (newCountry !== undefined) setCountry(newCountry);
    if (newQuery !== undefined) setQuery(newQuery);
  };

  return (
    <>
      <Header onUpdate={handleUpdate} />
      <Outlet context={{ country, query }} />
      <Footer />
    </>
  );
}
