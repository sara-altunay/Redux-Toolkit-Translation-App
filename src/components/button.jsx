import { Languages } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { translateText } from "../redux/actions";

const Button = () => {
  const { isLoading } = useSelector((store) => store.translate);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center mt-6">
      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(translateText());
        }}
        className={
          "relative px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed"
        }>
        <div className="flex items-center gap-2">
          <Languages className="size-5" />
          <span className="">Translate</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
