import React from "react";
import { Icon } from "../../Icons";
function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0"
      >
        <Icon size={24} name="search" />
      </label>

      <input
        id="search-input"
        autoFocus={true}
        type="text"
        className="h-10 pl-12 outline-none text-black max-w-full w-[22.75rem] bg-white rounded-3xl text-sm font-medium placeholder-black/50 "
        placeholder="Sanatçılar Şarkılar veya podcastler"
      />
    </div>
  );
}

export default Search;
