import { ArrowRight, Copy, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setText, clearText, addToHistory } from "../redux/slices/translateSlice.js";
import Loader from "./loader.jsx";
import HistoryComponent from "./history.jsx";

const TextContainer = () => {
  const { isLoading, translatedText, textToTranslate } = useSelector(
    (store) => store.translate
  );
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearText());
  };

  const handleCopy = async () => {
    if (translatedText) {
      try {
        await navigator.clipboard.writeText(translatedText);
        // Add to history when copied
        dispatch(addToHistory({
          sourceText: textToTranslate,
          translatedText: translatedText,
          timestamp: new Date().toLocaleTimeString()
        }));
        console.log('Text copied to clipboard');
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <div className="flex gap-4 mt-6 lg:gap-8 flex-col lg:flex-row">
      {/*Source Language*/}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="source" className="text-sm text-zinc-300">
            Text to be translated
          </label>
          <div className="flex items-center gap-2">
            <HistoryComponent />
            <button 
              onClick={handleClear}
              disabled={!textToTranslate}
              className="text-xs text-zinc-400 hover:text-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 px-2 py-1 rounded hover:bg-zinc-700 transition-colors"
            >
              <X className="size-3" />
              Clear
            </button>
          </div>
        </div>
        <div className="relative">
          <textarea
            id="source"
            className="textarea"
            placeholder="Type or paste text here..."
            onChange={(e) => dispatch(setText(e.target.value))}
            value={textToTranslate}></textarea>
          <div className="absolute bottom-2 right-2 text-zinc-500">{textToTranslate?.length || 0}</div>
        </div>
      </div>
      
      {/*Icon*/}
      <div className="flex items-center justify-center lg:flex-col">
        <div className="size-8 lg:size-12 bg-blue-600 rounded-full grid place-items-center text">
          <ArrowRight className="size-4 lg:size-6 text max-lg:rotate-90" />
        </div>
      </div>
      
      {/*Target Language*/}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="target" className="text-sm text-zinc-300">
            Translated Text
          </label>
          <button 
            onClick={handleCopy}
            disabled={!translatedText}
            className="text-xs text-zinc-400 hover:text-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 px-2 py-1 rounded hover:bg-zinc-700 transition-colors"
          >
            <Copy className="size-3" />
            Copy
          </button>
        </div>
        <div className="relative">
          <textarea
            id="target"
            className="textarea text-gray-300"
            placeholder="translation will appear here..."
            disabled
            value={translatedText}></textarea>
            {isLoading && <Loader /> }
          {!isLoading && !translatedText && !textToTranslate && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-zinc-500 text-sm">
                waiting for translation
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
