import { Link } from "rasengan";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import Image from "@rasenganjs/image";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import FactCheckResults from "./components/FactCheckResults";

const Home = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [factCheckResults, setFactCheckResults] = useState([]);

  const handleSearch = async () => {
    const searchRes = await fetch(
      `http://localhost:3001/api/search?query=${query}`
    ).then((res) => res.json());
    const factCheckRes = await fetch(
      `http://localhost:3001/api/factcheck?query=${query}`
    ).then((res) => res.json());
    setSearchResults(searchRes.items || []);
    setFactCheckResults(factCheckRes.claims || []);
  };
  return (
    <section className="w-full h-full bg-white flex flex-col items-center py-8 px-[20px] md:px-[50px] xl:px-[200px] font-comfortaa">
      <header className="flex justify-end items-center w-full">
        <div className="flex items-center">
          <span>Powered by</span>
          <Link to="https://beta.rasengan.dev" target="_blank">
            <Image src={logo} alt="Rasengan logo" width={120} height={40} />
          </Link>
        </div>
      </header>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">
          Google Search + Fact Check Demo
        </h1>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <div className="flex flex-wrap gap-4 mt-4 rounded-md border border-[#EFEFEF] p-4">
          <div className="flex-1 min-w-[300px] rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-2">Fact Check Results</h2>
            <FactCheckResults results={factCheckResults} />
          </div>
          <div className="flex-1 min-w-[300px] rounded-lg border border-gray-200 p-4 shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-2">Search Results</h2>
            <SearchResults results={searchResults} />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <div className="flex flex-col p-4 rounded-md border-[1px] border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">Learn</h2>
          <p className="mt-2">
            Learn about Rasengan in an interactive course with quizzes!
          </p>
          <a
            href="https://beta.rasengan.dev/learn"
            target="_blank"
            className="mt-4 text-primary font-bold"
          >
            Take the Course
          </a>
        </div>

        <div className="flex flex-col p-4 rounded-md border-[1px] border-[#EFEFEF] max-w-[500px] md:w-[300px] lg:w-[400px]">
          <h2 className="text-xl font-urbanist">Community</h2>
          <p className="mt-2">
            Join an active community of Rasengan users on GitHub.
          </p>
          <a
            href="https://github.com/rasengan-dev/rasenganjs/discussions"
            target="_blank"
            className="mt-4 text-primary font-bold"
          >
            Join Github Discussions
          </a>
        </div>
      </div>
    </section>
  );
};

Home.path = "/";
Home.metadata = {
  title: "Home",
  description: "Home page",
};

export default Home;
