import { History, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setText, clearHistory } from "../redux/slices/translateSlice.js";
import { useState } from "react";

const HistoryComponent = () => {
  const { translationHistory } = useSelector((store) => store.translate);
  const dispatch = useDispatch();
  const [showHistory, setShowHistory] = useState(false);

  const handleHistoryItemClick = (item) => {
    dispatch(setText(item.sourceText));
    setShowHistory(false);
  };

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setShowHistory(!showHistory)}
        className="text-sm text-zinc-400 hover:text-zinc-200 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-700 transition-colors"
      >
        <History className="size-4" />
        History ({translationHistory.length})
      </button>
      
      {showHistory && (
        <div className="absolute top-12 left-0 right-0 bg-zinc-800 border border-zinc-700 rounded-lg p-3 max-h-48 overflow-y-auto z-10 shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-zinc-400 font-medium">Recent translations</div>
            {translationHistory.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="text-xs text-zinc-500 hover:text-red-400 flex items-center gap-1"
              >
                <X className="size-3" />
                Clear
              </button>
            )}
          </div>
          
          {translationHistory.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-zinc-500 text-xs">No translations yet</p>
            </div>
          ) : (
            <div className="space-y-2">
              {translationHistory.slice(-5).reverse().map((item, index) => (
                <div 
                  key={index}
                  onClick={() => handleHistoryItemClick(item)}
                  className="text-xs text-zinc-300 hover:text-white cursor-pointer p-2 hover:bg-zinc-700 rounded border border-zinc-700 hover:border-blue-500 transition-all"
                >
                  <div className="font-medium mb-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                    {item.sourceText}
                  </div>
                  <div className="text-zinc-500 mb-1 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical' }}>
                    {item.translatedText}
                  </div>
                  <div className="text-zinc-600 text-xs">{item.timestamp}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HistoryComponent;
