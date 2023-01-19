import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  console.log('testing');
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
