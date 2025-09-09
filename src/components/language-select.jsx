import Select from "react-select";
import { ArrowLeftRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import { setSource, setTarget, swap } from "../redux/slices/translateSlice.js";

const LanguageSelect = () => {
  const dispatch = useDispatch();
  const { isLoading, languages } = useSelector((store) => store.language);
  const { sourceLang, targetLang } = useSelector((store) => store.translate);
  const formatted = useMemo(
    () =>
      languages?.map((item) => ({
        value: item.language,
        label: item.name,
      })),
    [languages]
  );
  const detect = { value: undefined, label: "Detect Language" };

  // Filter out the source language from target options
  const targetOptions = useMemo(() => {
    if (!sourceLang?.value) return formatted;
    return formatted?.filter(lang => lang.value !== sourceLang.value) || [];
  }, [formatted, sourceLang?.value]);

  // Filter out the target language from source options (except detect)
  const sourceOptions = useMemo(() => {
    if (!targetLang?.value) return [detect, ...formatted];
    return [detect, ...(formatted?.filter(lang => lang.value !== targetLang.value) || [])];
  }, [formatted, targetLang?.value, detect]);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#3f3f46",
      borderColor: state.isFocused ? "#3b82f6" : "#52525b",
      borderWidth: "2px",
      borderRadius: "12px",
      boxShadow: state.isFocused ? "0 0 0 1px #3b82f6" : "none",
      "&:hover": {
        borderColor: "#3b82f6",
      },
    }),

    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected
        ? "#3b82f6"
        : state.isFocused
        ? "#52525b"
        : "#3f3f46",
      color: state.isSelected ? "white" : "#e4e4e7",
      padding: "12px 16px",
      cursor: "pointer",
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#3f3f46",
      border: "1px solid #52525b",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: "#e4e4e7",
    }),
    input: (baseStyles, state) => ({
      ...baseStyles,
      color: "#e4e4e7",
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: "#a1a1aa",
    }),
  };

  const handleSwap = () => {
    if (sourceLang?.value && targetLang?.value && sourceLang.value !== targetLang.value) {
      dispatch(swap());
    }
  };

  const handleSourceChange = (value) => {
    dispatch(setSource(value));
    // If the new source is the same as target, clear target
    if (value?.value === targetLang?.value) {
      dispatch(setTarget({ value: "en", label: "English" }));
    }
  };

  const handleTargetChange = (value) => {
    dispatch(setTarget(value));
    // If the new target is the same as source, clear source (except if source is detect)
    if (value?.value === sourceLang?.value && sourceLang?.value !== undefined) {
      dispatch(setSource({ value: undefined, label: "Detect Language" }));
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3 flex-col lg:flex-row lg:items-center">
        <div className="flex-1 w-full">
          <label className="block text-sm text-zinc-300 mb-2">
            Source Language
          </label>
          <Select
            value={sourceLang?.value === undefined ? detect : sourceLang}
            isDisabled={isLoading}
            isLoading={isLoading}
            options={sourceOptions}
            getOptionLabel={(opt) => opt.label}
            getOptionValue={(opt) => String(opt.value)}
            styles={customStyles}
            onChange={handleSourceChange}
            className="text-sm text-black"
          />
        </div>

        <div className="flex items-center justify-center w-full lg:w-auto py-4 lg:py-0">
          <button
            disabled={
              !sourceLang?.value ||
              !targetLang?.value ||
              sourceLang.value === targetLang.value ||
              isLoading
            }
            onClick={handleSwap}
            className="size-10 lg:size-12 bg-zinc-700 hover:bg-zinc-600 disabled:bg-zinc-800 disabled:opacity-50 rounded-full flex items-center justify-center cursor-pointer group"
            type="button">
            <ArrowLeftRight />
          </button>
        </div>

        <div className="flex-1 w-full">
          <label className="block text-sm text-zinc-300 mb-2">
            Target Language
          </label>
          <Select
            value={targetLang}
            isDisabled={isLoading}
            isLoading={isLoading}
            options={targetOptions}
            getOptionLabel={(opt) => opt.label}
            getOptionValue={(opt) => String(opt.value)}
            styles={customStyles}
            onChange={handleTargetChange}
            className="text-sm text-black"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs text-zinc-500">
          {languages?.length} languages available
        </p>
      </div>
    </div>
  );
};

export default LanguageSelect;
