import { useState, useEffect } from "react";

function useMedia(mediaQuery) {

  const [isMediaMatches, setIsMediaMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    setIsMediaMatches(media.matches);

    function onMediaHandler(media) {
      setIsMediaMatches(media.matches);
    }
    media.addEventListener('change', onMediaHandler);

    return function () {
      media.removeEventListener('change', onMediaHandler);
    };
  }, [mediaQuery]);

  return isMediaMatches;
}

export default useMedia;