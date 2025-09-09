import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "./components/button";
import Header from "./components/header";
import LanguageSelect from "./components/language-select";
import TextContainer from "./components/text-container";
import HistoryComponent from "./components/history";
import { getLanguages } from "./redux/actions/index";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLanguages());
  }, [dispatch]);
  
  return (
    <div className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen text-white grid place-items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <Header />
          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-zinc-700/50">
            <LanguageSelect />
            <TextContainer />
            <Button />
            <footer className="text-center mt-8 text-zinc-500 text-sm">
              <p>Developed by Udemig</p>
            </footer>
          </div>
          <HistoryComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
