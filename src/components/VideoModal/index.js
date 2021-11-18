import { useState, Fragment } from 'react';
import { hasCookieConsent } from '~lib/analytics';

import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), { ssr: false });

const Video = ({ id, className, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      {hasCookieConsent() && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={id}
          onClose={() => setOpen(false)}
        />
      )}
      {!hasCookieConsent() && (
        <ModalVideo
          channel="custom"
          isOpen={isOpen}
          url={`https://www.youtube-nocookie.com/embed/${id}?rel=0&controls=0&showinfo=0`}
          onClose={() => setOpen(false)}
        />
      )}

      <button
        className={`btn-reset${className ? ' ' + className : ''}`}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>
    </Fragment>
  );
};

export default Video;
